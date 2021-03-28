import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodBankListingComponent } from './blood-bank-listing.component';

describe('BloodBankListingComponent', () => {
  let component: BloodBankListingComponent;
  let fixture: ComponentFixture<BloodBankListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodBankListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodBankListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
