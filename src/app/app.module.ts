import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './components/characters/characters.component';
import { PersonajeComponent } from './components/personaje/personaje.component';
import { OrigenesComponent } from './components/origenes/origenes.component';
import { CardPersonajeComponent } from './components/card-personaje/card-personaje.component';
import { FilasPersonajesComponent } from './components/filas-personajes/filas-personajes.component';
import { CompetenciaPersonajesComponent } from './components/competencia-personajes/competencia-personajes.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    PersonajeComponent,
    OrigenesComponent,
    CardPersonajeComponent,
    FilasPersonajesComponent,
    CompetenciaPersonajesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
