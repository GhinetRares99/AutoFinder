import { NgModule } from '@angular/core';
import { MatSuffix } from '@angular/material/form-field';
import { RouterModule, Routes } from '@angular/router';
import { AccountCreatedComponent } from './Components/account-created/account-created.component';
import { AccountEditComponent } from './Components/account-edit/account-edit.component';
import { AccountComponent } from './Components/account/account.component';
import { AddEventComponent } from './Components/add-event/add-event.component';
import { AdminEditEventComponent } from './Components/admin-edit-event/admin-edit-event.component';
import { AdminEditUserComponent } from './Components/admin-edit-user/admin-edit-user.component';
import { AdminEditVehicleComponent } from './Components/admin-edit-vehicle/admin-edit-vehicle.component';
import { AdminComponent } from './Components/admin/admin.component';
import { EditEventComponent } from './Components/edit-event/edit-event.component';
import { EmailSuccessComponent } from './Components/email-success/email-success.component';
import { EventAddedComponent } from './Components/event-added/event-added.component';
import { HomeComponent } from './Components/home/home.component';
import { SellComponent } from './Components/sell/sell.component';
import { SendEmailComponent } from './Components/send-email/send-email.component';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { VehicleAddedComponent } from './Components/vehicle-added/vehicle-added.component';
import { VehicleDetailsComponent } from './Components/vehicle-details/vehicle-details.component';
import { VehicleEditComponent } from './Components/vehicle-edit/vehicle-edit.component';
import { VehicleEventsComponent } from './Components/vehicle-events/vehicle-events.component';
import { YourSalesComponent } from './Components/your-sales/your-sales.component';
import { AdminGuard } from './Guards/admin.guard';
import { SignedInGuard } from './Guards/signed-in.guard';

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
    canActivate: [SignedInGuard],
  },

  {
    path: 'Account',
    component: AccountComponent,
    canActivate: [SignedInGuard],
  },

  {
    path: 'Sell',
    component: SellComponent,
    canActivate: [SignedInGuard],
  },

  {
    path: 'AccountEdit',
    component: AccountEditComponent,
    canActivate: [SignedInGuard],
  },

  {
    path: 'VehicleAdded',
    component: VehicleAddedComponent,
    canActivate: [SignedInGuard],
  },

  {
    path: 'YourSales',
    component: YourSalesComponent,
    canActivate: [SignedInGuard],
  },

  {
    path: 'VehicleEdit',
    component: VehicleEditComponent,
    canActivate: [SignedInGuard],
  },

  {
    path: 'VehicleEvents',
    component: VehicleEventsComponent,
    canActivate: [SignedInGuard],
  },

  {
    path: 'AddEvent',
    component: AddEventComponent,
    canActivate: [SignedInGuard],
  },

  {
    path: 'EditEvent',
    component: EditEventComponent,
    canActivate: [SignedInGuard],
  },

  {
    path: 'EventAdded',
    component: EventAddedComponent,
    canActivate: [SignedInGuard],
  },

  {
    path: 'VehicleDetails',
    component: VehicleDetailsComponent,
  },

  {
    path: 'SendEmail',
    component: SendEmailComponent,
    canActivate: [SignedInGuard],
  },

  {
    path: 'EmailSuccess',
    component: EmailSuccessComponent,
    canActivate: [SignedInGuard],
  },

  {
    path: 'Admin',
    component: AdminComponent,
    canActivate: [AdminGuard],
  },

  {
    path: 'AdminEditEvent',
    component: AdminEditEventComponent,
    canActivate: [AdminGuard],
  },

  {
    path: 'AdminEditVehicle',
    component: AdminEditVehicleComponent,
    canActivate: [AdminGuard],
  },

  {
    path: 'AdminEditUser',
    component: AdminEditUserComponent,
    canActivate: [AdminGuard],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
