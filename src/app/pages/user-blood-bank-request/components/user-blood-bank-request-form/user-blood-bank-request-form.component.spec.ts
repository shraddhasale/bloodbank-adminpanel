import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBloodBankRequestFormComponent } from './user-blood-bank-request-form.component';

describe('UserBloodBankRequestFormComponent', () => {
  let component: UserBloodBankRequestFormComponent;
  let fixture: ComponentFixture<UserBloodBankRequestFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBloodBankRequestFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBloodBankRequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
