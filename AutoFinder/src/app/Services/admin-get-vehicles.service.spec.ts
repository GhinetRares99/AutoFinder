import { TestBed } from '@angular/core/testing';

import { AdminGetVehiclesService } from './admin-get-vehicles.service';

describe('AdminGetVehiclesService', () => {
  let service: AdminGetVehiclesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminGetVehiclesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
