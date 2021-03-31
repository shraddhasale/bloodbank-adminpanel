import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBloodBankRequestListingComponent } from './user-blood-bank-request-listing.component';

describe('UserBloodBankRequestListingComponent', () => {
  let component: UserBloodBankRequestListingComponent;
  let fixture: ComponentFixture<UserBloodBankRequestListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBloodBankRequestListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBloodBankRequestListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
