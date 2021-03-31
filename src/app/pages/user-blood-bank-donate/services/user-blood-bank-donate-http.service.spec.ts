import { TestBed } from '@angular/core/testing';

import { UserBloodBankDonateHttpService } from './user-blood-bank-donate-http.service';

describe('UserBloodBankDonateHttpService', () => {
  let service: UserBloodBankDonateHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserBloodBankDonateHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
