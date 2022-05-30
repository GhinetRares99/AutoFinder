import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { Routes, RouterModule} from '@angular/router';
import { TopBarComponent } from './Components/top-bar/top-bar.component';
import { HomeComponent } from './Components/home/home.component';
import { GalleryComponent } from './Components/gallery/gallery.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { SearchComponent } from './Components/search/search.component';
import { AccountCreatedComponent } from './Components/account-created/account-created.component';
import { AccountComponent } from './Components/account/account.component';
import { SellComponent } from './Components/sell/sell.component';
import { AccountEditComponent } from './Components/account-edit/account-edit.component';
import { VehicleAddedComponent } from './Components/vehicle-added/vehicle-added.component';
import { YourSalesComponent } from './Components/your-sales/your-sales.component';
import { VehicleEventsComponent } from './Components/vehicle-events/vehicle-events.component';
import { VehicleEditComponent } from './Components/vehicle-edit/vehicle-edit.component';
import { AddEventComponent } from './Components/add-event/add-event.component';
import { EventAddedComponent } from './Components/event-added/event-added.component';
import { EditEventComponent } from './Components/edit-event/edit-event.component';
import { VehicleDetailsComponent } from './Components/vehicle-details/vehicle-details.component';
import { SendEmailComponent } from './Components/send-email/send-email.component';
import { SendSMSComponent } from './Components/send-sms/send-sms.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomeComponent,
    GalleryComponent,
    SignUpComponent,
    SignInComponent,
    SearchComponent,
    AccountCreatedComponent,
    AccountComponent,
    SellComponent,
    AccountEditComponent,
    VehicleAddedComponent,
    YourSalesComponent,
    VehicleEventsComponent,
    VehicleEditComponent,
    AddEventComponent,
    EventAddedComponent,
    EditEventComponent,
    VehicleDetailsComponent,
    SendEmailComponent,
    SendSMSComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTabsModule,
    MatIconModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
