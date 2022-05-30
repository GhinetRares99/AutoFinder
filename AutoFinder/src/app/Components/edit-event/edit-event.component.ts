import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EditEventService } from 'src/app/Services/edit-event.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss']
})
export class EditEventComponent implements OnInit {

  public stored_event_edit: any = []

  EditVehicleEvent = new FormGroup({
    eventdescription: new FormControl('',Validators.required),
    eventdate: new FormControl('',Validators.required),   
  })

  constructor(private EE: EditEventService, public router: Router) { }

  ngOnInit(): void {
    this.stored_event_edit = JSON.parse(localStorage.getItem('stored_event') as string)
    this.stored_event_edit.eventDate = this.stored_event_edit.eventDate.replace("T00:00:00","")
  }

  submitEditedEvent(){
    if(this.EditVehicleEvent.valid)
    {
      this.EditVehicleEvent.value['vehicleID'] = this.stored_event_edit.vehicleID
      this.EditVehicleEvent.value['eventID'] = this.stored_event_edit.eventID
      this.EE.editEvent(this.EditVehicleEvent.value)
      this.router.navigateByUrl("YourSales", {skipLocationChange: true}).then(() => {
        this.router.navigate(["../VehicleEvents"])
      })
    }
    else
    {
      window.alert("Invalid data!")
    }
  }

}
