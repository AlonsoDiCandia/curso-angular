import { Injectable } from '@angular/core';
import { timer, throwError, retry } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Pokedex, Pokemon } from 'src/app/models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  constructor(private http: HttpClient) { }

  getPokedex() {
    const url = 'https://pokeapi.co/api/v2/pokemon/?limit=151';
    return this.http.get<Pokedex>(url);
  }

  getPokemon(url: string) {
    return this.http.get<Pokemon>(url).pipe(
      retry({
        count: 3,
        delay: (err: HttpErrorResponse, retryCount) => {
          // Solo reintenta 429 y 5xx
          const reintentar = err.status === 429 || (err.status >= 500 && err.status < 600);
          if (!reintentar) return throwError(() => err);

          return timer(1000);
        }
      })
    );
  }
}
