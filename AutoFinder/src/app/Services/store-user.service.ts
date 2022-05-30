import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreUserService {

  constructor() { }

  setStoredUser(data:any){
    localStorage.setItem('stored_user', JSON.stringify(data)) 
 }
}
