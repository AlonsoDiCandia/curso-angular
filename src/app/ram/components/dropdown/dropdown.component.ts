// dropdown.component.ts
import { Component } from '@angular/core';
import { DropdownService } from 'src/app/services/dropdown.service'

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  viewProviders: [DropdownService]
})
export class DropdownComponent {

  constructor(public dropdown: DropdownService) {}

  alternar() {
    this.dropdown.alternar();
  }

  abrir() {
    this.dropdown.abrir();
  }

  cerrar() {
    this.dropdown.cerrar();
  }

  estaAbierto(): boolean {
    return this.dropdown.estaAbierto();
  }
}
