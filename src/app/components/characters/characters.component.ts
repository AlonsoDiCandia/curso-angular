import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character';

import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit{

  valor: number = 0;
  characters: Character[] = [];
  character?: Character;

  constructor(private rickAndMortyService: RickAndMortyService) {}

  ngOnInit(): void {
    this.rickAndMortyService.getCharacters().subscribe(
      data => {
        this.characters = data 
      }
    );
  }

  procesarValor(valor: string) {
    this.valor = Number(valor);
    this.mostrarUnPersonaje();
  }

  mostrarUnPersonaje() {
    this.rickAndMortyService.getOneCharacter(this.valor).subscribe(
      data => {
        this.character = data
      }
    )
  }

}