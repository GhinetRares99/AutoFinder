import { TestBed } from '@angular/core/testing';

import { AdminGetUsersService } from './admin-get-users.service';

describe('AdminGetUsersService', () => {
  let service: AdminGetUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminGetUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
