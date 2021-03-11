import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewCustomerFormComponent } from './new-customer-form.component';

describe('NewCustomerFormComponent', () => {
  let component: NewCustomerFormComponent;
  let fixture: ComponentFixture<NewCustomerFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCustomerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCustomerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
