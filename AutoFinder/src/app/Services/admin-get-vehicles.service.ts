import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminGetVehiclesService {

  url = "https://localhost:44344/AutoFinder/Vehicles"

  constructor(private http: HttpClient) { }

  adminGetVehicles(){
    return this.http.get(this.url)
  }
}
