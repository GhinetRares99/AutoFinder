import { NgModule } from '@angular/core';
import { MatSuffix } from '@angular/material/form-field';
import { RouterModule, Routes } from '@angular/router';
import { AccountCreatedComponent } from './Components/account-created/account-created.component';
import { AccountEditComponent } from './Components/account-edit/account-edit.component';
import { AccountComponent } from './Components/account/account.component';
import { AddEventComponent } from './Components/add-event/add-event.component';
import { AdminComponent } from './Components/admin/admin.component';
import { EditEventComponent } from './Components/edit-event/edit-event.component';
import { EventAddedComponent } from './Components/event-added/event-added.component';
import { HomeComponent } from './Components/home/home.component';
import { SellComponent } from './Components/sell/sell.component';
import { SendEmailComponent } from './Components/send-email/send-email.component';
import { SendSMSComponent } from './Components/send-sms/send-sms.component';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { VehicleAddedComponent } from './Components/vehicle-added/vehicle-added.component';
import { VehicleDetailsComponent } from './Components/vehicle-details/vehicle-details.component';
import { VehicleEditComponent } from './Components/vehicle-edit/vehicle-edit.component';
import { VehicleEventsComponent } from './Components/vehicle-events/vehicle-events.component';
import { YourSalesComponent } from './Components/your-sales/your-sales.component';
import { AdminGuard } from './Guards/admin.guard';

const routes: Routes = [
  
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'SignUp',
    component: SignUpComponent,
  },

  {
    path: 'SignIn',
    component: SignInComponent,
  },

  {
    path: 'AccountCreated',
    component: AccountCreatedComponent,
  },

  {
    path: 'Account',
    component: AccountComponent,
  },

  {
    path: 'Sell',
    component: SellComponent,
  },

  {
    path: 'AccountEdit',
    component: AccountEditComponent,
  },

  {
    path: 'VehicleAdded',
    component: VehicleAddedComponent,
  },

  {
    path: 'YourSales',
    component: YourSalesComponent,
  },

  {
    path: 'VehicleEdit',
    component: VehicleEditComponent,
  },

  {
    path: 'VehicleEvents',
    component: VehicleEventsComponent,
  },

  {
    path: 'AddEvent',
    component: AddEventComponent,
  },

  {
    path: 'EditEvent',
    component: EditEventComponent,
  },

  {
    path: 'EventAdded',
    component: EventAddedComponent,
  },

  {
    path: 'VehicleDetails',
    component: VehicleDetailsComponent,
  },

  {
    path: 'SendEmail',
    component: SendEmailComponent,
  },

  {
    path: 'SendSMS',
    component: SendSMSComponent,
  },

  {
    path: 'Admin',
    component: AdminComponent,
    canActivate: [AdminGuard],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
