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


}
