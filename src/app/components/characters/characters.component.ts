import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character';
import { Router } from '@angular/router';

import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: Character[] = [];

  constructor(
    private router: Router,
    private rickAndMortyService: RickAndMortyService
  ) {}

  ngOnInit(): void {
    this.rickAndMortyService.getCharacters().subscribe(
      data => {
        this.characters = data.map(c => ({ ...c, mostrar: false}))
      }
    );
  }

  irAlPersonaje(id: number) {
    this.router.navigate(["/personaje", id]) // /personaje/1
  }


}