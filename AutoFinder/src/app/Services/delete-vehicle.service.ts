import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteVehicleService {

  url = "https://localhost:44344/AutoFinder/DeleteVehicle/"

  constructor(private http: HttpClient) { }

  deleteVehicle(data:any){
    return this.http.delete(this.url + data).subscribe((result)=>{console.warn(result);})
  }
}
