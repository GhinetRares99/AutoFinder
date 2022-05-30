import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleEventsComponent } from './vehicle-events.component';

describe('VehicleEventsComponent', () => {
  let component: VehicleEventsComponent;
  let fixture: ComponentFixture<VehicleEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
