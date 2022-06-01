import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminGetUsersService {

  url = "https://localhost:44344/AutoFinder/Users"

  constructor(private http: HttpClient) { }

  adminGetUsers(){
    return this.http.get(this.url)
  }
}
