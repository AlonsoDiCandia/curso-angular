import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomValueComponent } from './random-value.component';

describe('RandomValueComponent', () => {
  let component: RandomValueComponent;
  let fixture: ComponentFixture<RandomValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomValueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
