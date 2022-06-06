import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteUserService {

  url = "https://localhost:44344/AutoFinder/DeleteUser/"

  constructor(private http: HttpClient) { }

  deleteUser(data:any){
    return this.http.delete(this.url + data).subscribe((result)=>{console.warn(result);})
  }
}
