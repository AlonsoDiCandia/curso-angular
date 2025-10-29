import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { Character } from 'src/app/models/character';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-personaje',
  templateUrl: './card-personaje.component.html',
  styleUrls: ['./card-personaje.component.css'],
  // encapsulation: ViewEncapsulation.None 
})
export class CardPersonajeComponent {
  @Input() personaje?: Character;
  @Output() favorito = new EventEmitter<Character>();
  @Output() noFavorito = new EventEmitter<Character>();

  constructor(
    private router: Router
  ) {}

  marcarComoFavorito() {
    if (this.personaje) {
      this.favorito?.emit(this.personaje);
    }
  }

  desmarcarFavorito() {
    if (this.personaje) {
      this.noFavorito?.emit(this.personaje);
    }
  }

  irAlPersonaje() {
    this.router.navigate(["/personaje", this.personaje?.id]) // /personaje/1
  }
}
