import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class SignInService {

  url = "https://localhost:44344/AutoFinder/FindUserSignIn/"

  constructor(private http: HttpClient, private router: Router) { }

  signInUser(data: any) {
      //console.log(typeof(data.password);
      return this.http.get(this.url + data.username + '/' + data.password)
  }

}

