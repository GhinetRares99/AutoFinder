import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SellVehicleService } from 'src/app/Services/sell-vehicle.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss']
})
export class SellComponent implements OnInit {

  public session_user:any = []

  Sell = new FormGroup({

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
    vehicledoors: new FormControl('',[Validators.required,Validators.min(1)]), 
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

  constructor(private SV: SellVehicleService, private router: Router) { }

  ngOnInit(): void {
    this.session_user = JSON.parse(sessionStorage.getItem('c_user') as string)

  }

  thumbnailChange(event:any){
      const readthumbnail = new FileReader()
      if(event.target.files[0])
      {
        const file = event.target.files[0]
        readthumbnail.readAsDataURL(file)
        
        readthumbnail.onload = () => {
          this.Sell.patchValue({
            vehiclethumbnail: readthumbnail.result
          });
        }
      } 
      
                   
  }

  photooneChange(event:any){
    const readphoto1 = new FileReader()
    if(event.target.files[0])
    {
      const fileone = event.target.files[0]
      readphoto1.readAsDataURL(fileone)
      
      readphoto1.onload = () => {
        this.Sell.patchValue({
          vehiclephoto1: readphoto1.result
        });
      }
    } 
                
  }

  phototwoChange(event:any){
    const readphoto2 = new FileReader()
    if(event.target.files[0])
    {
      const filetwo = event.target.files[0]
      readphoto2.readAsDataURL(filetwo)
      
      readphoto2.onload = () => {
        this.Sell.patchValue({
          vehiclephoto2: readphoto2.result
        });
      }
    }     
           
  }

  photothreeChange(event:any){
    const readphoto3 = new FileReader()
    if(event.target.files[0])
    {
      const filethree = event.target.files[0]
      readphoto3.readAsDataURL(filethree)
      
      readphoto3.onload = () => {
        this.Sell.patchValue({
          vehiclephoto3: readphoto3.result
        });
      }
    }   
              
  }

  submitVehicle(){
      console.log(this.Sell.value)
      if(this.Sell.valid)
      {
        this.Sell.value['userID'] = this.session_user[0].userID
        this.SV.sellVehicle(this.Sell.value)
        this.router.navigate(["../VehicleAdded"])
      }
      else
      {
        window.alert("Invalid data!")
        console.log(this.SV.sellVehicle(this.Sell.value))
      }
  }

}
