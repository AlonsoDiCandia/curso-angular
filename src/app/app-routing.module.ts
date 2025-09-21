import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './components/characters/characters.component';
import { PersonajeComponent } from './components/personaje/personaje.component';

const routes: Routes = [
  { path: '', redirectTo: 'personajes', pathMatch: 'full' },
  { path: 'personajes', component: CharactersComponent },
  { path: 'personaje', component: PersonajeComponent},
  { path: 'personaje/:id', component: PersonajeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
