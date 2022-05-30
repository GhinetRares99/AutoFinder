import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VehicleEventsService {

  url="https://localhost:44344/AutoFinder/FindVehicleEvents/"

  constructor(private http: HttpClient) { }

  vehicleEvents(data:any){
    return this.http.get(this.url + data)
  }
}
