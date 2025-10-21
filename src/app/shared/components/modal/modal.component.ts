import { Component, HostListener } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  viewProviders: [ModalService]
})
export class ModalComponent {
  constructor(public svc: ModalService) {}

  open() { this.svc.abrir(); }
  close() { this.svc.cerrar(); }

  // cerrar con ESC
  @HostListener('document:keydown.escape')
  onEsc() {
    if (this.svc.estaAbierto()) this.svc.cerrar();
  }
}
