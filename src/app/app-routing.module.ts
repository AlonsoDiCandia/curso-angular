import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './components/characters/characters.component';
import { PersonajeComponent } from './components/personaje/personaje.component';
import { ExtraComponent } from './components/extra/extra.component';

const routes: Routes = [
  { path: '', redirectTo: 'personajes', pathMatch: 'full' },
  { path: 'personajes', component: CharactersComponent },
  { path: 'personaje', component: PersonajeComponent},
  { path: 'personaje/:id', component: PersonajeComponent},
  { path: 'origenes', component: ExtraComponent},
  { 
    path: 'clima', loadChildren: () => import('./clima/clima.module').then(m => m.ClimaModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
