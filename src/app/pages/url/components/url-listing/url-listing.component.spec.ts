import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlListingComponent } from './url-listing.component';

describe('UrlListingComponent', () => {
  let component: UrlListingComponent;
  let fixture: ComponentFixture<UrlListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
