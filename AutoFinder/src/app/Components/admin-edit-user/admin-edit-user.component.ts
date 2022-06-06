import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EditAccountService } from 'src/app/Services/edit-account.service';

@Component({
  selector: 'app-admin-edit-user',
  templateUrl: './admin-edit-user.component.html',
  styleUrls: ['./admin-edit-user.component.scss']
})
export class AdminEditUserComponent implements OnInit {

  public stored_user_admin_edit: any = []

  public session_user: any = []

  AdminEditUser = new FormGroup({
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

  constructor(private EU: EditAccountService, public router: Router) { }

  ngOnInit(): void {
    this.stored_user_admin_edit = JSON.parse(localStorage.getItem('stored_user') as string)
    this.session_user = JSON.parse(sessionStorage.getItem('c_user') as string)
  }

  submitAdminEditedUser(){
    if(this.AdminEditUser.valid)
    {
      this.AdminEditUser.value['userID'] = this.stored_user_admin_edit.userID
      this.EU.editUser(this.AdminEditUser.value)

      if(this.stored_user_admin_edit.userID == this.session_user[0].userID)
      {

        this.session_user[0].firstName = this.AdminEditUser.value.firstname
        this.session_user[0].lastName = this.AdminEditUser.value.lastname
        this.session_user[0].userName = this.AdminEditUser.value.username
        this.session_user[0].password = this.AdminEditUser.value.password
        this.session_user[0].email = this.AdminEditUser.value.email
        this.session_user[0].phoneNumber = this.AdminEditUser.value.phonenumber

        this.session_user[0].streetName = this.AdminEditUser.value.streetname
        this.session_user[0].streetNumber = this.AdminEditUser.value.streetnumber
        this.session_user[0].city = this.AdminEditUser.value.city
        this.session_user[0].stateProvince = this.AdminEditUser.value.stateprovince
        this.session_user[0].country = this.AdminEditUser.value.country

        sessionStorage.setItem('c_user', JSON.stringify(this.session_user))
      }

      this.router.navigateByUrl("", {skipLocationChange: true}).then(() => {
        this.router.navigate(["../Admin"])
      })
    }
    else
    {
      window.alert("Invalid data!")
    }
  }
}
