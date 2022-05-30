import { TestBed } from '@angular/core/testing';

import { VehicleSellerService } from './vehicle-seller.service';

describe('VehicleSellerService', () => {
  let service: VehicleSellerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehicleSellerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
