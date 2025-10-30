import { Component, ContentChildren, Input, Output, EventEmitter, SimpleChange, QueryList, ElementRef, ContentChild} from '@angular/core';
import { Character } from 'src/app/models/character';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-personaje',
  templateUrl: './card-personaje.component.html',
  styleUrls: ['./card-personaje.component.css'],
  // encapsulation: ViewEncapsulation.None 
})
export class CardPersonajeComponent {
  @Input() personaje?: Character;
  @Output() favorito = new EventEmitter<Character>();
  @Output() noFavorito = new EventEmitter<Character>();

  @Input() ahora?: number;
  antes?: number;

  @ContentChildren('item', { descendants: true, read: ElementRef }) items!: QueryList<ElementRef<HTMLLIElement>>;
  @ContentChild('texto') textoProyectado?: ElementRef<HTMLParagraphElement>;

  constructor(
    private router: Router
  ) {}

  ngOnChanges(changes: SimpleChange) {
    console.log('🌀 ngAfterContentInit');
    if ('ahora' in changes) {
      const cambio = changes['ahora'] as SimpleChange;
      this.antes = cambio.previousValue ? cambio.previousValue : cambio.currentValue - 1;
      this.ahora = cambio.currentValue;
    }
  }

  // corre una sola vez
  ngAfterContentInit(): void {
    console.log('✅ ngAfterContentInit');
    console.log('Cantidad de items proyectados:', this.items.length);
  }

  ngAfterContentChecked(): void {
    console.log('🔄 ngAfterContentChecked');
    console.log('Texto actual proyectado:', this.textoProyectado?.nativeElement.textContent?.trim());
  }

  

  marcarComoFavorito() {
    if (this.personaje) {
      this.favorito?.emit(this.personaje);
    }
  }

  desmarcarFavorito() {
    if (this.personaje) {
      this.noFavorito?.emit(this.personaje);
    }
  }

  irAlPersonaje() {
    this.router.navigate(["/personaje", this.personaje?.id]) // /personaje/1
  }
}
