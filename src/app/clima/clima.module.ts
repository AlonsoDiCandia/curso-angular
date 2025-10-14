import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClimaComponent } from './components/clima/clima.component';
import { ClimaRoutingModule } from './clima-routing.module';

@NgModule({
  declarations: [
    ClimaComponent
  ],
  imports: [
    CommonModule,
    ClimaRoutingModule
  ],
  // exports: [] si necesitamos que otro modulo use un componente
})
export class ClimaModule { }
