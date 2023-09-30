import { TestBed } from '@angular/core/testing';

import { UserActivateGuard } from './user-activate.guard';

describe('UserActivateGuard', () => {
  let guard: UserActivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserActivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
