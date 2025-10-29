import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CharactersComponent } from './characters.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { CardPersonajeComponent } from '../card-personaje/card-personaje.component';
import { Character, Origin } from 'src/app/models/character';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('CharactersComponent', () => {
  let hostFixture: ComponentFixture<CharactersComponent>;
  let hostComponent: CharactersComponent;
  let cardDebugEl: HTMLElement;
  let cardInstance: CardPersonajeComponent;

  const mockPersonaje1: Character = {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: { name: 'Earth (C-137)', url: '' } as Origin,
    image: 'https://rick.com/rick.png',
    episode: [],
    mostrar: false
  };

  const mockPersonaje2: Character = {
    id: 2,
    name: 'Morty Smith',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: { name: 'Earth (Replacement Dimension)', url: '' } as Origin,
    image: 'https://rick.com/morty.png',
    episode: [],
    mostrar: false
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardPersonajeComponent, CharactersComponent],
      imports: [RouterTestingModule],
      providers: [HttpClient, HttpHandler],
      // Ignoramos el contenido del template real (ngIf, img, botones, etc.)
      // para centrarnos en el Input; si quieres testear DOM real, quita esta línea.
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    hostFixture = TestBed.createComponent(CharactersComponent);
    hostComponent = hostFixture.componentInstance;

    // Acceso a la instancia del hijo (CardPersonajeComponent)
    // Está como primer (y único) componente hijo en el template del host
    const cardDE = hostFixture.debugElement.children[0];
    cardInstance = cardDE.componentInstance as CardPersonajeComponent;
    cardDebugEl = cardDE.nativeElement as HTMLElement;
  });

  it('debería crear el host y el componente hijo', () => {
    hostFixture.detectChanges();
    expect(hostComponent).toBeTruthy();
    expect(cardInstance).toBeTruthy();
  });

  it('debería recibir el @Input personaje vía binding', () => {
    hostComponent.personajeSeleccionado = mockPersonaje1;
    hostFixture.detectChanges();

    const childDE = hostFixture.debugElement.query(By.directive(CardPersonajeComponent)); 
    const child = childDE.componentInstance as CardPersonajeComponent;

    expect(child.personaje).toEqual(mockPersonaje1);
    expect(child.personaje?.id).toBe(1);
    expect(child.personaje?.name).toBe('Rick Sanchez');
  });

  it('debería reaccionar a cambios posteriores del @Input', () => {
    hostComponent.personajeSeleccionado = mockPersonaje1;
    hostFixture.detectChanges();

    let childDE = hostFixture.debugElement.query(By.directive(CardPersonajeComponent)); 
    let child = childDE.componentInstance as CardPersonajeComponent;

    expect(child.personaje?.id).toBe(1);

    // Cambiamos el input luego:
    hostComponent.personajeSeleccionado = mockPersonaje2;
    hostFixture.detectChanges();

    childDE = hostFixture.debugElement.query(By.directive(CardPersonajeComponent)); 
    child = childDE.componentInstance as CardPersonajeComponent;

    expect(child.personaje?.id).toBe(2);
    expect(child.personaje?.name).toBe('Morty Smith');
  });

  it('debería permitir que el Input sea opcional (undefined) sin romper', () => {
    hostComponent.personajeSeleccionado = undefined;
    expect(() => hostFixture.detectChanges()).not.toThrow();
    expect(cardInstance.personaje).toBeUndefined();
  });
});
