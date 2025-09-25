import { Component, OnDestroy, OnInit} from '@angular/core';
import { Character, Origin } from 'src/app/models/character';
import { map, filter } from 'rxjs/operators'

import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';

@Component({
  selector: 'app-origenes',
  templateUrl: './origenes.component.html',
  styleUrls: ['./origenes.component.css']
})
export class OrigenesComponent implements OnInit {
  origenes: Origin[] = [];

  constructor(private rickAndMortyService: RickAndMortyService) {}
  
  ngOnInit(): void {
    this.rickAndMortyService.getOrigenes().subscribe(
      data => {
        this.origenes = data;
      }
    )
  }
}
