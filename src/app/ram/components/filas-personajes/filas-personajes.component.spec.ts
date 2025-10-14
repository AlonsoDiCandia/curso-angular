import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilasPersonajesComponent } from './filas-personajes.component';

describe('FilasPersonajesComponent', () => {
  let component: FilasPersonajesComponent;
  let fixture: ComponentFixture<FilasPersonajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilasPersonajesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilasPersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
