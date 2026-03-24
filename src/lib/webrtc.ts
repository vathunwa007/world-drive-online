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

export class WebRTCManager {
  private ws: WebSocket | null = null;
  private peers: Map<string, RTCPeerConnection> = new Map();
  private dataChannels: Map<string, RTCDataChannel> = new Map();
  public myId: string = '';
  public roomId: string = '';

  public onPeerJoined?: (peerId: string) => void;
  public onPeerLeft?: (peerId: string) => void;
  public onPeerData?: (peerId: string, data: PeerData) => void;
  public onChatMessage?: (msg: ChatMessage) => void;
  public onConnected?: () => void;

  constructor(private signalingUrl: string) {}

  public connect(roomId: string) {
    this.roomId = roomId;
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
          // Create connections to existing peers
          for (const peerId of data.peerIds) {
            if (this.onPeerJoined) this.onPeerJoined(peerId);
            await this.createPeerConnection(peerId, true);
          }
          break;

        case 'peer-joined':
          // A new peer joined, they will initiate the connection
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

  public disconnect() {
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
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify({
        type: 'signal',
        targetId,
        signal
      }));
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
