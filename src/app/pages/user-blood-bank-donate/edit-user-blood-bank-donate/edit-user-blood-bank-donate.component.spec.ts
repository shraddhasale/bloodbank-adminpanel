import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserBloodBankDonateComponent } from './edit-user-blood-bank-donate.component';

describe('EditUserBloodBankDonateComponent', () => {
  let component: EditUserBloodBankDonateComponent;
  let fixture: ComponentFixture<EditUserBloodBankDonateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUserBloodBankDonateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserBloodBankDonateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
