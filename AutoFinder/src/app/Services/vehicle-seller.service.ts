import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VehicleSellerService {

  url = "https://localhost:44344/AutoFinder/FindUserById/"

  constructor(private http: HttpClient) { }

  vehicleSeller(data:any){
    return this.http.get(this.url + data)
  }
}
