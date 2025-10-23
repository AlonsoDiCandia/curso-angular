import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { FuegoComponent } from './components/fuego/fuego.component';
import { AguaComponent } from './components/agua/agua.component';
import { PlantaComponent } from './components/planta/planta.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { NoDefinidoComponent } from './components/no-definido/no-definido.component';



@NgModule({
  declarations: [
    PokedexComponent,
    FuegoComponent,
    AguaComponent,
    PlantaComponent,
    NoDefinidoComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    PokemonRoutingModule
  ]
})
export class PokemonModule { }
