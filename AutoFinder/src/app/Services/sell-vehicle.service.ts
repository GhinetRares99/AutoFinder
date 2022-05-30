import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SellVehicleService {

  url = "https://localhost:44344/AutoFinder/AddVehicle"

  constructor(private http: HttpClient) { }

  sellVehicle(data: any){
    //console.log(data)
    return this.http.post(this.url, data).subscribe((result)=>{console.warn(result);})
  }
}
