import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character, Episode } from 'src/app/models/character';
import { map, filter } from 'rxjs/operators'

import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit {

  id!: number;
  character?: Character;
  episodiosProcesados: Episode[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private rickAndMortyService: RickAndMortyService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map(pm => pm.get('id')), // esto revisa si viene o no el valor id, si viene sera un string sino un null
      filter((id) : id is string => !!id), // 1.- (id) si la funcion devuelve true, trata a id como un string | 2.- pregunto si id es string y usando !!id verifico si es string o null, si es string devuelve true, si es null devuelve false 
      map(id => Number(id)), // voy a pasar id a Numero
      // filter(id => !Number.isNaN(id)) // si el valor es un numero isNaN devuelve false, si no lo es devuelve true. Filter espera trabajar con compararaciones en lo positivo por ende tengo que convertir el valro de la respuesta a su negacion
    ).subscribe( id => {
        this.id = id;
        this.mostrarUnPersonaje();
      }
    )
  }

  procesarValor(valor: string) {
    if (Number(valor) != this.id) {
      this.router.navigate(['/personaje', valor]);
    }
    // this.mostrarUnPersonaje();
  }

  mostrarUnPersonaje() {
    this.rickAndMortyService.getOneCharacter(this.id).subscribe(
      data => {
        this.character = data
      }
    )
  }

  traerEpisodio(url: string) {
    this.rickAndMortyService.getEpisode(url).subscribe(
      data => {
        if(!this.episodiosProcesados.some(ep => ep.name === data.name)) {
          this.episodiosProcesados.push(data);
        }
      }
    )
  }
}

