import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.scss']
})
export class SendEmailComponent implements OnInit {

  public stored_user_email:any = []

  public session_user:any = []

  constructor() { }

  ngOnInit(): void {
    this.session_user = JSON.parse(sessionStorage.getItem('c_user') as string)
    this.stored_user_email = JSON.parse(localStorage.getItem('stored_user') as string)
  }

}
