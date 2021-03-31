import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserBloodBankRequestComponent } from './add-user-blood-bank-request.component';

describe('AddUserBloodBankRequestComponent', () => {
  let component: AddUserBloodBankRequestComponent;
  let fixture: ComponentFixture<AddUserBloodBankRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserBloodBankRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserBloodBankRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
