import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  url = "https://localhost:44344/AutoFinder/AddUser"

  constructor(private http: HttpClient) { }

  signUpUser(data: any){
    //console.log(data)
    return this.http.post(this.url, data).subscribe((result)=>{console.warn(result);})
  }
}
