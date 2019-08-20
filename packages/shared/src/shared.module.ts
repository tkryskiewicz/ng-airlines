import { NgModule } from "@angular/core";

import { AddressFormModule } from "./address-form";
import { ConfirmEmailAddressFormModule } from "./confirm-email-address-form";
import { PassengerNameFormModule } from "./passenger-name-form";
import { PhoneNumberFormModule } from "./phone-number-form";

@NgModule({
  exports: [
    AddressFormModule,
    ConfirmEmailAddressFormModule,
    PassengerNameFormModule,
    PhoneNumberFormModule,
  ],
  imports: [
    AddressFormModule,
    ConfirmEmailAddressFormModule,
    PassengerNameFormModule,
    PhoneNumberFormModule,
  ],
})
export class SharedModule { }
