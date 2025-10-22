import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClimaComponent } from './components/clima/clima.component';
import { RandomValueComponent } from './components/random-value/random-value.component';

const routes: Routes = [
  { path: 'ciudad', component: ClimaComponent},
  { path: 'random', component: RandomValueComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClimaRoutingModule { }
