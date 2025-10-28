import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Pokedex, Pokemon } from 'src/app/models/pokemon';
import { PokeapiService } from './pokeapi.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';

describe('PokeapiService', () => {
  let service: PokeapiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PokeapiService]
    });

    service = TestBed.inject(PokeapiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Asegura que no queden requests pendientes
  });

  // --- Test 1: URL correcta para getPokedex() ---
  it('Deberia llamar a la url correcta para obtener los datos de la pokedex', () => {
    const mockResponse: Pokedex = { results: [] };

    service.getPokedex().subscribe(data => { //Hago la solicitud, espero que el observable emita datos
      expect(data).toEqual(mockResponse); // 1.- Espero datos a que lleguen NO DEL SERVIDOR, sino de mi HttpTestingController, espero linea 36 req.flush().
                                          // 2.- Una vez la linea 36 devuelve un valor, recien en ese momento hago la comparacion si la respuesta de mi linea 36 es igual a lo que espero
    });

    const req = httpMock.expectOne('https://pokeapi.co/api/v2/pokemon/?limit=151'); //Verifico si existe en mi HttpTestingController una solicitud a esta URL, si exite, nos devuelve la solicitud como tal
    expect(req.request.method).toBe('GET'); //Al tener la solicitud, podemos verificar el metodo
    req.flush(mockResponse); //Si lo anterior se cumple, emito respuesta dentro del flush, voy a linea 30
  })


  // --- Test 2: URL correcta para getPokemon(url) ---
  it('debería llamar a la URL correcta al obtener un Pokémon específico', () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/1/';
    const mockResponse: Pokemon = { types: [{ type: { name: 'grass' } }], id: 1 } as Pokemon;

    service.getPokemon(url).subscribe(data => {
      expect(data).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

    it('debería reintentar tras 1000ms cuando el 1er intento responde 429 y luego resolver OK', fakeAsync(() => {
    const url = 'https://pokeapi.co/api/v2/pokemon/1/';
    const mockOk: Pokemon = { types: [{ type: { name: 'grass' } }], id: 1 } as Pokemon;

    let result: Pokemon | undefined;
    let err: HttpErrorResponse | undefined;

    service.getPokemon(url).subscribe({
      next: r => (result = r),
      error: e => (err = e as HttpErrorResponse)
    });

    // 1) Primera request
    const r1 = httpMock.expectOne(url);
    expect(r1.request.method).toBe('GET');

    // 2) Simular 429 (rate limited)
    r1.flush(
      { message: 'rate limited' },
      { status: 429, statusText: 'Too Many Requests', headers: new HttpHeaders() }
    );

    // Aún NO debe existir reintento antes de avanzar el tiempo
    httpMock.expectNone(url);

    // 3) Avanzar el tiempo del backoff (1000 ms según tu implementación)
    tick(1000);

    // 4) Ahora sí aparece el 2º intento
    const r2 = httpMock.expectOne(url);
    expect(r2.request.method).toBe('GET');

    // 5) Responder OK en el 2º intento
    r2.flush(mockOk);

    // 6) Afirmaciones finales
    expect(err).toBeUndefined();
    expect(result).toEqual(mockOk);
  }));
});
