import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditAccountService {

  public session_user: any = []

  url = "https://localhost:44344/AutoFinder/EditUser"

  constructor(private http: HttpClient) { 
    this.session_user = JSON.parse(sessionStorage.getItem('c_user') as string)
  }


  editUser(data: any){
      //console.log(this.session_user[0].userID)
      return this.http.put(this.url, data).subscribe((result)=>{console.warn(result);})
  }
}
