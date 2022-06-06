import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminGetEventsService } from 'src/app/Services/admin-get-events.service';
import { AdminGetUsersService } from 'src/app/Services/admin-get-users.service';
import { AdminGetVehiclesService } from 'src/app/Services/admin-get-vehicles.service';
import { AssignAdminService } from 'src/app/Services/assign-admin.service';
import { DeleteEventService } from 'src/app/Services/delete-event.service';
import { DeleteUserService } from 'src/app/Services/delete-user.service';
import { DeleteVehicleService } from 'src/app/Services/delete-vehicle.service';
import { RemoveAdminService } from 'src/app/Services/remove-admin.service';
import { StoreEventService } from 'src/app/Services/store-event.service';
import { StoreUserService } from 'src/app/Services/store-user.service';
import { StoreVehicleService } from 'src/app/Services/store-vehicle.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public session_user:any = []

  public admin_page_users:any = []

  public admin_page_vehicles:any = []

  public admin_page_events:any = []

  //Filter variables
  public users_userid: number = 0;
  public users_username: string = "";

  public vehicles_vehicleid: number = 0;
  public vehicles_userid: number = 0;

  public events_eventid: number = 0;
  public events_vehicleid: number = 0;

  constructor(private router: Router, private AGU: AdminGetUsersService, private AGV: AdminGetVehiclesService, private AGE: AdminGetEventsService,
    private DV: DeleteVehicleService, private DU: DeleteUserService, private DE: DeleteEventService, private AA: AssignAdminService, private RA: RemoveAdminService,
    private STU: StoreUserService, private STV: StoreVehicleService, private STE: StoreEventService) { }

  ngOnInit(): void {
    this.session_user = JSON.parse(sessionStorage.getItem('c_user') as string)
    this.AGU.adminGetUsers().subscribe((result) => {
      this.admin_page_users = result
      console.log(this.admin_page_users)
    })
    this.AGV.adminGetVehicles().subscribe((result) => {
      this.admin_page_vehicles = result
      console.log(this.admin_page_vehicles)
    })
    this.AGE.adminGetEvents().subscribe((result) => {
      this.admin_page_events = result
      console.log(this.admin_page_events)
    })
  }

  ResetUsers(){
    this.users_userid = 0
    this.users_username = ""
  }

  ResetVehicles(){
    this.vehicles_vehicleid = 0
    this.vehicles_userid = 0
  }

  ResetEvents(){
    this.events_eventid = 0
    this.events_vehicleid = 0
  }

  DeleteUser(data:any){
    this.DU.deleteUser(data)

    this.router.navigateByUrl("", {skipLocationChange: true}).then(() => {
      this.router.navigate(["../Admin"])
    })
  }

  DeleteVehicle(data:any){
    this.DV.deleteVehicle(data)

    this.router.navigateByUrl("", {skipLocationChange: true}).then(() => {
      this.router.navigate(["../Admin"])
    })
  }

  DeleteEvent(data:any){
    this.DE.deleteEvent(data)

    this.router.navigateByUrl("", {skipLocationChange: true}).then(() => {
      this.router.navigate(["../Admin"])
    })
  }

  AssignAdmin(data:number){
    this.AA.assignAdmin(data)

    this.router.navigateByUrl("", {skipLocationChange: true}).then(() => {
      this.router.navigate(["../Admin"])
    })
  }

  RemoveAdmin(data:number){
    this.RA.removeAdmin(data)
    if(data == this.session_user[0].userID)
    {
      this.session_user[0].isAdmin = false
      sessionStorage.setItem('c_user', JSON.stringify(this.session_user))
    }
    this.router.navigateByUrl("", {skipLocationChange: true}).then(() => {
      this.router.navigate(["../Admin"])
    })
  }

  SetStoredUser(data:any){
    this.STU.setStoredUser(data)
  }

  SetStoredVehicle(data:any){
    this.STV.setStoredVehicle(data)
  }

  SetStoredEvent(data:any){
    this.STE.setStoredEvent(data)
  }


}
