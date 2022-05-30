import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddEventService } from 'src/app/Services/add-event.service';
import { StoreVehicleService } from 'src/app/Services/store-vehicle.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {

  public stored_vehicle_add_event: any = []

  AddVehicleEvent = new FormGroup({
    eventdescription: new FormControl('',Validators.required),
    eventdate: new FormControl('',Validators.required),   
  })

  constructor(private AE: AddEventService, private STV: StoreVehicleService, private router: Router) { }

  ngOnInit(): void {
    this.stored_vehicle_add_event = JSON.parse(localStorage.getItem('stored_vehicle') as string)
  }

  submitEvent(){
    if(this.AddVehicleEvent.valid)
    {
      this.AddVehicleEvent.value['vehicleID'] = this.stored_vehicle_add_event.vehicleID
      this.AE.addEvent(this.AddVehicleEvent.value)
      this.router.navigate(["../EventAdded"])
    }
    else
    {
      window.alert("Invalid data!")
    }
  }

}
