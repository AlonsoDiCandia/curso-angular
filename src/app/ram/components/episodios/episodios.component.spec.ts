import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodiosComponent } from './episodios.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('EpisodiosComponent', () => {
  let component: EpisodiosComponent;
  let fixture: ComponentFixture<EpisodiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpisodiosComponent ],
      providers: [HttpClient, HttpHandler]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpisodiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
