import { Serializer } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SearchService } from 'src/app/Services/search.service';
import { StoreVehicleService } from 'src/app/Services/store-vehicle.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public vehicles: any = []

  SearchVehicle = new FormGroup({

    vehiclecategory: new FormControl('', Validators.nullValidator),
    vehiclecompany: new FormControl('', Validators.nullValidator),
    vehiclemodel: new FormControl('', Validators.nullValidator),

    vehiclepricemin: new FormControl('', Validators.min(0)),
    vehiclepricemax: new FormControl('', Validators.min(0)),

    vehiclefabricationyearmin: new FormControl('', Validators.min(1875)),
    vehiclefabricationyearmax: new FormControl('', Validators.min(1875)),

    vehiclefueltype: new FormControl('', Validators.nullValidator),

    vehiclekmmin: new FormControl('', Validators.min(0)),
    vehiclekmmax: new FormControl('', Validators.min(0)),

    vehiclepowermin: new FormControl('', Validators.min(1)),
    vehiclepowermax: new FormControl('', Validators.min(1)),

    vehiclecapacitymin: new FormControl('', Validators.min(1)),
    vehiclecapacitymax: new FormControl('', Validators.min(1)),

    vehicletransmission: new FormControl('', Validators.nullValidator),
    vehiclepollutionnorm: new FormControl('', Validators.nullValidator),
    vehicledoors: new FormControl('', Validators.min(0)),
    vehiclecolor: new FormControl('', Validators.nullValidator),

    vehiclewarrantymin: new FormControl('', Validators.min(0)),
    vehiclewarrantymax: new FormControl('', Validators.min(0)),

    vehicleorigincountry: new FormControl('', Validators.nullValidator),

    vehiclefirstregistrationmin: new FormControl('', Validators.nullValidator),
    vehiclefirstregistrationmax: new FormControl('', Validators.nullValidator),

    vehicleregistered: new FormControl('', Validators.nullValidator),
  })

  constructor(private SRC: SearchService, private STV: StoreVehicleService) { }

  ngOnInit(): void {
    this.SRC.search().subscribe((result)=>{
      this.vehicles = result
      console.log(this.vehicles)
    })
  }

  SetStoredVehicle(data:any){
    this.STV.setStoredVehicle(data)
  }

  submitSearch(){
    if(this.SearchVehicle.valid)
    {
      

    }
    else
    {
      window.alert("Invalid data!")
    }
  }



}
