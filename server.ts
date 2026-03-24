import express from 'express';
import { WebSocketServer, WebSocket } from 'ws';
import { createServer as createViteServer } from 'vite';
import http from 'http';
import path from 'path';
import fs from 'fs';

async function startServer() {
  const app = express();
  const server = http.createServer(app);
  const wss = new WebSocketServer({ server });

  const PORT = 3000;

  // Signaling Server Logic
  const rooms = new Map<string, Set<WebSocket>>();
  const clients = new Map<WebSocket, { id: string, roomId?: string }>();

  wss.on('connection', (ws) => {
    const clientId = Math.random().toString(36).substring(2, 9);
    clients.set(ws, { id: clientId });

    ws.on('message', (message) => {
      try {
        const data = JSON.parse(message.toString());
        const client = clients.get(ws);
        if (!client) return;

        switch (data.type) {
          case 'join-room': {
            const roomId = data.roomId;
            client.roomId = roomId;
            
            if (!rooms.has(roomId)) {
              rooms.set(roomId, new Set());
            }
            const room = rooms.get(roomId)!;
            
            // Send current peers to the new client
            const peers = Array.from(room).filter(p => p !== ws).map(p => clients.get(p)?.id);
            ws.send(JSON.stringify({
              type: 'room-joined',
              roomId,
              peerIds: peers,
              id: client.id
            }));

            // Notify others in the room
            room.forEach(peer => {
              if (peer !== ws && peer.readyState === WebSocket.OPEN) {
                peer.send(JSON.stringify({
                  type: 'peer-joined',
                  peerId: client.id
                }));
              }
            });
            
            room.add(ws);
            break;
          }
          case 'signal': {
            // Relay signal to specific peer
            const room = rooms.get(client.roomId!);
            if (room) {
              room.forEach(peer => {
                const peerClient = clients.get(peer);
                if (peerClient && peerClient.id === data.targetId && peer.readyState === WebSocket.OPEN) {
                  peer.send(JSON.stringify({
                    type: 'signal',
                    senderId: client.id,
                    signal: data.signal
                  }));
                }
              });
            }
            break;
          }
        }
      } catch (e) {
        console.error('Invalid message', e);
      }
    });

    ws.on('close', () => {
      const client = clients.get(ws);
      if (client && client.roomId) {
        const room = rooms.get(client.roomId);
        if (room) {
          room.delete(ws);
          if (room.size === 0) {
            rooms.delete(client.roomId);
          } else {
            room.forEach(peer => {
              if (peer.readyState === WebSocket.OPEN) {
                peer.send(JSON.stringify({
                  type: 'peer-left',
                  peerId: client.id
                }));
              }
            });
          }
        }
      }
      clients.delete(ws);
    });
  });

  // REST API: list active rooms
  app.get('/api/rooms', (req, res) => {
    const result = Array.from(rooms.entries()).map(([id, members]) => ({
      id,
      playerCount: members.size,
    }));
    res.json(result);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "custom",
    });
    // Use Vite's connect middleware but handle SPA fallback manually (skip /api routes)
    app.use(vite.middlewares);
    app.use('*', async (_req, res, next) => {
      try {
        if (_req.originalUrl.startsWith('/api')) return next();
        const html = fs.readFileSync(path.join(process.cwd(), 'index.html'), 'utf-8');
        const transformed = await vite.transformIndexHtml(_req.originalUrl, html);
        res.status(200).set({ 'Content-Type': 'text/html' }).end(transformed);
      } catch (e) {
        vite.ssrFixStacktrace(e as Error);
        next(e);
      }
    });
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  server.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
