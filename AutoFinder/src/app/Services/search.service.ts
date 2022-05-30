import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  url = "https://localhost:44344/AutoFinder/Vehicles"

  constructor(private http: HttpClient) { }

  search(){
    return this.http.get(this.url)
  }
}
