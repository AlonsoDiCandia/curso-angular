import { Component, ElementRef, Input, OnDestroy, OnInit, OnChanges, SimpleChanges, AfterViewInit, ViewChild } from '@angular/core';
import { interval } from 'rxjs';
import { Character } from 'src/app/models/character';

@Component({
  selector: 'app-competencia-personajes',
  templateUrl: './competencia-personajes.component.html',
  styleUrls: ['./competencia-personajes.component.css']
})
export class CompetenciaPersonajesComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit{
    @Input() personaje1?: Character;
    @Input() personaje2?: Character;

    @ViewChild('botonJugar') botonJugar!: ElementRef<HTMLHeadingElement>;

    opcion1?: string;
    opcion2?: string;
    ganador?: string;
    
    opciones = ['piedra', 'papel', 'tijera'];

    contador = 0;
    interval: any;

    ngOnChanges(changes: SimpleChanges) {
      console.log('Competencia OnChanges')
    }

    ngOnInit() {
      console.log('Competencia OnInit');
      this.interval = setInterval(() => {
        this.contador = this.contador + 1;
        console.log(this.contador);
      }, 1000)
    }

    ngAfterViewInit() {
      console.log(this.botonJugar.nativeElement.textContent);

      const btn = this.botonJugar.nativeElement;
      // 🎨 Estilos básicos
      btn.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
      btn.style.color = 'white';
      btn.style.border = 'none';
      btn.style.borderRadius = '12px';
      btn.style.padding = '12px 24px';
      btn.style.fontSize = '16px';
      btn.style.cursor = 'pointer';
      btn.style.transition = 'all 0.3s ease';

      // 💡 Efecto hover dinámico
      btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'scale(1.05)';
        btn.style.boxShadow = '0 6px 20px rgba(102,126,234,0.5)';
      });

      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'scale(1)';
        btn.style.boxShadow = 'none';
      });
    }

    jugarCachipun() {
      this.opcion1 = this.opciones[Math.floor(Math.random() * this.opciones.length)];
      this.opcion2 = this.opciones[Math.floor(Math.random() * this.opciones.length)];

      if (this.opcion1 == this.opcion2) { 
        this.ganador = 'Empate';
      }
      else if (this.opcion1 == 'tijera') {
        if (this.opcion2 == 'piedra') {
          this.ganador = 'Gana ' + this.personaje2?.name;
        }
        else {
          this.ganador = 'Gana ' + this.personaje1?.name; 
        }
      }
      else if (this.opcion1 == 'piedra') {
        if (this.opcion2 == 'papel') {
          this.ganador = 'Gana ' + this.personaje2?.name;
        }
        else {
          this.ganador = 'Gana ' + this.personaje1?.name; 
        }
      }
      else if (this.opcion1 == 'papel') {
        if (this.opcion2 == 'tijera') {
          this.ganador = 'Gana ' + this.personaje2?.name;
        }
        else {
          this.ganador = 'Gana ' + this.personaje1?.name; 
        }
      }
      else {
        this.ganador = "No hay ganador";
      }
    }

    ngOnDestroy() {
      clearInterval(this.interval);
      console.log('Competencia OnDestroy')
    }
}
