import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddEventService {

  url="https://localhost:44344/AutoFinder/AddEvent"

  constructor(private http: HttpClient) { }

  addEvent(data:any){
    return this.http.post(this.url, data).subscribe((result)=>{console.warn(result);})
  }
}
