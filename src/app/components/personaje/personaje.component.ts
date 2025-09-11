import { Component } from '@angular/core';
import { Character } from 'src/app/models/character';

import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent {

  valor: number = 0;
  character?: Character;

  constructor(private rickAndMortyService: RickAndMortyService) {}

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
