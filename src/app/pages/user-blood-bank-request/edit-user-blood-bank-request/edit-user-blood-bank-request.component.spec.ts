import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserBloodBankRequestComponent } from './edit-user-blood-bank-request.component';

describe('EditUserBloodBankRequestComponent', () => {
  let component: EditUserBloodBankRequestComponent;
  let fixture: ComponentFixture<EditUserBloodBankRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUserBloodBankRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserBloodBankRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
