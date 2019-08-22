import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule, MatCardModule } from "@angular/material";

import { PaymentCardFormModule } from "@ng-airlines/payment";
import {
  AddressFormModule,
  ConfirmEmailAddressFormModule,
  PassengerNameFormModule,
  PhoneNumberFormModule,
} from "@ng-airlines/shared";

import { PaymentPageComponent } from "./payment-page.component";

@NgModule({
  declarations: [
    PaymentPageComponent,
  ],
  exports: [
    PaymentPageComponent,
  ],
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    PassengerNameFormModule,
    ConfirmEmailAddressFormModule,
    PhoneNumberFormModule,
    PaymentCardFormModule,
    AddressFormModule,
  ],
})
export class PaymentPageModule { }
