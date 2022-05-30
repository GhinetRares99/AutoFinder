import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventAddedComponent } from './event-added.component';

describe('EventAddedComponent', () => {
  let component: EventAddedComponent;
  let fixture: ComponentFixture<EventAddedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventAddedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
