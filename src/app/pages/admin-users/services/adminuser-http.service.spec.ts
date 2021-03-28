import { TestBed } from '@angular/core/testing';

import { AdminuserHttpService } from './adminuser-http.service';

describe('AdminuserHttpService', () => {
  let service: AdminuserHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminuserHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
