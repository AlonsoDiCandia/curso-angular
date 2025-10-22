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
import { SuperPadreComponent } from './components/super-padre/super-padre.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { SharedModule } from '../shared/shared.module';
import { EpisodiosComponent } from './components/episodios/episodios.component';
import { SeasonPipe } from './pipes/season.pipe';
import { EpisodeNumberPipe } from './pipes/episode-number.pipe';
import { AirDateFormatPipe } from './pipes/date-format.pipe';


@NgModule({
  declarations: [
    CharactersComponent,
    PersonajeComponent,
    OrigenesComponent,
    CardPersonajeComponent,
    FilasPersonajesComponent,
    CompetenciaPersonajesComponent,
    ExtraComponent,
    SuperPadreComponent,
    DropdownComponent,
    EpisodiosComponent,
    SeasonPipe,
    EpisodeNumberPipe,
    AirDateFormatPipe
  ],
  imports: [
    CommonModule,
    RamRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class RAMModule { }
