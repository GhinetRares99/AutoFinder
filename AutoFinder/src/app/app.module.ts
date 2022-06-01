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
import { AdminComponent } from './Components/admin/admin.component';
import { CategoryFilterPipe } from './Pipes/category-filter.pipe';
import { CompanyFilterPipe } from './Pipes/company-filter.pipe';
import { ModelFilterPipe } from './Pipes/model-filter.pipe';
import { PriceFilterPipe } from './Pipes/price-filter.pipe';
import { FabricationYearFilterPipe } from './Pipes/fabrication-year-filter.pipe';
import { FuelFilterPipe } from './Pipes/fuel-filter.pipe';
import { KilometresFilterPipe } from './Pipes/kilometres-filter.pipe';
import { PowerFilterPipe } from './Pipes/power-filter.pipe';
import { CapacityFilterPipe } from './Pipes/capacity-filter.pipe';
import { TransmissionFilterPipe } from './Pipes/transmission-filter.pipe';
import { PollutionNormFilterPipe } from './Pipes/pollution-norm-filter.pipe';
import { DoorsFilterPipe } from './Pipes/doors-filter.pipe';
import { ColorFilterPipe } from './Pipes/color-filter.pipe';
import { WarrantyFilterPipe } from './Pipes/warranty-filter.pipe';
import { CountryOfOriginFilterPipe } from './Pipes/country-of-origin-filter.pipe';
import { FirstRegistrationFilterPipe } from './Pipes/first-registration-filter.pipe';
import { RegisteredFilterPipe } from './Pipes/registered-filter.pipe';
import { AdminUsersUserIDPipe } from './Pipes/admin-users-user-id.pipe';
import { AdminUsersUsernamePipe } from './Pipes/admin-users-username.pipe';
import { AdminVehiclesVehicleIDPipe } from './Pipes/admin-vehicles-vehicle-id.pipe';
import { AdminVehiclesUserIDPipe } from './Pipes/admin-vehicles-user-id.pipe';
import { AdminEventsEventIDPipe } from './Pipes/admin-events-event-id.pipe';
import { AdminEventsVehicleIDPipe } from './Pipes/admin-events-vehicle-id.pipe';

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
    AdminComponent,
    CategoryFilterPipe,
    CompanyFilterPipe,
    ModelFilterPipe,
    PriceFilterPipe,
    FabricationYearFilterPipe,
    FuelFilterPipe,
    KilometresFilterPipe,
    PowerFilterPipe,
    CapacityFilterPipe,
    TransmissionFilterPipe,
    PollutionNormFilterPipe,
    DoorsFilterPipe,
    ColorFilterPipe,
    WarrantyFilterPipe,
    CountryOfOriginFilterPipe,
    FirstRegistrationFilterPipe,
    RegisteredFilterPipe,
    AdminUsersUserIDPipe,
    AdminUsersUsernamePipe,
    AdminVehiclesVehicleIDPipe,
    AdminVehiclesUserIDPipe,
    AdminEventsEventIDPipe,
    AdminEventsVehicleIDPipe,
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
