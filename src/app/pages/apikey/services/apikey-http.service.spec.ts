import { TestBed } from '@angular/core/testing';

import { ApikeyHttpService } from './apikey-http.service';

describe('ApikeyHttpService', () => {
  let service: ApikeyHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApikeyHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
