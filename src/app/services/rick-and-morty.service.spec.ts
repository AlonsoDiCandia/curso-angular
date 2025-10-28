import { TestBed } from '@angular/core/testing';

import { RickAndMortyService } from './rick-and-morty.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('RickAndMortyService', () => {
  let service: RickAndMortyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler]
    });
    service = TestBed.inject(RickAndMortyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
