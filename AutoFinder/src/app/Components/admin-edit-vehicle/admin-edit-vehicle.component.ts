import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EditVehicleService } from 'src/app/Services/edit-vehicle.service';

@Component({
  selector: 'app-admin-edit-vehicle',
  templateUrl: './admin-edit-vehicle.component.html',
  styleUrls: ['./admin-edit-vehicle.component.scss']
})
export class AdminEditVehicleComponent implements OnInit {

    public stored_vehicle_admin_edit: any = []

    AdminEditVehicle = new FormGroup({

      vehiclecategory: new FormControl('',Validators.required), 
      vehiclecompany: new FormControl('',Validators.required), 
      vehiclemodel: new FormControl('',Validators.required), 
      vehicleprice: new FormControl('',[Validators.required,Validators.min(0)]), 
      vehiclefabricationyear: new FormControl('',[Validators.required,Validators.min(1875)]), 
      vehiclefueltype: new FormControl('',Validators.required), 
      vehiclekm: new FormControl('',[Validators.required,Validators.min(0)]), 
      vehiclepower: new FormControl('',[Validators.required,Validators.min(1)]), 
      vehiclecapacity: new FormControl('',[Validators.required,Validators.min(1)]), 
      vehicletransmission: new FormControl('',Validators.required), 
      vehiclepollutionnorm: new FormControl('',Validators.required), 
      vehicledoors: new FormControl('',[Validators.required,Validators.min(0)]), 
      vehiclecolor: new FormControl('',Validators.required),
      vehiclewarranty: new FormControl('',[Validators.required,Validators.min(0)]),  
      vehicleorigincountry: new FormControl('',Validators.required),
      vehiclefirstregistration: new FormControl('',Validators.required),  
      vehicleregistered: new FormControl('',Validators.required), 
      vehiclethumbnail: new FormControl('',Validators.required), 
      vehiclephoto1: new FormControl('',Validators.required),
      vehiclephoto2: new FormControl(null,Validators.nullValidator),
      vehiclephoto3: new FormControl(null,Validators.nullValidator),
      
    })

  constructor(private EV: EditVehicleService, private router: Router) { }

  ngOnInit(): void {
    this.stored_vehicle_admin_edit = JSON.parse(localStorage.getItem('stored_vehicle') as string)
    this.stored_vehicle_admin_edit.vehicleFirstRegistration = this.stored_vehicle_admin_edit.vehicleFirstRegistration.replace("T00:00:00","")
  }

  submitAdminEditedVehicle(){
    if(this.AdminEditVehicle.valid)
    {
      this.AdminEditVehicle.value['userID'] = this.stored_vehicle_admin_edit.userID
      this.AdminEditVehicle.value['vehicleID'] = this.stored_vehicle_admin_edit.vehicleID
      this.EV.editVehicle(this.AdminEditVehicle.value)

      this.router.navigateByUrl("", {skipLocationChange: true}).then(() => {
        this.router.navigate(["../Admin"])
      })
    }
    else
    {
      window.alert("Invalid data!")
    }
  }

  thumbnailChangeAdminEdit(event:any){
    const readthumbnailadminedit = new FileReader()
    if(event.target.files[0])
    {
      const file = event.target.files[0]
      readthumbnailadminedit.readAsDataURL(file)
      
      readthumbnailadminedit.onload = () => {
        this.AdminEditVehicle.patchValue({
          vehiclethumbnail: readthumbnailadminedit.result
        });
      }
    } 
  }

  photooneChangeAdminEdit(event:any){
    const readphoto1adminedit = new FileReader()
    if(event.target.files[0])
    {
      const fileone = event.target.files[0]
      readphoto1adminedit.readAsDataURL(fileone)
      
      readphoto1adminedit.onload = () => {
        this.AdminEditVehicle.patchValue({
          vehiclephoto1: readphoto1adminedit.result
        });
      }
    } 
  }


  phototwoChangeAdminEdit(event:any){
    const readphoto2adminedit = new FileReader()
    if(event.target.files[0])
    {
      const filetwo = event.target.files[0]
      readphoto2adminedit.readAsDataURL(filetwo)
      
      readphoto2adminedit.onload = () => {
        this.AdminEditVehicle.patchValue({
          vehiclephoto2: readphoto2adminedit.result
        });
      }
    }     
  }

  photothreeChangeAdminEdit(event:any){
    const readphoto3adminedit = new FileReader()
    if(event.target.files[0])
    {
      const filethree = event.target.files[0]
      readphoto3adminedit.readAsDataURL(filethree)
      
      readphoto3adminedit.onload = () => {
        this.AdminEditVehicle.patchValue({
          vehiclephoto3: readphoto3adminedit.result
        });
      }
    }
  }

}
