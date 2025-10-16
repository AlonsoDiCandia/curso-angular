import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  id = Math.random(); // genera un número aleatorio para distinguir instancias
}
