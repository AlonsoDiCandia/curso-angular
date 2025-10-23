import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    return this.http.get<Pokemon>(url);
  }
}
