import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YourSalesService {

  url = "https://localhost:44344/AutoFinder/FindYourVehicles/"

  constructor(private http: HttpClient) { }

  yourSales(data: any){
    return this.http.get(this.url + data)
  }
}
