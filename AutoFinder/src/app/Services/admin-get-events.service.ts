import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminGetEventsService {

  url = "https://localhost:44344/AutoFinder/Events"

  constructor(private http: HttpClient) { }

  adminGetEvents(){
    return this.http.get(this.url)
  }
}
