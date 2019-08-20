import { NgModule } from "@angular/core";

import { PaymentCardFormModule } from "./payment-card-form";

@NgModule({
  exports: [
    PaymentCardFormModule,
  ],
  imports: [
    PaymentCardFormModule,
  ],
})
export class PaymentModule { }
