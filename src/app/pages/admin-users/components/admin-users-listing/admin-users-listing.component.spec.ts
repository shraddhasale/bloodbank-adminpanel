import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsersListingComponent } from './admin-users-listing.component';

describe('AdminUsersListingComponent', () => {
  let component: AdminUsersListingComponent;
  let fixture: ComponentFixture<AdminUsersListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUsersListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUsersListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
