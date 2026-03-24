import React, { useEffect, useRef, useState } from 'react';
import { Map3D } from './components/Map3D';
import { Speedometer } from './components/Speedometer';
import { CarPhysics } from './lib/physics';
import { WebRTCManager, PeerData, ChatMessage } from './lib/webrtc';
import { RoomLobby } from './components/RoomLobby';
import { Car, Users, MessageSquare, Send, Check } from 'lucide-react';

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';
const GOOGLE_MAPS_MAP_ID = import.meta.env.VITE_GOOGLE_MAPS_MAP_ID || '';

// Default starting location (Bangkok, Thailand)
const START_LAT = 13.7563;
const START_LNG = 100.5018;

const CAR_MODELS = [
  { id: 'sports', name: 'Sports Car' },
  { id: 'suv', name: 'SUV' },
  { id: 'truck', name: 'Truck' },
  { id: 'compact', name: 'Compact' },
];

const CAR_COLORS = [
  { id: '#ef4444', name: 'Red' },
  { id: '#3b82f6', name: 'Blue' },
  { id: '#eab308', name: 'Yellow' },
  { id: '#22c55e', name: 'Green' },
  { id: '#a855f7', name: 'Purple' },
  { id: '#f97316', name: 'Orange' },
  { id: '#ffffff', name: 'White' },
  { id: '#1f2937', name: 'Black' },
];

