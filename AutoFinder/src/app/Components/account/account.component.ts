import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeleteAccountService } from 'src/app/Services/delete-account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  public session_user:any = []

  constructor(private DU: DeleteAccountService, private router: Router) { }

  ngOnInit(): void {
    this.session_user = JSON.parse(sessionStorage.getItem('c_user') as string)
  }

  DeleteUser(){
    this.DU.deleteUser()
    sessionStorage.setItem('isSignedIn','not_logged')
    sessionStorage.removeItem('c_user')
    this.router.navigate([""])
  }

}


