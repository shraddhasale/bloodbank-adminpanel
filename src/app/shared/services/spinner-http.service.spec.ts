import { TestBed } from '@angular/core/testing';

import { SpinnerHttpService } from './spinner-http.service';

describe('SpinnerHttpService', () => {
  let service: SpinnerHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpinnerHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
