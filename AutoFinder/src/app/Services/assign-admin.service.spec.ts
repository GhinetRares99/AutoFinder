import { TestBed } from '@angular/core/testing';

import { AssignAdminService } from './assign-admin.service';

describe('AssignAdminService', () => {
  let service: AssignAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssignAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
