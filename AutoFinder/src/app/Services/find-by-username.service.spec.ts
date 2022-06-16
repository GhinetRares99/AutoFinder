import { TestBed } from '@angular/core/testing';

import { FindByUsernameService } from './find-by-username.service';

describe('FindByUsernameService', () => {
  let service: FindByUsernameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindByUsernameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
