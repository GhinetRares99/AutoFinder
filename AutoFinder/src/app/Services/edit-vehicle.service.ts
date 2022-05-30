import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditVehicleService {

  url = "https://localhost:44344/AutoFinder/EditVehicle"

  constructor(private http: HttpClient) { }

  editVehicle(data:any){
    this.http.put(this.url, data).subscribe((result)=>{console.warn(result);})
  }
}
