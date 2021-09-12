import { TestBed } from '@angular/core/testing';

import { CandeactiveGuardServiceService } from './candeactive-guard-service.service';

describe('CandeactiveGuardServiceService', () => {
  let service: CandeactiveGuardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandeactiveGuardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
