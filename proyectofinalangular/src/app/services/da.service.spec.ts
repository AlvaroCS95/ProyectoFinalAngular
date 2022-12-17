import { TestBed } from '@angular/core/testing';

import { DAService } from './da.service';

describe('DAService', () => {
  let service: DAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
