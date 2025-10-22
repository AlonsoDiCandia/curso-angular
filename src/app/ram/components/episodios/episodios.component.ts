import { Component } from '@angular/core';
import { Episode } from 'src/app/models/character';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';

@Component({
  selector: 'app-episodios',
  templateUrl: './episodios.component.html',
  styleUrls: ['./episodios.component.css']
})
export class EpisodiosComponent {

  episodios$ = this.rickAndMortyService.getEpisodes();

  constructor(
    private rickAndMortyService: RickAndMortyService,
  ) {}
}
