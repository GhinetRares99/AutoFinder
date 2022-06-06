import { TestBed } from '@angular/core/testing';

import { RemoveAdminService } from './remove-admin.service';

describe('RemoveAdminService', () => {
  let service: RemoveAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemoveAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
