import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleAddedComponent } from './vehicle-added.component';

describe('VehicleAddedComponent', () => {
  let component: VehicleAddedComponent;
  let fixture: ComponentFixture<VehicleAddedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleAddedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
