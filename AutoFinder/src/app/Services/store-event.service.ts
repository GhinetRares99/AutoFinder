import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreEventService {

  constructor() { }

  setStoredEvent(data:any){
    localStorage.setItem('stored_event', JSON.stringify(data)) 
 }
}
