import { Component, Input } from '@angular/core';
import { Character } from 'src/app/models/character';

@Component({
  selector: 'app-filas-personajes',
  templateUrl: './filas-personajes.component.html',
  styleUrls: ['./filas-personajes.component.css']
})
export class FilasPersonajesComponent {
    @Input() personajes?: Character[];

    personaje1?: Character;
    personaje2?: Character;

    ngOnInit() {
      console.log('Filas OnInit')
    }

    seleccionPersonaje(p: Character) {
      if (!this.personaje1) {
        this.personaje1 = p
      } 
      else if (!this.personaje2) {
        this.personaje2 = p
      }
    }

    limpiarPersonajes() {
      this.personaje1 = undefined;
      this.personaje2 = undefined;
    }
}
