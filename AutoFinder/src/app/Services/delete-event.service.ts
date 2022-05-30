import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteEventService {

  url = "https://localhost:44344/AutoFinder/DeleteEvent/"

  constructor(private http: HttpClient) { }

  deleteEvent(data:any){
    return this.http.delete(this.url + data).subscribe((result)=>{console.warn(result);})
  }
}
