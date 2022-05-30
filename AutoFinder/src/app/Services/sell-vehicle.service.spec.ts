import { TestBed } from '@angular/core/testing';

import { SellVehicleService } from './sell-vehicle.service';

describe('SellVehicleService', () => {
  let service: SellVehicleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SellVehicleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
