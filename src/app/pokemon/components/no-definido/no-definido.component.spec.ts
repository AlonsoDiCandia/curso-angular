import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoDefinidoComponent } from './no-definido.component';

describe('NoDefinidoComponent', () => {
  let component: NoDefinidoComponent;
  let fixture: ComponentFixture<NoDefinidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoDefinidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoDefinidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
