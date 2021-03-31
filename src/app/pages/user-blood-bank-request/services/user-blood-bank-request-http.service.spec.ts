import { TestBed } from '@angular/core/testing';

import { UserBloodBankRequestHttpService } from './user-blood-bank-request-http.service';

describe('UserBloodBankRequestHttpService', () => {
  let service: UserBloodBankRequestHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserBloodBankRequestHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
