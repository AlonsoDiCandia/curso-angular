import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Character, CharacterResponse } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  private url = 'https://rickandmortyapi.com/api/character'

  constructor(private http: HttpClient) { } // yo ya tengo disponible en el servicio una variable propia del servicio llamada http

  getCharacters() : Observable<Character[]> {
    return this.http.get<CharacterResponse>(this.url).pipe(
      map(resp => resp.results)
    );
  }

}