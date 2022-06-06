import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SignUpService } from 'src/app/Services/sign-up.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  SignUpUser = new FormGroup({

       firstname: new FormControl('',Validators.required),
       lastname: new FormControl('',Validators.required),
       username: new FormControl('',Validators.required),
       password: new FormControl('',[Validators.required,Validators.minLength(5)]),
       email: new FormControl('',Validators.required),
       phonenumber: new FormControl('',[Validators.required,Validators.maxLength(13)]),

       streetname: new FormControl('',Validators.required),
       streetnumber: new FormControl('',[Validators.required,Validators.min(1)]),
       city: new FormControl('',Validators.required),
       stateprovince: new FormControl('',Validators.required),
       country: new FormControl('',Validators.required),

  })

  constructor(private SUU: SignUpService, private router: Router) { }

  ngOnInit(): void {
  }

  submitUserSignUp(){
     console.log(this.SignUpUser.value)  
     if(this.SignUpUser.valid)
     {
       this.SUU.signUpUser(this.SignUpUser.value)  
       this.router.navigate(["../AccountCreated"])
     }
     else
     {
       window.alert("Invalid data!")
       console.log(this.SUU.signUpUser(this.SignUpUser.value))
     }
  }

}
