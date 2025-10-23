import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuegoComponent } from './fuego.component';

describe('FuegoComponent', () => {
  let component: FuegoComponent;
  let fixture: ComponentFixture<FuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuegoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
