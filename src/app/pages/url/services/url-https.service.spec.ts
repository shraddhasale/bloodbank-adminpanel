import { TestBed } from '@angular/core/testing';

import { UrlHttpsService } from './url-https.service';

describe('UrlHttpsService', () => {
  let service: UrlHttpsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlHttpsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
