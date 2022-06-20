import { Component, OnInit } from '@angular/core';
import { SignInComponent } from '../sign-in/sign-in.component';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  public session_user:any = []

  constructor() { }

  ngOnInit(): void {
    this.session_user = JSON.parse(sessionStorage.getItem('c_user') as string)
    console.log(JSON.parse(sessionStorage.getItem('c_user') as string))
    //console.log(sessionStorage.getItem('isSignedIn'))
    
  }

  getSignedIn(){
    return sessionStorage.getItem('isSignedIn')
  }


  SignOut(){
    sessionStorage.setItem('isSignedIn','not_logged')
    sessionStorage.removeItem('c_user')
  }

  Show(){
    if(document.getElementById("mb")!.style.display == "none")
    {
      document.getElementById("mb")!.style.display = "block"
    }
    else
    {
      document.getElementById("mb")!.style.display = "none"
    }
  }
}
