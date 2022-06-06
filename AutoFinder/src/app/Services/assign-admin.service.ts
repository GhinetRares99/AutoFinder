import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssignAdminService {

  url = "https://localhost:44344/AutoFinder/AssignAdmin/"

  constructor(private http: HttpClient) { }

  assignAdmin(data:any){
    this.http.put(this.url + data, data).subscribe((result)=>{console.warn(result);})
  }
}
