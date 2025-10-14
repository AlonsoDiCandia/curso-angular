import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CharactersComponent } from './components/characters/characters.component';
import { PersonajeComponent } from './components/personaje/personaje.component';
import { OrigenesComponent } from './components/origenes/origenes.component';
import { CardPersonajeComponent } from './components/card-personaje/card-personaje.component';
import { FilasPersonajesComponent } from './components/filas-personajes/filas-personajes.component';
import { CompetenciaPersonajesComponent } from './components/competencia-personajes/competencia-personajes.component';
import { ExtraComponent } from './components/extra/extra.component';
import { RamRoutingModule } from './ram-routing.module';


@NgModule({
  declarations: [
    CharactersComponent,
    PersonajeComponent,
    OrigenesComponent,
    CardPersonajeComponent,
    FilasPersonajesComponent,
    CompetenciaPersonajesComponent,
    ExtraComponent
  ],
  imports: [
    CommonModule,
    RamRoutingModule,
    FormsModule
  ]
})
export class RAMModule { }
