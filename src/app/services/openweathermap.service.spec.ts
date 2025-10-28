import { TestBed } from '@angular/core/testing';

import { OpenweathermapService } from './openweathermap.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('OpenweathermapService', () => {
  let service: OpenweathermapService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler]
    });
    service = TestBed.inject(OpenweathermapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
