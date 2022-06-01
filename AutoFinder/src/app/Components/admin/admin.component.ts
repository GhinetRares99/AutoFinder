import { Component, OnInit } from '@angular/core';
import { AdminGetEventsService } from 'src/app/Services/admin-get-events.service';
import { AdminGetUsersService } from 'src/app/Services/admin-get-users.service';
import { AdminGetVehiclesService } from 'src/app/Services/admin-get-vehicles.service';

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

  constructor(private AGU: AdminGetUsersService, private AGV: AdminGetVehiclesService, private AGE: AdminGetEventsService) { }

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

}
