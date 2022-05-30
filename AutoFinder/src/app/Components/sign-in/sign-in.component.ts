import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignInService } from 'src/app/Services/sign-in.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  //public current_user:any = []

  SignInUser = new FormGroup({

    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),

  })

  constructor(private SIU: SignInService, private router: Router) { }

  ngOnInit(): void {
  }

  submitUserSignIn(){
    if(this.SignInUser.valid)
    {
      console.log(this.SignInUser.value)
      this.SIU.signInUser(this.SignInUser.value).subscribe((utl) => {
        if(Object.keys(utl).length != 0)
        {

          //this.current_user = utl
          //console.log(this.current_user)
          //console.log(this.current_user[0])
          sessionStorage.setItem('c_user', JSON.stringify(utl))
          console.log(JSON.stringify(utl))
          sessionStorage.setItem('isSignedIn','logged')
          this.router.navigate([""])
        }
        else
        {
          window.alert("This account doesn't exist!")
          console.log("This account doesn't exist!")
        }
      })
    }
    else
    {
      window.alert("Invalid data!")
      console.log("One or more fields are empty!")
    }
    
    // if(this.SignInUser.valid)
    // {
    //   this.router.navigate([""])
    // }
  }
}
