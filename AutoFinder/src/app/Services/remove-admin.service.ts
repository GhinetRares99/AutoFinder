import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RemoveAdminService {

  url = "https://localhost:44344/AutoFinder/RemoveAdmin/"

  constructor(private http: HttpClient) { }

  removeAdmin(data:any){
    this.http.put(this.url + data, data).subscribe((result)=>{console.warn(result);})
  }
}
