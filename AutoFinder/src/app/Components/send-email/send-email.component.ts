import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.scss']
})
export class SendEmailComponent implements OnInit {

  public stored_user_email:any = []

  public session_user:any = []

  SendEmail = new FormGroup({
    emailsubject: new FormControl('',Validators.required),
    emailbody: new FormControl('',Validators.required),  
  })

  constructor() { }

  ngOnInit(): void {
    this.session_user = JSON.parse(sessionStorage.getItem('c_user') as string)
    this.stored_user_email = JSON.parse(localStorage.getItem('stored_user') as string)
  }

  sendEmail(){
    if(this.SendEmail.valid)
    {
      this.SendEmail.value['from'] = this.session_user[0].email
      this.SendEmail.value['to'] = this.stored_user_email.email
    }
    else
    {
      window.alert("Invalid data!")
    }
  }

}
