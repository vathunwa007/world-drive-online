import React, { useEffect, useState, useRef } from 'react';
import { Users, RefreshCw, DoorOpen, Gamepad2, Wifi, Server } from 'lucide-react';

const PIESOCKET_API_KEY = import.meta.env.VITE_PIESOCKET_API_KEY || '';
const PIESOCKET_CLUSTER_ID = import.meta.env.VITE_PIESOCKET_CLUSTER_ID || '';
const SERVER_URL = import.meta.env.VITE_SERVER_URL || '';
const SERVER_API_KEY = import.meta.env.VITE_SERVER_API_KEY || '';

type RoomInfo = {
  id: string;
  playerCount: number;
};

type RoomLobbyProps = {
  onJoinRoom: (roomId: string) => void;
};

const LOBBY_CHANNEL = '__lobby__';
// If a player hasn't sent a heartbeat in this long, consider them gone
const PLAYER_TIMEOUT_MS = 12000;

export function RoomLobby({ onJoinRoom }: RoomLobbyProps) {
  const [rooms, setRooms] = useState<RoomInfo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [connected, setConnected] = useState(false);

  const isStaticHost = !window.location.hostname.includes('localhost') && !window.location.hostname.includes('127.0.0.1');
  const hasPieSocket = !!(PIESOCKET_API_KEY && PIESOCKET_CLUSTER_ID);
  const hasRemoteServer = !!(SERVER_URL);

  // Track individual players: { playerId: { roomId, lastSeen } }
  const playersRef = useRef<Map<string, { roomId: string; lastSeen: number }>>(new Map());
  const lobbyWsRef = useRef<WebSocket | null>(null);

  // Aggregate players into rooms
  const aggregateRooms = () => {
    const now = Date.now();
    const roomMap = new Map<string, number>();

    for (const [playerId, info] of playersRef.current) {
      if (now - info.lastSeen > PLAYER_TIMEOUT_MS) {
        playersRef.current.delete(playerId);
        continue;
      }
      roomMap.set(info.roomId, (roomMap.get(info.roomId) || 0) + 1);
    }

    const result: RoomInfo[] = Array.from(roomMap.entries())
      .map(([id, playerCount]) => ({ id, playerCount }))
      .sort((a, b) => b.playerCount - a.playerCount);

    setRooms(result);
    setLoading(false);
  };

  // Remote server mode: fetch rooms via WebSocket (avoids CORS issues with HTTP)
  useEffect(() => {
    if (!hasRemoteServer) return;

    const serverOrigin = SERVER_URL.replace(/\/$/, '');
    const wsProtocol = serverOrigin.startsWith('https') ? 'wss:' : 'ws:';
    const wsHost = serverOrigin.replace(/^https?:\/\//, '');
    const apiKeyParam = SERVER_API_KEY ? `?apiKey=${encodeURIComponent(SERVER_API_KEY)}` : '';
    const wsUrl = `${wsProtocol}//${wsHost}${apiKeyParam}`;

    const ws = new WebSocket(wsUrl);
    lobbyWsRef.current = ws;

    ws.onopen = () => {
      setLoading(false);
      setConnected(true);
      // Request room list from server (requires list-rooms support on server)
      ws.send(JSON.stringify({ type: 'list-rooms' }));
    };

    ws.onmessage = (event) => {
      let data: any;
      try {
        data = JSON.parse(event.data);
      } catch {
        return;
      }

      // Handle room list response from server
      if (data.type === 'room-list' && Array.isArray(data.rooms)) {
        const roomList: RoomInfo[] = data.rooms.map((r: any) => ({
          id: r.id,
          playerCount: r.playerCount,
        }));
        setRooms(roomList);
        setLoading(false);
      }
    };

    ws.onerror = () => {
      setError('Could not connect to server');
      setLoading(false);
      setConnected(false);
    };

    ws.onclose = (event) => {
      setConnected(false);
      // Server rejected the API key
      if (event.code === 4001) {
        setError('Server rejected API key — check VITE_SERVER_API_KEY');
      }
    };

    // Periodically request updated room list
    const interval = setInterval(() => {
      if (ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify({ type: 'list-rooms' }));
      }
    }, 5000);

    return () => {
      clearInterval(interval);
      ws.close();
      lobbyWsRef.current = null;
    };
  }, []);

  // PieSocket lobby: connect to the __lobby__ channel to discover rooms
  // Only used when remote server is NOT configured
  useEffect(() => {
    if (hasRemoteServer || !hasPieSocket) return;

    const wsUrl = `wss://${PIESOCKET_CLUSTER_ID}.piesocket.com/v3/${encodeURIComponent(LOBBY_CHANNEL)}?api_key=${PIESOCKET_API_KEY}`;
    const ws = new WebSocket(wsUrl);
    lobbyWsRef.current = ws;

    ws.onopen = () => {
      setLoading(false);
      setConnected(true);
      // Ask everyone who's online to announce themselves
      ws.send(JSON.stringify({ type: 'lobby-ping' }));
    };

    ws.onmessage = (event) => {
      let data: any;
      try {
        data = JSON.parse(event.data);
      } catch {
        return;
      }

      // Skip PieSocket system messages
      if (data.event === 'system' || data.sender === 'system') return;
      if (data.event && data.data) {
        try {
          data = typeof data.data === 'string' ? JSON.parse(data.data) : data.data;
        } catch {
          return;
        }
      }

      if (data.type === 'lobby-room-announce' && data.playerId && data.roomId) {
        playersRef.current.set(data.playerId, {
          roomId: data.roomId,
          lastSeen: Date.now(),
        });
        aggregateRooms();
      }

      if (data.type === 'lobby-player-left' && data.playerId) {
        playersRef.current.delete(data.playerId);
        aggregateRooms();
      }
    };

    ws.onerror = () => {
      setError('Could not connect to lobby');
      setLoading(false);
      setConnected(false);
    };

    // Periodically clean up stale players
    const cleanupInterval = setInterval(aggregateRooms, 5000);

    return () => {
      clearInterval(cleanupInterval);
      ws.close();
      lobbyWsRef.current = null;
    };
  }, []);

  // Self-hosted local mode: fetch /api/rooms via HTTP
  const fetchRooms = async () => {
    if (hasRemoteServer || hasPieSocket || isStaticHost) {
      setLoading(false);
      return;
    }
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/rooms');
      if (!res.ok) throw new Error('Failed to fetch rooms');
      const data: RoomInfo[] = await res.json();
      setRooms(data);
    } catch {
      setError('Could not load rooms');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (hasRemoteServer || hasPieSocket || isStaticHost) return;
    fetchRooms();
    const interval = setInterval(fetchRooms, 5000);
    return () => clearInterval(interval);
  }, []);

  const totalPlayers = rooms.reduce((sum, r) => sum + r.playerCount, 0);

  const modeIcon = hasRemoteServer ? (
    <Server className="w-5 h-5 text-blue-400" />
  ) : hasPieSocket ? (
    <Wifi className="w-5 h-5 text-emerald-400" />
  ) : (
    <Gamepad2 className="w-5 h-5 text-blue-400" />
  );

  return (
    <div className="w-full max-w-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          {modeIcon}
          Active Rooms
        </h2>
        <div className="flex items-center gap-3">
          {(hasRemoteServer || hasPieSocket) && connected && (
            <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full">
              Online
            </span>
          )}
          <span className="text-sm text-slate-400 flex items-center gap-1">
            <Users className="w-4 h-4" />
            {totalPlayers} online
          </span>
          {!hasRemoteServer && !hasPieSocket && (
            <button
              onClick={fetchRooms}
              disabled={loading}
              className="text-slate-400 hover:text-white transition-colors disabled:opacity-50"
              title="Refresh"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            </button>
          )}
        </div>
      </div>

      {error && (
        <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-3 rounded-lg mb-4 text-sm">
          {error}
        </div>
      )}

      {rooms.length === 0 && !loading && !error && (
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 text-center">
          <DoorOpen className="w-10 h-10 text-slate-600 mx-auto mb-3" />
          <p className="text-slate-400 text-sm">No active rooms</p>
          <p className="text-slate-500 text-xs mt-1">Create one by entering a Room ID below</p>
        </div>
      )}

      {rooms.length > 0 && (
        <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
          {rooms.map((room) => (
            <button
              key={room.id}
              onClick={() => onJoinRoom(room.id)}
              className="w-full flex items-center justify-between bg-slate-800/70 hover:bg-slate-700/70 border border-slate-700 hover:border-blue-500/50 rounded-xl px-4 py-3 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="bg-blue-500/20 p-2 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                  <DoorOpen className="w-4 h-4 text-blue-400" />
                </div>
                <span className="font-mono text-white font-medium">{room.id}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                  </span>
                  <span className="text-sm text-slate-300">
                    {room.playerCount} player{room.playerCount !== 1 ? 's' : ''}
                  </span>
                </div>
                <span className="text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Join →
                </span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
