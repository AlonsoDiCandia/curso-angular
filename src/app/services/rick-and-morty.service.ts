import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Character, CharacterResponse, Origin, Episode } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  private url = 'https://rickandmortyapi.com/api/'

  constructor(private http: HttpClient) { } 

  getOneCharacterByID(id: number): Observable<Character> {
    const characterUrl = `${this.url}character/${id}`
    return this.http.get<Character>(characterUrl)
  }

  traerUnPersonajePorUrl(url: string): Observable<Character | null> {
    return this.http.get<Character>(url).pipe(
      catchError(() => of(null))
    )
  }

  getCharacters() : Observable<Character[]> {
    const characterUrl = `${this.url}character/`
    return this.http.get<CharacterResponse>(characterUrl).pipe(
      map(resp => resp.results)
    );
  }

  getOrigenesDesdePersonajes() : Observable<Origin[]> { // En esta funcion pretendemos usar el map para obtener los origenes unicos
    const characterUrl = `${this.url}character/`
    return this.http.get<CharacterResponse>(characterUrl).pipe(
      map(resp => resp.results), // [ {name: --, status: --, origin: {name: --}}, {name: --, status: --, origin: {name: --}}, {name: --, status: --, origin: {name: --}}]. Esto tiene 20 elementos
      map(per => per.map(
        p => p.origin // [ {origin: {name: --}}, {origin: {name: --}}, {origin: {name: --}}]. Esto tiene 20 elementos
      )),
      map(origenes => Array.from(new Map(origenes.map(o => [o.name, o])).values())) // array('Alexis': 'Parma', 'Claudio': 'Sevilla')       [['s', Origin],['ss', Origin],['se', Origin],['as', Origin]]
    );
  }

  getOrigen(url: string) : Observable<Origin> {
    return this.http.get<Origin>(url)
  }

  getEpisode(url: string) : Observable<Episode> {
    return this.http.get<Episode>(url).pipe(
      map(e => ({ ...e, url, episode_number: e.air_date.slice(1,3), season: e.air_date.slice(4,6)}))
    );
  }
}