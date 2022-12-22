import { TestBed } from '@angular/core/testing';

import { GastosFirebaseService } from './gastos-firebase.service';

describe('GastosFirebaseService', () => {
  let service: GastosFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GastosFirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
