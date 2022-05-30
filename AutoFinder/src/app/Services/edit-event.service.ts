import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditEventService {

  url = "https://localhost:44344/AutoFinder/EditEvent"

  constructor(private http: HttpClient) { }

  editEvent(data:any)
  {
    return this.http.put(this.url, data).subscribe((result)=>{console.warn(result);})
  }
}
