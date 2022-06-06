import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EditEventService } from 'src/app/Services/edit-event.service';

@Component({
  selector: 'app-admin-edit-event',
  templateUrl: './admin-edit-event.component.html',
  styleUrls: ['./admin-edit-event.component.scss']
})
export class AdminEditEventComponent implements OnInit {

  public stored_event_admin_edit: any = []

  AdminEditEvent = new FormGroup({
    eventdescription: new FormControl('',Validators.required),
    eventdate: new FormControl('',Validators.required),   
  })

  constructor(private EE: EditEventService, public router: Router) { }

  ngOnInit(): void {
    this.stored_event_admin_edit = JSON.parse(localStorage.getItem('stored_event') as string)
    this.stored_event_admin_edit.eventDate = this.stored_event_admin_edit.eventDate.replace("T00:00:00","")
  }

  submitAdminEditedEvent(){
    if(this.AdminEditEvent.valid)
    {
      this.AdminEditEvent.value['vehicleID'] = this.stored_event_admin_edit.vehicleID
      this.AdminEditEvent.value['eventID'] = this.stored_event_admin_edit.eventID
      this.EE.editEvent(this.AdminEditEvent.value)

      this.router.navigateByUrl("", {skipLocationChange: true}).then(() => {
        this.router.navigate(["../Admin"])
      })
    }
    else
    {
      window.alert("Invalid data!")
    }
  }

}
