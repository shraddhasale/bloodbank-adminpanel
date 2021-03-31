import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserBloodBankDonateComponent } from './add-user-blood-bank-donate.component';

describe('AddUserBloodBankDonateComponent', () => {
  let component: AddUserBloodBankDonateComponent;
  let fixture: ComponentFixture<AddUserBloodBankDonateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserBloodBankDonateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserBloodBankDonateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
