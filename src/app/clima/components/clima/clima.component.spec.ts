import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimaComponent } from './clima.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('ClimaComponent', () => {
  let component: ClimaComponent;
  let fixture: ComponentFixture<ClimaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClimaComponent ],
      providers: [HttpClient, HttpHandler]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
