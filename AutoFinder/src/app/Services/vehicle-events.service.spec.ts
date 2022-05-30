import { TestBed } from '@angular/core/testing';

import { VehicleEventsService } from './vehicle-events.service';

describe('VehicleEventsService', () => {
  let service: VehicleEventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehicleEventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
