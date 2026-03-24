import React, { useEffect, useState } from 'react';
import { Users, RefreshCw, DoorOpen, Gamepad2 } from 'lucide-react';

type RoomInfo = {
  id: string;
  playerCount: number;
};

type RoomLobbyProps = {
  onJoinRoom: (roomId: string) => void;
};

export function RoomLobby({ onJoinRoom }: RoomLobbyProps) {
  const [rooms, setRooms] = useState<RoomInfo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const isStaticHost = !window.location.hostname.includes('localhost') && !window.location.hostname.includes('127.0.0.1');

  const fetchRooms = async () => {
    if (isStaticHost) {
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
    fetchRooms();
    if (isStaticHost) return;
    const interval = setInterval(fetchRooms, 5000);
    return () => clearInterval(interval);
  }, []);

  const totalPlayers = rooms.reduce((sum, r) => sum + r.playerCount, 0);

  return (
    <div className="w-full max-w-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Gamepad2 className="w-5 h-5 text-blue-400" />
          Active Rooms
        </h2>
        <div className="flex items-center gap-3">
          <span className="text-sm text-slate-400 flex items-center gap-1">
            <Users className="w-4 h-4" />
            {totalPlayers} online
          </span>
          <button
            onClick={fetchRooms}
            disabled={loading}
            className="text-slate-400 hover:text-white transition-colors disabled:opacity-50"
            title="Refresh"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          </button>
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
