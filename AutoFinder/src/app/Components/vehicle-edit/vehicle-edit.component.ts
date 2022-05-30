import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EditVehicleService } from 'src/app/Services/edit-vehicle.service';
import { StoreVehicleService } from 'src/app/Services/store-vehicle.service';

@Component({
  selector: 'app-vehicle-edit',
  templateUrl: './vehicle-edit.component.html',
  styleUrls: ['./vehicle-edit.component.scss']
})
export class VehicleEditComponent implements OnInit {

  public stored_vehicle_edit: any = []

  EditVehicle = new FormGroup({

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

  constructor(private EDV: EditVehicleService,private STV: StoreVehicleService, private router: Router) { }

  ngOnInit(): void {
    this.stored_vehicle_edit = JSON.parse(localStorage.getItem('stored_vehicle') as string)
    //console.log(this.stored_vehicle_edit.userID)
    this.stored_vehicle_edit.vehicleFirstRegistration = this.stored_vehicle_edit.vehicleFirstRegistration.replace("T00:00:00","")
  }

  thumbnailChangeEdit(event:any){
    const readthumbnailedit = new FileReader()
    if(event.target.files[0])
    {
      const file = event.target.files[0]
      readthumbnailedit.readAsDataURL(file)
      
      readthumbnailedit.onload = () => {
        this.EditVehicle.patchValue({
          vehiclethumbnail: readthumbnailedit.result
        });
      }
    } 
    
                 
}

photooneChangeEdit(event:any){
  const readphoto1edit = new FileReader()
  if(event.target.files[0])
  {
    const fileone = event.target.files[0]
    readphoto1edit.readAsDataURL(fileone)
    
    readphoto1edit.onload = () => {
      this.EditVehicle.patchValue({
        vehiclephoto1: readphoto1edit.result
      });
    }
  } 
              
}

phototwoChangeEdit(event:any){
  const readphoto2edit = new FileReader()
  if(event.target.files[0])
  {
    const filetwo = event.target.files[0]
    readphoto2edit.readAsDataURL(filetwo)
    
    readphoto2edit.onload = () => {
      this.EditVehicle.patchValue({
        vehiclephoto2: readphoto2edit.result
      });
    }
  }     
         
}

photothreeChangeEdit(event:any){
  const readphoto3edit = new FileReader()
  if(event.target.files[0])
  {
    const filethree = event.target.files[0]
    readphoto3edit.readAsDataURL(filethree)
    
    readphoto3edit.onload = () => {
      this.EditVehicle.patchValue({
        vehiclephoto3: readphoto3edit.result
      });
    }
  }   
            
}

  submitVehicleEdit(){
    if(this.EditVehicle.valid){
      this.EditVehicle.value['userID'] = this.stored_vehicle_edit.userID
      this.EditVehicle.value['vehicleID'] = this.stored_vehicle_edit.vehicleID
      this.EDV.editVehicle(this.EditVehicle.value)
      this.router.navigateByUrl("", {skipLocationChange: true}).then(() => {
        this.router.navigate(["../YourSales"])
      })
    }
    else
    {
      window.alert("Invalid data!")
    }

  }

}
