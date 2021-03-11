import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithValidationInputComponent } from './with-validation-input.component';

describe('WithValidationInputComponent', () => {
  let component: WithValidationInputComponent;
  let fixture: ComponentFixture<WithValidationInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithValidationInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithValidationInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