export default function App() {
  const [inGame, setInGame] = useState(false);
  const [roomId, setRoomId] = useState('');
  const [apiKey, setApiKey] = useState(GOOGLE_MAPS_API_KEY);
  const [mapId, setMapId] = useState(GOOGLE_MAPS_MAP_ID || 'DEMO_MAP_ID');
  const [error, setError] = useState('');

  const [myCar] = useState(() => new CarPhysics(START_LAT, START_LNG, 0));
  const peersRef = useRef<Map<string, PeerData>>(new Map());
  const [peerCount, setPeerCount] = useState(0); // Only update state when peer joins/leaves
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [chatInput, setChatInput] = useState('');
  const [showChat, setShowChat] = useState(false);
  const showChatRef = useRef(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [selectedCarType, setSelectedCarType] = useState(CAR_MODELS[0].id);
  const [selectedCarColor, setSelectedCarColor] = useState(CAR_COLORS[0].id);
  const [playerName, setPlayerName] = useState('Player' + Math.floor(Math.random() * 1000));

  const webrtcRef = useRef<WebRTCManager | null>(null);
  const keysRef = useRef<{ [key: string]: boolean }>({});
  const animationFrameRef = useRef<number>(0);
  
  const audioCtxRef = useRef<AudioContext | null>(null);
  const engineOscRef = useRef<OscillatorNode | null>(null);
  const engineGainRef = useRef<GainNode | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      keysRef.current[e.key] = true;
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      keysRef.current[e.key] = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  const startGame = () => {
    if (!apiKey || !roomId) {
      setError('Please fill in all required fields.');
      return;
    }
    setError('');

    // Initialize WebRTC
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const wsUrl = `${protocol}//${window.location.host}`;
    
    const webrtc = new WebRTCManager(wsUrl);
    webrtcRef.current = webrtc;

    webrtc.onPeerData = (peerId, data) => {
      peersRef.current.set(peerId, data);
    };

    webrtc.onPeerLeft = (peerId) => {
      peersRef.current.delete(peerId);
      setPeerCount(peersRef.current.size);
    };

    webrtc.onPeerJoined = (peerId) => {
      setPeerCount(peersRef.current.size + 1);
    };

    webrtc.onChatMessage = (msg) => {
      setChatMessages(prev => [...prev.slice(-49), msg]);
      if (!showChatRef.current) {
        setUnreadCount(prev => prev + 1);
      }
    };

    webrtc.connect(roomId);
    setInGame(true);

    // Initialize Audio
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      const audioCtx = new AudioContext();
      audioCtxRef.current = audioCtx;

      const osc = audioCtx.createOscillator();
      osc.type = 'sawtooth';
      osc.frequency.value = 50; // Base idle frequency

      const filter = audioCtx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 400;

      const gainNode = audioCtx.createGain();
      gainNode.gain.value = 0.05; // Start idle volume

      osc.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      osc.start();
      engineOscRef.current = osc;
      engineGainRef.current = gainNode;
    } catch (e) {
      console.error("Audio initialization failed:", e);
    }

    let lastBroadcast = 0;
    const loop = (time: number) => {
      myCar.update(keysRef.current);
      
      // Update engine sound
      if (engineOscRef.current && engineGainRef.current && audioCtxRef.current) {
        const speedKmh = Math.abs(myCar.speed * 24000000);
        const targetPitch = 50 + speedKmh * 1.5; 
        engineOscRef.current.frequency.setTargetAtTime(targetPitch, audioCtxRef.current.currentTime, 0.1);

        const isAccelerating = keysRef.current['ArrowUp'] || keysRef.current['w'] || keysRef.current['W'];
        const isBraking = keysRef.current['ArrowDown'] || keysRef.current['s'] || keysRef.current['S'];
        
        let targetVolume = 0.05; // Idle volume
        if (isAccelerating) targetVolume = 0.15;
        else if (isBraking) targetVolume = 0.1;
        else if (speedKmh > 5) targetVolume = 0.1; // Coasting
        
        engineGainRef.current.gain.setTargetAtTime(targetVolume, audioCtxRef.current.currentTime, 0.1);
      }

      if (webrtcRef.current && time - lastBroadcast > 33) { // ~30fps
        webrtcRef.current.broadcastSync({
          lat: myCar.lat,
          lng: myCar.lng,
          heading: myCar.heading,
          speed: myCar.speed,
          steeringAngle: myCar.steeringAngle,
          pitch: myCar.pitch,
          roll: myCar.roll,
          carType: selectedCarType,
          carColor: selectedCarColor,
          playerName: playerName
        });
        lastBroadcast = time;
      }

      animationFrameRef.current = requestAnimationFrame(loop);
    };
    animationFrameRef.current = requestAnimationFrame(loop);
  };

  const stopGame = () => {
    if (webrtcRef.current) {
      webrtcRef.current.disconnect();
      webrtcRef.current = null;
    }
    
    if (audioCtxRef.current) {
      audioCtxRef.current.close();
      audioCtxRef.current = null;
      engineOscRef.current = null;
      engineGainRef.current = null;
    }
    
    cancelAnimationFrame(animationFrameRef.current);
    setInGame(false);
    peersRef.current.clear();
    setPeerCount(0);
    setChatMessages([]);
  };

  const sendChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim() || !webrtcRef.current) return;
    webrtcRef.current.broadcastChat(chatInput, playerName);
    setChatInput('');
  };

  if (!inGame) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 text-slate-100 font-sans">
        <div className="max-w-lg w-full bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-slate-700">
          <div className="p-8">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-blue-500 p-3 rounded-xl shadow-lg shadow-blue-500/30">
                <Car className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-center mb-2">World Drive</h1>
            <p className="text-slate-400 text-center mb-8">Multiplayer driving on real-world maps</p>

            <RoomLobby onJoinRoom={(id) => setRoomId(id)} />

            <div className="my-4 flex items-center gap-3">
              <div className="flex-1 h-px bg-slate-700" />
              <span className="text-xs text-slate-500 uppercase">or create a room</span>
              <div className="flex-1 h-px bg-slate-700" />
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-3 rounded-lg mb-6 text-sm">
                {error}
              </div>
            )}

            <div className="space-y-4">
              <div className="space-y-3 mb-6">
                <label className="block text-sm font-medium text-slate-400">Select Car</label>
                <div className="grid grid-cols-2 gap-2">
                  {CAR_MODELS.map(model => (
                    <button
                      key={model.id}
                      onClick={() => setSelectedCarType(model.id)}
                      className={`py-2 px-3 rounded-lg border text-sm font-medium transition-all ${
                        selectedCarType === model.id 
                          ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/20' 
                          : 'bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-200'
                      }`}
                    >
                      {model.name}
                    </button>
                  ))}
                </div>
                
                <label className="block text-sm font-medium text-slate-400 mt-4">Select Color</label>
                <div className="flex flex-wrap gap-2">
                  {CAR_COLORS.map(color => (
                    <button
                      key={color.id}
                      onClick={() => setSelectedCarColor(color.id)}
                      style={{ backgroundColor: color.id }}
                      className={`w-8 h-8 rounded-full border-2 transition-all flex items-center justify-center ${
                        selectedCarColor === color.id 
                          ? 'border-white scale-110 shadow-lg' 
                          : 'border-transparent hover:scale-105 opacity-80 hover:opacity-100'
                      }`}
                      title={color.name}
                    >
                      {selectedCarColor === color.id && (
                        <Check className={`w-4 h-4 ${color.id === '#ffffff' ? 'text-black' : 'text-white'}`} />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Player Name</label>
                <input
                  type="text"
                  value={playerName}
                  onChange={(e) => setPlayerName(e.target.value)}
                  placeholder="e.g. SpeedRacer"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Room ID</label>
                <input
                  type="text"
                  value={roomId}
                  onChange={(e) => setRoomId(e.target.value)}
                  placeholder="e.g. tokyo-drift"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              {!GOOGLE_MAPS_API_KEY && (
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1">Google Maps API Key</label>
                  <input
                    type="password"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    placeholder="AIzaSy..."
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              )}

              {!GOOGLE_MAPS_MAP_ID && (
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1">Vector Map ID</label>
                  <input
                    type="text"
                    value={mapId}
                    onChange={(e) => setMapId(e.target.value)}
                    placeholder="e.g. 8e0a97af9386fef"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              )}

              <button
                onClick={startGame}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-4 rounded-lg transition-colors mt-4 shadow-lg shadow-blue-600/20"
              >
                Join Game
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-slate-900">
      <Map3D 
        apiKey={apiKey} 
        mapId={mapId} 
        myCar={myCar} 
        myCarType={selectedCarType}
        myCarColor={selectedCarColor}
        playerName={playerName}
        peersRef={peersRef} 
        onMapError={(msg) => {
          stopGame();
          setError(msg);
        }}
      />

      {/* HUD */}
      <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md border border-slate-700/50 p-4 rounded-xl shadow-2xl text-white">
        <h2 className="font-bold text-lg mb-1 flex items-center gap-2">
          <Car className="w-5 h-5 text-blue-400" />
          World Drive
        </h2>
        <div className="text-sm text-slate-300 space-y-1">
          <p>Room: <span className="text-white font-mono">{roomId}</span></p>
          <p className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {peerCount + 1} Player{peerCount !== 0 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md border border-slate-700/50 p-4 rounded-xl shadow-2xl text-white text-sm">
        <p className="font-semibold mb-2 text-slate-300">Controls</p>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
          <span className="text-slate-400">Accelerate</span>
          <span className="font-mono bg-slate-800 px-2 py-0.5 rounded text-center">W / ↑</span>
          <span className="text-slate-400">Brake/Rev</span>
          <span className="font-mono bg-slate-800 px-2 py-0.5 rounded text-center">S / ↓</span>
          <span className="text-slate-400">Steer</span>
          <span className="font-mono bg-slate-800 px-2 py-0.5 rounded text-center">A D / ← →</span>
        </div>
        <button 
          onClick={stopGame}
          className="w-full mt-4 bg-red-500/20 hover:bg-red-500/40 text-red-400 py-1.5 rounded transition-colors"
        >
          Leave Game
        </button>
      </div>

      <Speedometer car={myCar} />

      {/* Chat UI */}
      <div className={`absolute bottom-4 left-4 w-80 bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-xl shadow-2xl flex flex-col transition-all duration-300 ${showChat ? 'h-96' : 'h-12'}`}>
        <button 
          onClick={() => { const next = !showChat; setShowChat(next); showChatRef.current = next; if (next) setUnreadCount(0); }}
          className="flex items-center justify-between p-3 text-white hover:bg-slate-800/50 rounded-t-xl transition-colors"
        >
          <span className="flex items-center gap-2 font-medium">
            <MessageSquare className="w-4 h-4 text-blue-400" />
            Chat
          </span>
          {unreadCount > 0 && !showChat && (
            <span className="bg-blue-500 text-xs px-2 py-0.5 rounded-full">{unreadCount}</span>
          )}
        </button>
        
        {showChat && (
          <>
            <div className="flex-1 overflow-y-auto p-3 space-y-2 border-t border-slate-700/50 scrollbar-thin scrollbar-thumb-slate-600">
              {chatMessages.map(msg => (
                <div key={msg.id} className={`text-sm ${msg.senderId === webrtcRef.current?.myId ? 'text-blue-300 text-right' : 'text-slate-300'}`}>
                  <span className="font-mono text-xs opacity-50 mr-2">{msg.senderName}</span>
                  <span className="bg-slate-800/80 px-2 py-1 rounded-lg inline-block">{msg.text}</span>
                </div>
              ))}
            </div>
            <form onSubmit={sendChat} className="p-2 border-t border-slate-700/50 flex gap-2">
              <input
                type="text"
                value={chatInput}
                onChange={e => setChatInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 bg-slate-800 border border-slate-700 rounded px-3 py-1.5 text-sm text-white focus:outline-none focus:border-blue-500"
              />
              <button type="submit" className="bg-blue-600 hover:bg-blue-500 text-white p-1.5 rounded transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
