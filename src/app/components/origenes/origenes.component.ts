import { Component, OnDestroy, OnInit} from '@angular/core';
import { Character, Origin } from 'src/app/models/character';
import { map, filter } from 'rxjs/operators'

import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';

@Component({
  selector: 'app-origenes',
  templateUrl: './origenes.component.html',
  styleUrls: ['./origenes.component.css']
})
export class OrigenesComponent implements OnInit {
  origenes: Origin[] = [];
  
  origenSelecionado?: Origin;
  personajesPorOrigen: Map<string, Character[]>= new Map<string, Character[]>();

  constructor(private rickAndMortyService: RickAndMortyService) {}
  
  ngOnInit(): void {
    this.rickAndMortyService.getOrigenesDesdePersonajes().subscribe(
      data => {
        this.origenes = data;
      }
    )
  }

  traerPersonajes(origen: Origin, url: string, name: string) {
    this.origenSelecionado = origen;
    let personajes: Character[] = []
    this.rickAndMortyService.getOrigen(url).subscribe(
      data => {
        data.residents.forEach(
          r => {
            this.rickAndMortyService.traerUnPersonajePorUrl(r).subscribe(
              p => personajes.push(p)
            )
          }
        )
      }
    )
    this.personajesPorOrigen.set(name, personajes);
  }

  personajesConLosQueJugar(origen: string): Character[] {
    const lista = this.personajesPorOrigen.get(origen)?.sort(() => Math.random() - 0.5);
    if (lista && lista.length > 8) {
      return lista.slice(0,8);
    }
    else if (lista && lista.length <= 8) {
      return lista;
    }

    return [];
  }
}
