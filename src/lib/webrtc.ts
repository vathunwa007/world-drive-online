export type PeerData = {
  id: string;
  lat: number;
  lng: number;
  heading: number;
  speed: number;
  steeringAngle: number;
  pitch: number;
  roll: number;
  carType: string;
  carColor: string;
  playerName: string;
};

export type ChatMessage = {
  id: string;
  senderId: string;
  senderName: string;
  text: string;
  timestamp: number;
};

export type SignalingMode = 'self-hosted' | 'piesocket';

export class WebRTCManager {
  private ws: WebSocket | null = null;
  private peers: Map<string, RTCPeerConnection> = new Map();
  private dataChannels: Map<string, RTCDataChannel> = new Map();
  public myId: string = '';
  public roomId: string = '';
  private mode: SignalingMode;
  private signalingUrl: string;
  private heartbeatInterval: ReturnType<typeof setInterval> | null = null;

  public onPeerJoined?: (peerId: string) => void;
  public onPeerLeft?: (peerId: string) => void;
  public onPeerData?: (peerId: string, data: PeerData) => void;
  public onChatMessage?: (msg: ChatMessage) => void;
  public onConnected?: () => void;

  constructor(signalingUrl: string, mode: SignalingMode = 'self-hosted') {
    this.signalingUrl = signalingUrl;
    this.mode = mode;
  }

  public connect(roomId: string) {
    this.roomId = roomId;

    if (this.mode === 'piesocket') {
      this.myId = Math.random().toString(36).substring(2, 9);
      this.connectPieSocket(roomId);
    } else {
      this.connectSelfHosted(roomId);
    }
  }

  private connectSelfHosted(roomId: string) {
    this.ws = new WebSocket(this.signalingUrl);

    this.ws.onopen = () => {
      this.ws?.send(JSON.stringify({ type: 'join-room', roomId }));
    };

    this.ws.onmessage = async (event) => {
      const data = JSON.parse(event.data);

      switch (data.type) {
        case 'room-joined':
          this.myId = data.id;
          if (this.onConnected) this.onConnected();
          for (const peerId of data.peerIds) {
            if (this.onPeerJoined) this.onPeerJoined(peerId);
            await this.createPeerConnection(peerId, true);
          }
          break;

        case 'peer-joined':
          if (this.onPeerJoined) this.onPeerJoined(data.peerId);
          await this.createPeerConnection(data.peerId, false);
          break;

        case 'peer-left':
          this.removePeer(data.peerId);
          if (this.onPeerLeft) this.onPeerLeft(data.peerId);
          break;

        case 'signal':
          await this.handleSignal(data.senderId, data.signal);
          break;
      }
    };
  }

  private connectPieSocket(roomId: string) {
    // PieSocket broadcasts all messages to everyone in the channel.
    // We use the room ID as the channel name.
    this.ws = new WebSocket(this.signalingUrl);

    this.ws.onopen = () => {
      // Announce ourselves to the channel
      this.broadcast({
        type: 'peer-announce',
        senderId: this.myId,
        roomId,
      });
      if (this.onConnected) this.onConnected();

      // Periodically send heartbeat so new joiners discover us
      this.heartbeatInterval = setInterval(() => {
        this.broadcast({
          type: 'peer-heartbeat',
          senderId: this.myId,
        });
      }, 10000);
    };

    this.ws.onmessage = async (event) => {
      let data: any;
      try {
        data = JSON.parse(event.data);
      } catch {
        return;
      }

      // PieSocket may wrap messages in a system envelope
      if (data.event === 'system' || data.sender === 'system') return;
      // If PieSocket wraps the payload in a `data` field, unwrap it
      if (data.event && data.data) {
        try {
          data = typeof data.data === 'string' ? JSON.parse(data.data) : data.data;
        } catch {
          return;
        }
      }

      // Ignore our own messages
      if (data.senderId === this.myId) return;

      switch (data.type) {
        case 'peer-announce': {
          // A peer announced itself — if we don't know them yet, connect
          if (!this.peers.has(data.senderId)) {
            if (this.onPeerJoined) this.onPeerJoined(data.senderId);
            // The one with the "higher" ID initiates to avoid duplicate connections
            const isInitiator = this.myId > data.senderId;
            await this.createPeerConnection(data.senderId, isInitiator);
            // Respond so they know about us too
            this.broadcast({
              type: 'peer-announce',
              senderId: this.myId,
              roomId: this.roomId,
            });
          }
          break;
        }

        case 'peer-heartbeat': {
          if (!this.peers.has(data.senderId)) {
            if (this.onPeerJoined) this.onPeerJoined(data.senderId);
            const isInitiator = this.myId > data.senderId;
            await this.createPeerConnection(data.senderId, isInitiator);
          }
          break;
        }

        case 'peer-left': {
          this.removePeer(data.senderId);
          if (this.onPeerLeft) this.onPeerLeft(data.senderId);
          break;
        }

        case 'signal': {
          // Only process signals addressed to us
          if (data.targetId !== this.myId) break;
          await this.handleSignal(data.senderId, data.signal);
          break;
        }
      }
    };

    this.ws.onclose = () => {
      if (this.heartbeatInterval) {
        clearInterval(this.heartbeatInterval);
        this.heartbeatInterval = null;
      }
    };
  }

