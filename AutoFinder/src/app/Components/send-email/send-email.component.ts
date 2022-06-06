import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SendEmailService } from 'src/app/Services/send-email.service';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.scss']
})
export class SendEmailComponent implements OnInit {

  public stored_user_email: any = []

  public session_user: any = []

  SendEmail = new FormGroup({
    emailsubject: new FormControl('',Validators.required),
    emailbody: new FormControl('',Validators.required),  
  })

  constructor(private SE: SendEmailService, private router: Router) { }

  ngOnInit(): void {
    this.session_user = JSON.parse(sessionStorage.getItem('c_user') as string)
    this.stored_user_email = JSON.parse(localStorage.getItem('stored_user') as string)
  }

  sendEmail(){
    if(this.SendEmail.valid)
    {
      this.SendEmail.value['senderID'] = this.session_user[0].userID
      this.SendEmail.value['from'] = this.session_user[0].email
      this.SendEmail.value['to'] = this.stored_user_email.email
      this.SE.sendEmail(this.SendEmail.value)
      this.router.navigate(["../EmailSuccess"])
    }
    else
    {
      window.alert("Invalid data!")
    }
  }

}
