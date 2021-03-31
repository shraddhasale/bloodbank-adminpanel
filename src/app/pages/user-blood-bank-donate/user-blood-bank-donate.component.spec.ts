import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBloodBankDonateComponent } from './user-blood-bank-donate.component';

describe('UserBloodBankDonateComponent', () => {
  let component: UserBloodBankDonateComponent;
  let fixture: ComponentFixture<UserBloodBankDonateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBloodBankDonateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBloodBankDonateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
