import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { PokeapiService } from '../../service/pokeapi.service';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon';
import { FuegoComponent } from '../fuego/fuego.component';
import { AguaComponent } from '../agua/agua.component';
import { NoDefinidoComponent } from '../no-definido/no-definido.component';
import { PlantaComponent } from '../planta/planta.component';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent {

  tipos: Record<string, any> = {
    fire: FuegoComponent,
    water: AguaComponent,
    grass: PlantaComponent,
    default: NoDefinidoComponent
  };

  pokedex$ = this.pokeapi.getPokedex();
  pokemon?: Pokemon;
  @ViewChild('pokemon_detail', { read: ViewContainerRef }) pokemon_detail!: ViewContainerRef;

  constructor(private pokeapi: PokeapiService) {}

  getPokemon(url: string) {
    this.pokeapi.getPokemon(url).subscribe(
      data => {
        this.pokemon = data;
        const tipo = data.types[0].type.name;
        const imagen = data.sprites.front_default;
        this.cambiarComponente(tipo, imagen);
      }
    );
  }

  cambiarComponente(tipo: string, imagen: string) {
    const img = document.createElement('img');
    img.setAttribute('poke-img','');
    img.setAttribute('class', 'img-center');
    img.src = imagen;
    this.pokemon_detail.clear();
    this.pokemon_detail.createComponent(this.tipos[tipo] || this.tipos['default'], {
      projectableNodes: [[img]]
    });
  }
}
