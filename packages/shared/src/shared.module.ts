import { NgModule } from "@angular/core";

import { AddressFormModule } from "./address-form";
import { ConfirmEmailAddressFormModule } from "./confirm-email-address-form";
import { PassengerNameFormModule } from "./passenger-name-form";
import { PhoneNumberFormModule } from "./phone-number-form";
import { YearMonthControlModule } from "./year-month-control";

@NgModule({
  exports: [
    AddressFormModule,
    ConfirmEmailAddressFormModule,
    PassengerNameFormModule,
    PhoneNumberFormModule,
    YearMonthControlModule,
  ],
  imports: [
    AddressFormModule,
    ConfirmEmailAddressFormModule,
    PassengerNameFormModule,
    PhoneNumberFormModule,
    YearMonthControlModule,
  ],
})
export class SharedModule { }
