import { TestBed } from '@angular/core/testing';

import { RouteGuardService } from './route-gurad.service';

describe('RouteGuradService', () => {
  let service: RouteGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
