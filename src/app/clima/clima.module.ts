import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClimaComponent } from './components/clima/clima.component';
import { ClimaRoutingModule } from './clima-routing.module';
import { RandomValueComponent } from './components/random-value/random-value.component';

@NgModule({
  declarations: [
    ClimaComponent,
    RandomValueComponent
  ],
  imports: [
    CommonModule,
    ClimaRoutingModule
  ],
  // exports: [] si necesitamos que otro modulo use un componente
})
export class ClimaModule { }
