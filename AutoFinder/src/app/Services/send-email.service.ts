import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SendEmailService {

  url = "https://localhost:44344/AutoFinder/SendMail/"

  constructor(private http: HttpClient) { }

  sendEmail(data:any){
    this.http.post(this.url + data.senderID + '/' + data.from + '/' + data.to + '/' + data.emailsubject + '/' + data.emailbody, data).subscribe((result) => {console.log(result)})
  }
}
