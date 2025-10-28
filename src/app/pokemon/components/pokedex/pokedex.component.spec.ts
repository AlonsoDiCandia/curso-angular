import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexComponent } from './pokedex.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('PokedexComponent', () => {
  let component: PokedexComponent;
  let fixture: ComponentFixture<PokedexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokedexComponent ],
      providers: [HttpClient, HttpHandler]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokedexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
