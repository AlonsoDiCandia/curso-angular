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
    const url = 'https://pokeapi.co/api/v2/pokemon/2/';
    const mockResponse: Pokemon = { types: [{ type: { name: 'grass' } }], id: 1 } as Pokemon;

    service.getPokemon(url).subscribe(data => {
      expect(data).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  // EN LA REALIDAD
  // Me suscribo, hago el GET y espero respuesta
  // Tengo respuesta del servidor
  // Verifico el estado si es 200 o 429 o 500
  // Si da 429 o 500 se que habra un tiempo entre solicitudes DONDE NO HABRA NI UNA SOLICITUD
  // Espero 1 segundo antes de realizar la segunda solicitud
  // Tras el segudno hago la segunda solicitud
  // Verifico que la segunda solicitud sea correcta
  it('deberia reintenter tras 1s cuando el 1er intento responda 429 y luego resolver OK (200)', fakeAsync(() => {
    const url = 'https://pokeapi.co/api/v2/pokemon/1/';
    const mockOk: Pokemon = { types: [{ type: { name: 'grass' } }], id: 1 } as Pokemon;

    let result: Pokemon | undefined;
    let err: HttpErrorResponse | undefined;

    service.getPokemon(url).subscribe({
      next: r => (result = r),
      error: e => (err = e as HttpErrorResponse)
    });

    // Primer request
    const req = httpMock.expectOne(url); // Simula ir a internet y hacer la consulta al servidor, NO HAY RESPUEST DEL SERVIDOR AUN
    expect(req.request.method).toBe('GET');

    // Simulamos la respuesta de error
    req.flush(
      { message: 'rate limited' },
      { status: 429, statusText: 'Too Many Requests', headers: new HttpHeaders() }
    );

    // En el limbo que ocurre la primera solicitud y la segunda, NO deberia haber ni un intento de salida hacia el servidor, es decir, no deberian haber requests
    httpMock.expectNone(url);

    // Esperamos el segundo
    tick(1000);

    const r2 = httpMock.expectOne(url);
    expect(r2.request.method).toBe('GET');
    r2.flush(mockOk);

    expect(err).toBeUndefined();
    expect(result).toEqual(mockOk);
  }))
});