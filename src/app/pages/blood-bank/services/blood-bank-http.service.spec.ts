import { TestBed } from '@angular/core/testing';

import { BloodBankHttpService } from './blood-bank-http.service';

describe('BloodBankHttpService', () => {
  let service: BloodBankHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BloodBankHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
