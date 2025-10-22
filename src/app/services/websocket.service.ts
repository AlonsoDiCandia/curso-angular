// random-ws.service.ts
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RandomWsService {
  connect(url = 'ws://localhost:9000/ws'): Observable<{ timestamp: string; value: number }> {
    return new Observable(sub => {
      const socket = new WebSocket(url);

      socket.onmessage = (evt) => {
        try {
          sub.next(JSON.parse(evt.data));
        } catch (e) {
          // si llega texto no JSON, emitimos como string
          sub.next({ timestamp: new Date().toISOString(), value: Number.NaN } as any);
        }
      };
      socket.onerror = (err) => sub.error(err);
      socket.onclose = () => sub.complete();

      // Teardown al desuscribirse
      return () => socket.close();
    });
  }
}
