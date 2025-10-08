import { Component, Input } from '@angular/core';
import { Character } from 'src/app/models/character';

@Component({
  selector: 'app-competencia-personajes',
  templateUrl: './competencia-personajes.component.html',
  styleUrls: ['./competencia-personajes.component.css']
})
export class CompetenciaPersonajesComponent {
    @Input() personaje1?: Character;
    @Input() personaje2?: Character;

    opcion1?: string;
    opcion2?: string;
    ganador?: string;
    
    opciones = ['piedra', 'papel', 'tijera'];

    jugarCachipun() {
      this.opcion1 = this.opciones[Math.floor(Math.random() * this.opciones.length)];
      this.opcion2 = this.opciones[Math.floor(Math.random() * this.opciones.length)];

      if (this.opcion1 == this.opcion2) { 
        this.ganador = 'Empate';
      }
      else if (this.opcion1 == 'tijera') {
        if (this.opcion2 == 'piedra') {
          this.ganador = 'Gana ' + this.personaje2?.name;
        }
        else {
          this.ganador = 'Gana ' + this.personaje1?.name; 
        }
      }
      else if (this.opcion1 == 'piedra') {
        if (this.opcion2 == 'papel') {
          this.ganador = 'Gana ' + this.personaje2?.name;
        }
        else {
          this.ganador = 'Gana ' + this.personaje1?.name; 
        }
      }
      else if (this.opcion1 == 'papel') {
        if (this.opcion2 == 'tijera') {
          this.ganador = 'Gana ' + this.personaje2?.name;
        }
        else {
          this.ganador = 'Gana ' + this.personaje1?.name; 
        }
      }
      else {
        this.ganador = "No hay ganador";
      }
    }

}
