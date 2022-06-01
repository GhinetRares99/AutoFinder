import { TestBed } from '@angular/core/testing';

import { AdminGetEventsService } from './admin-get-events.service';

describe('AdminGetEventsService', () => {
  let service: AdminGetEventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminGetEventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
