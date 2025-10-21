import { Injectable } from '@angular/core';

@Injectable()
export class ModalService {

  private abierto = false;

  estaAbierto(): boolean {
    return this.abierto;
  }

  abrir(): void {
    this.abierto = true;
  }

  cerrar(): void {
    this.abierto = false;
  }

  alternar(): void {
    this.abierto = !this.abierto;
  }
}
