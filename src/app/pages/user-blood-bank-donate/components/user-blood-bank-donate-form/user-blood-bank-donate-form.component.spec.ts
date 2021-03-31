import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBloodBankDonateFormComponent } from './user-blood-bank-donate-form.component';

describe('UserBloodBankDonateFormComponent', () => {
  let component: UserBloodBankDonateFormComponent;
  let fixture: ComponentFixture<UserBloodBankDonateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBloodBankDonateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBloodBankDonateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
