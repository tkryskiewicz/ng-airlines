import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule, MatInputModule, MatSelectModule } from "@angular/material";

import { PaymentCardFormComponent } from "./payment-card-form";

@NgModule({
  declarations: [
    PaymentCardFormComponent,
  ],
  exports: [
    PaymentCardFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
})
export class PaymentModule { }
