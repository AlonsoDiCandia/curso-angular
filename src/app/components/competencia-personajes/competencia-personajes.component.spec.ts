import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenciaPersonajesComponent } from './competencia-personajes.component';

describe('CompetenciaPersonajesComponent', () => {
  let component: CompetenciaPersonajesComponent;
  let fixture: ComponentFixture<CompetenciaPersonajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetenciaPersonajesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompetenciaPersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
