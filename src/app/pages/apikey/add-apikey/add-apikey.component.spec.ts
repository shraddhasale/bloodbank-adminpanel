import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddApikeyComponent } from './add-apikey.component';

describe('AddApikeyComponent', () => {
  let component: AddApikeyComponent;
  let fixture: ComponentFixture<AddApikeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddApikeyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddApikeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
