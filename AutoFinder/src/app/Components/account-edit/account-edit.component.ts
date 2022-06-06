import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EditAccountService } from 'src/app/Services/edit-account.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.scss']
})
export class AccountEditComponent implements OnInit {

  public session_user:any = []

  EditUser = new FormGroup({

    firstname: new FormControl('' ,Validators.required),
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

  urlFind = "https://localhost:44344/AutoFinder/FindUserSignIn/"


  constructor(private router: Router, private EU: EditAccountService, private http: HttpClient) {
    
    
  }    

  ngOnInit(): void {
    this.session_user = JSON.parse(sessionStorage.getItem('c_user') as string)
    
  }


  submitUserEdit(){
    if(this.EditUser.valid)
    {

      this.EditUser.value['userID'] = this.session_user[0].userID
      this.EU.editUser(this.EditUser.value)

      this.session_user[0].firstName = this.EditUser.value.firstname
      this.session_user[0].lastName = this.EditUser.value.lastname
      this.session_user[0].userName = this.EditUser.value.username
      this.session_user[0].password = this.EditUser.value.password
      this.session_user[0].email = this.EditUser.value.email
      this.session_user[0].phoneNumber = this.EditUser.value.phonenumber

      this.session_user[0].streetName = this.EditUser.value.streetname
      this.session_user[0].streetNumber = this.EditUser.value.streetnumber
      this.session_user[0].city = this.EditUser.value.city
      this.session_user[0].stateProvince = this.EditUser.value.stateprovince
      this.session_user[0].country = this.EditUser.value.country

      sessionStorage.setItem('c_user', JSON.stringify(this.session_user))
      //sessionStorage.setItem('c_user', JSON.stringify(this.EditUser.value))
      this.router.navigate(["../Account"])
    }
    else
    {
      window.alert("Invalid data!")
      console.log(this.EU.editUser(this.EditUser.value))
    }
  }

}