  private broadcast(data: any) {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify(data));
    }
  }

  public disconnect() {
    // Notify peers before leaving (PieSocket mode)
    if (this.mode === 'piesocket' && this.myId) {
      this.broadcast({ type: 'peer-left', senderId: this.myId });
    }

    if (this.heartbeatInterval) {
      clearInterval(this.heartbeatInterval);
      this.heartbeatInterval = null;
    }

    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
    for (const peerId of this.peers.keys()) {
      this.removePeer(peerId);
    }
  }

  private async createPeerConnection(peerId: string, isInitiator: boolean) {
    const pc = new RTCPeerConnection({
      iceServers: [{ urls: 'stun:stun.l.google.com:19302' }]
    });

    this.peers.set(peerId, pc);

    pc.onicecandidate = (event) => {
      if (event.candidate) {
        this.sendSignal(peerId, { type: 'candidate', candidate: event.candidate });
      }
    };

    if (isInitiator) {
      const dc = pc.createDataChannel('game-data');
      this.setupDataChannel(peerId, dc);

      const offer = await pc.createOffer();
      await pc.setLocalDescription(offer);
      this.sendSignal(peerId, { type: 'offer', offer });
    } else {
      pc.ondatachannel = (event) => {
        this.setupDataChannel(peerId, event.channel);
      };
    }
  }

  private setupDataChannel(peerId: string, dc: RTCDataChannel) {
    this.dataChannels.set(peerId, dc);

    dc.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === 'sync' && this.onPeerData) {
        this.onPeerData(peerId, data.payload);
      } else if (data.type === 'chat' && this.onChatMessage) {
        this.onChatMessage(data.payload);
      }
    };
  }

  private async handleSignal(peerId: string, signal: any) {
    const pc = this.peers.get(peerId);
    if (!pc) return;

    if (signal.type === 'offer') {
      await pc.setRemoteDescription(new RTCSessionDescription(signal.offer));
      const answer = await pc.createAnswer();
      await pc.setLocalDescription(answer);
      this.sendSignal(peerId, { type: 'answer', answer });
    } else if (signal.type === 'answer') {
      await pc.setRemoteDescription(new RTCSessionDescription(signal.answer));
    } else if (signal.type === 'candidate') {
      await pc.addIceCandidate(new RTCIceCandidate(signal.candidate));
    }
  }

  private sendSignal(targetId: string, signal: any) {
    if (this.mode === 'piesocket') {
      // PieSocket: broadcast with targetId so recipient can filter
      this.broadcast({
        type: 'signal',
        senderId: this.myId,
        targetId,
        signal,
      });
    } else {
      // Self-hosted: server routes to the target
      if (this.ws && this.ws.readyState === WebSocket.OPEN) {
        this.ws.send(JSON.stringify({
          type: 'signal',
          targetId,
          signal
        }));
      }
    }
  }

  private removePeer(peerId: string) {
    const pc = this.peers.get(peerId);
    if (pc) {
      pc.close();
      this.peers.delete(peerId);
    }
    const dc = this.dataChannels.get(peerId);
    if (dc) {
      dc.close();
      this.dataChannels.delete(peerId);
    }
  }

  public broadcastSync(data: Omit<PeerData, 'id'>) {
    const payload = JSON.stringify({
      type: 'sync',
      payload: { ...data, id: this.myId }
    });

    for (const dc of this.dataChannels.values()) {
      if (dc.readyState === 'open') {
        dc.send(payload);
      }
    }
  }

  public broadcastChat(text: string, senderName: string) {
    const msg: ChatMessage = {
      id: Math.random().toString(36).substring(2, 9),
      senderId: this.myId,
      senderName,
      text,
      timestamp: Date.now()
    };

    const payload = JSON.stringify({
      type: 'chat',
      payload: msg
    });

    for (const dc of this.dataChannels.values()) {
      if (dc.readyState === 'open') {
        dc.send(payload);
      }
    }

    if (this.onChatMessage) {
      this.onChatMessage(msg);
    }
  }
}
