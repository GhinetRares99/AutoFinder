import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteAccountService {

  public session_user: any = []

  url = "https://localhost:44344/AutoFinder/DeleteUser/"

  constructor(private http: HttpClient) { 
    this.session_user = JSON.parse(sessionStorage.getItem('c_user') as string)
  }

  deleteUser(){
    console.log(this.session_user[0].userID)
    return this.http.delete(this.url + this.session_user[0].userID).subscribe((result)=>{console.warn(result);})
  }
}
