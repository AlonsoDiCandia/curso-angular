import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './components/characters/characters.component';
import { PersonajeComponent } from './components/personaje/personaje.component';
import { ExtraComponent } from './components/extra/extra.component';
import { SuperPadreComponent } from './components/super-padre/super-padre.component';
import { EpisodiosComponent } from './components/episodios/episodios.component';

const routes: Routes = [
  { path: '', redirectTo: 'personajes', pathMatch: 'full' },
  { path: 'personajes', component: CharactersComponent },
  { path: 'personaje', component: PersonajeComponent},
  { path: 'personaje/:id', component: PersonajeComponent},
  { path: 'origenes', component: ExtraComponent},
  { path: 'episodios', component: EpisodiosComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RamRoutingModule { }
