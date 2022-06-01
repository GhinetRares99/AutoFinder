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

  public category: string = ""

  public company: string = ""

  public model: string = ""

  public pricemin: number = -1
  public pricemax: number = -1

  public fabricationyearmin: number = -1
  public fabricationyearmax: number = -1

  public fueltype: string = ""

  public kilometresmin: number = -1
  public kilometresmax: number = -1

  public powermin: number = -1
  public powermax: number = -1

  public capacitymin: number = -1
  public capacitymax: number = -1

  public transmission: string = ""

  public pollutionnorm: string = ""

  public doors: number = -1

  public color: string = ""

  public warrantymin: number = -1
  public warrantymax: number = -1

  public countryoforigin: string = ""

  public firstregistrationmin: string = ""
  public firstregistrationmax: string = ""

  public registered: string = ""

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

  Reset(){
    this.category = ""
    this.company = ""
    this.model = ""
    this.pricemin = -1
    this.pricemax = -1
    this.fabricationyearmin = -1
    this.fabricationyearmax = -1
    this.fueltype = ""
    this.kilometresmin = -1
    this.kilometresmax = -1
    this.powermin = -1
    this.powermax = -1
    this.capacitymin = -1
    this.capacitymax = -1
    this.transmission = ""
    this.pollutionnorm = ""
    this.doors = -1
    this.color = ""
    this.warrantymin = -1
    this.warrantymax = -1
    this.countryoforigin = ""
    this.firstregistrationmin = ""
    this.firstregistrationmax = ""
    this.registered = ""
  }
  



}
