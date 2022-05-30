import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreVehicleService {

  constructor() { }

  setStoredVehicle(data:any){
     localStorage.setItem('stored_vehicle', JSON.stringify(data)) 
  }

}
