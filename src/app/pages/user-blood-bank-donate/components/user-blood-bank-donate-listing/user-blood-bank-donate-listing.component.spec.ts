import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBloodBankDonateListingComponent } from './user-blood-bank-donate-listing.component';

describe('UserBloodBankDonateListingComponent', () => {
  let component: UserBloodBankDonateListingComponent;
  let fixture: ComponentFixture<UserBloodBankDonateListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBloodBankDonateListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBloodBankDonateListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
