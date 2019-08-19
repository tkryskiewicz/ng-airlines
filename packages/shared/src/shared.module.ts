import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule, MatInputModule, MatSelectModule } from "@angular/material";

import { AddressFormComponent } from "./address-form";
import { PassengerNameFormComponent } from "./passenger-name-form";
import { PhoneNumberFormComponent } from "./phone-number-form";

@NgModule({
  declarations: [
    AddressFormComponent,
    PassengerNameFormComponent,
    PhoneNumberFormComponent,
  ],
  exports: [
    AddressFormComponent,
    PassengerNameFormComponent,
    PhoneNumberFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
})
export class SharedModule { }
