import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'ram', loadChildren: () => import('./ram/ram.module').then(m => m.RAMModule)
  },
  { 
    path: 'clima', loadChildren: () => import('./clima/clima.module').then(m => m.ClimaModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }