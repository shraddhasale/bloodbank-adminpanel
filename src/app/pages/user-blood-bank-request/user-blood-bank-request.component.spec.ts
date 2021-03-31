import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBloodBankRequestComponent } from './user-blood-bank-request.component';

describe('UserBloodBankRequestComponent', () => {
  let component: UserBloodBankRequestComponent;
  let fixture: ComponentFixture<UserBloodBankRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBloodBankRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBloodBankRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
