import { Component } from '@angular/core';
import { Ciudad } from 'src/app/models/openweathermap';
import { OpenweathermapService } from 'src/app/services/openweathermap.service'

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css']
})
export class ClimaComponent {
  ciudad!: Ciudad;
  estado: boolean = false;

  constructor(private openWeatherMap: OpenweathermapService) {}

  traerDatosCiudad(ciudad: string) {
    this.openWeatherMap.getDatosPorCiudad(ciudad).subscribe(
      {
        next: data => {
          this.ciudad = data;
          this.estado = true;
        },
        error: err => {
          this.estado = false;
        }
      }
    )
  }
}
