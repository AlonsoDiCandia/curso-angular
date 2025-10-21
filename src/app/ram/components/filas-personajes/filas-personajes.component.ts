import { Component, Input } from '@angular/core';
import { Character } from 'src/app/models/character';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-filas-personajes',
  templateUrl: './filas-personajes.component.html',
  styleUrls: ['./filas-personajes.component.css']
})
export class FilasPersonajesComponent {
    @Input() personajes?: Character[];
    @ViewChild('modal') modal!: ModalComponent;

    private modalAbierto = false;

    personaje1?: Character = undefined;
    personaje2?: Character = undefined;

    ngOnInit() {
      console.log('Filas OnInit')
    }

    ngAfterViewChecked() {
      if (this.modalAbierto && !this.modal.svc.estaAbierto()) {
        this.modalAbierto = false;
        this.alCerrarModal();
      } else if (!this.modalAbierto && this.modal.svc.estaAbierto()) {
        this.modalAbierto = true;
      }
    }

    alCerrarModal() {
      this.limpiarPersonajes();
    }

    seleccionPersonaje(p: Character) {
      if (!this.personaje1) {
        this.personaje1 = p
      } 
      else if (!this.personaje2) {
        this.personaje2 = p
      }

      if (this.personaje1 && this.personaje2) {
        this.modal.open();
      }
    }

    limpiarPersonajes() {
      this.personaje1 = undefined;
      this.personaje2 = undefined;
    }
}
