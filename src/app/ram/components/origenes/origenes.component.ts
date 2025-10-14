import { Component, OnDestroy, OnInit} from '@angular/core';
import { Character, Origin } from 'src/app/models/character';
import { Subject, forkJoin } from 'rxjs';
import { takeUntil } from 'rxjs/operators'

import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';

@Component({
  selector: 'app-origenes',
  templateUrl: './origenes.component.html',
  styleUrls: ['./origenes.component.css']
})
export class OrigenesComponent implements OnInit, OnDestroy{
  origenes: Origin[] = [];
  origenSelecionado?: Origin;
  personajesPorOrigen: Map<string, Character[]>= new Map<string, Character[]>();
  jugadores?: Character[] = [];

  private destroy$ = new Subject<void>();
  contador = 0;
  interval: any;

  constructor(
    private rickAndMortyService: RickAndMortyService
  ) {
    console.log('Origenes constructor')
  }
  
  ngOnInit(): void {
    console.log('Origenes OnInit')
    this.rickAndMortyService.getOrigenesDesdePersonajes()
    .pipe(takeUntil(this.destroy$))
    .subscribe(data => {
      this.origenes = data;
      console.log('📡 Llamada aún viva...')
      this.interval = setInterval(() => {
        this.contador = this.contador + 1;
        console.log(this.contador);
      }, 1000)
    });
  }

  traerPersonajes(origen: Origin, url: string, name: string) {
    this.origenSelecionado = origen;
    if (!this.personajesPorOrigen.get(name)) {
      this.rickAndMortyService.getOrigen(url).subscribe(
        data => {
          const request = data.residents.map(
            r => this.rickAndMortyService.traerUnPersonajePorUrl(r)
          );

          forkJoin(request).subscribe(personajes => {
            this.personajesPorOrigen.set(name, personajes);
            this.jugadores = this.personajesConLosQueJugar(name);
          })
        }
      )
    }
    else {
      this.jugadores = this.personajesConLosQueJugar(name);
    }
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

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
