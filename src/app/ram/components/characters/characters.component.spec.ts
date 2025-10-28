import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersComponent } from './characters.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('CharactersComponent', () => {
  let component: CharactersComponent;
  let fixture: ComponentFixture<CharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactersComponent ],
      providers: [HttpClient, HttpHandler]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
