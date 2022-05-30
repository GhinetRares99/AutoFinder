import { TestBed } from '@angular/core/testing';

import { StoreVehicleService } from './store-vehicle.service';

describe('StoreVehicleService', () => {
  let service: StoreVehicleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreVehicleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
