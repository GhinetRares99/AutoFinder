import { Component, OnInit } from '@angular/core';
import { StoreUserService } from 'src/app/Services/store-user.service';
import { StoreVehicleService } from 'src/app/Services/store-vehicle.service';
import { VehicleEventsService } from 'src/app/Services/vehicle-events.service';
import { VehicleSellerService } from 'src/app/Services/vehicle-seller.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.scss']
})
export class VehicleDetailsComponent implements OnInit {

  public stored_vehicle_details: any = []

  public vehicle_seller: any = []

  public vehicle_events: any = []

  constructor(private VHS: VehicleSellerService, private VE: VehicleEventsService, private STU: StoreUserService) { }

  ngOnInit(): void {
    this.stored_vehicle_details = JSON.parse(localStorage.getItem('stored_vehicle') as string)
    this.VHS.vehicleSeller(this.stored_vehicle_details.userID).subscribe((result) => {
      this.vehicle_seller = result
      console.log(this.vehicle_seller)
    })
    this.VE.vehicleEvents(this.stored_vehicle_details.vehicleID).subscribe((result2) => {
      this.vehicle_events = result2
      console.log(this.vehicle_events)
    })
  }

  getSignedIn(){
    return sessionStorage.getItem('isSignedIn')
  }

  SetUser(data:any){
    this.STU.setStoredUser(data)
  }


}
