import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Character, CharacterResponse } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  private url = 'https://rickandmortyapi.com/api/'

  constructor(private http: HttpClient) { } 

  getCharacters() : Observable<Character[]> {
    const characterUrl = `${this.url}character/`
    return this.http.get<CharacterResponse>(characterUrl).pipe(
      map(resp => resp.results)
    );
  }

  getOneCharacter(id: number): Observable<Character> {
    const characterUrl = `${this.url}character/${id}`
    return this.http.get<Character>(characterUrl)
  }

}