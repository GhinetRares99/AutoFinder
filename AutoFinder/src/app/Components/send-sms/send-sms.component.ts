import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-sms',
  templateUrl: './send-sms.component.html',
  styleUrls: ['./send-sms.component.scss']
})
export class SendSMSComponent implements OnInit {

  public stored_user_sms:any = []

  public session_user:any = []

  constructor() { }

  ngOnInit(): void {
    this.session_user = JSON.parse(sessionStorage.getItem('c_user') as string)
  }

}
