import { TestBed } from '@angular/core/testing';

import { RandomWsService } from './websocket.service';

describe('WebsocketService', () => {
  let service: RandomWsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomWsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
