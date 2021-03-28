import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApikeyListingComponent } from './apikey-listing.component';

describe('ApikeyListingComponent', () => {
  let component: ApikeyListingComponent;
  let fixture: ComponentFixture<ApikeyListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApikeyListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApikeyListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
