// dropdown.service.ts
import { Injectable } from '@angular/core';

@Injectable()
export class DropdownService {

  private abierto = false;
  id = Math.random();

  estaAbierto(): boolean {
    return this.abierto;
  }

  alternar(): void {
    this.abierto = !this.abierto;
  }

  abrir(): void {
    this.abierto = true;
  }

  cerrar(): void {
    this.abierto = false;
  }
}
