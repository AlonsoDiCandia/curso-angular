import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Ciudad } from '../models/openweathermap';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenweathermapService {

  constructor(private http: HttpClient) { } 

  getDatosPorCiudad(ciudad: string) : Observable<Ciudad> {
    const url = `${environment.openWeatherMapUrl}?q=${ciudad},cl&appid=${environment.openWeatherMapAPIKEY}`
    return this.http.get<Ciudad>(url).pipe(
      map(c => 
        ({ ...c,
          main: {
            ...c.main,
            temp: c.main.temp - 273.15
          },
          sys: {
            ...c.sys,
            sunsetDate: new Date(c.sys.sunset * 1000)
          }
        })
      ),
      catchError(error => {
        console.error('Error al consultar los datos de la ciudad ingresada:', error);

        return throwError(() => new Error('Error al obtener datos'))
      })
    )
  }
}
