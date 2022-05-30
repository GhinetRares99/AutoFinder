import { TestBed } from '@angular/core/testing';

import { YourSalesService } from './your-sales.service';

describe('YourSalesService', () => {
  let service: YourSalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YourSalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
