import { TestBed } from '@angular/core/testing';

import { CanActiveGuard } from "./CanActiveGuard";

describe('CanActiveGuard', () => {
  let guard: CanActiveGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanActiveGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
