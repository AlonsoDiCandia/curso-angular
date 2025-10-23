import { Component } from '@angular/core';
import { RandomWsService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-random-value',
  templateUrl: './random-value.component.html',
  styleUrls: ['./random-value.component.css']
})
export class RandomValueComponent {

  data$ = this.ws.connect(); // El signo $ nos dice que es un observable
  constructor(private ws: RandomWsService) { }

  ngOnDestroy() {
    console.log('Se murio tambien :c')
  }
}
