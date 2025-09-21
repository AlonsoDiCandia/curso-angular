import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/models/character';

import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent {

  id!: number  ;
  character?: Character;

  constructor(
    private route: ActivatedRoute,
    private rickAndMortyService: RickAndMortyService
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id')); // obtiene el parámetro
    this.mostrarUnPersonaje();
  }

  procesarValor(valor: string) {
    this.id = Number(valor);
    this.mostrarUnPersonaje();
  }

  mostrarUnPersonaje() {
    this.rickAndMortyService.getOneCharacter(this.id).subscribe(
      data => {
        this.character = data
      }
    )
  }
}
