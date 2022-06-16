import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FindByUsernameService {

  url = "https://localhost:44344/AutoFinder/FindUserByUsername/"

  constructor(private http: HttpClient) { }

  findUserByUsername(data:any){
    return this.http.get(this.url + data)
  }
}
