import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneStepDownComponent } from './one-step-down.component';

describe('OneStepDownComponent', () => {
  let component: OneStepDownComponent;
  let fixture: ComponentFixture<OneStepDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneStepDownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneStepDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
