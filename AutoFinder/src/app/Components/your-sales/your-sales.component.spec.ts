import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourSalesComponent } from './your-sales.component';

describe('YourSalesComponent', () => {
  let component: YourSalesComponent;
  let fixture: ComponentFixture<YourSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourSalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
