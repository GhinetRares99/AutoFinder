import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-send-sms',
  templateUrl: './send-sms.component.html',
  styleUrls: ['./send-sms.component.scss']
})
export class SendSMSComponent implements OnInit {

  public stored_user_sms:any = []

  public session_user:any = []

  SendSMS = new FormGroup({
    smstext: new FormControl('',Validators.required),
  })

  constructor() { }

  ngOnInit(): void {
    this.session_user = JSON.parse(sessionStorage.getItem('c_user') as string)
    this.stored_user_sms = JSON.parse(localStorage.getItem('stored_user') as string)
  }

  sendSMS(){
    if(this.SendSMS.valid)
    {
      this.SendSMS.value['from'] = this.session_user[0].phoneNumber
      this.SendSMS.value['to'] = this.stored_user_sms.phoneNumber
    }
    else
    {
      window.alert("Invalid data!")
    }
    
  }

}
