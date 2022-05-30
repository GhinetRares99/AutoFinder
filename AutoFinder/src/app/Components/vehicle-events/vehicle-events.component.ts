import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeleteEventService } from 'src/app/Services/delete-event.service';
import { StoreEventService } from 'src/app/Services/store-event.service';
import { StoreVehicleService } from 'src/app/Services/store-vehicle.service';
import { VehicleEventsService } from 'src/app/Services/vehicle-events.service';

@Component({
  selector: 'app-vehicle-events',
  templateUrl: './vehicle-events.component.html',
  styleUrls: ['./vehicle-events.component.scss']
})
export class VehicleEventsComponent implements OnInit {

  public stored_vehicle_events: any = []

  public v_events: any = []

  constructor(private VE: VehicleEventsService, private STV: StoreVehicleService, private DEV: DeleteEventService, private STE: StoreEventService,private router: Router) { }

  ngOnInit(): void {
    this.stored_vehicle_events = JSON.parse(localStorage.getItem('stored_vehicle') as string)
    //console.log(this.STV.stored_vehicle)
    this.VE.vehicleEvents(this.stored_vehicle_events.vehicleID).subscribe((result)=>{
      this.v_events = result
      console.log(this.v_events)
    })
  }

  DeleteEvent(data:any){
    this.DEV.deleteEvent(data)
    this.router.navigateByUrl("YourSales", {skipLocationChange: true}).then(() => {
      this.router.navigate(["../VehicleEvents"])
    })

  }

  SetStoredEvent(data:any){
    this.STE.setStoredEvent(data)
  }


}
