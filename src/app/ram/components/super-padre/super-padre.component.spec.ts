import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperPadreComponent } from './super-padre.component';

describe('SuperPadreComponent', () => {
  let component: SuperPadreComponent;
  let fixture: ComponentFixture<SuperPadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperPadreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
