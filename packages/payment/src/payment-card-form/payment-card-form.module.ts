import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule, MatInputModule, MatSelectModule } from "@angular/material";

import { YearMonthControlModule } from "@ng-airlines/shared";

import { PaymentCardFormComponent } from "./payment-card-form.component";

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
    YearMonthControlModule,
  ],
})
export class PaymentCardFormModule { }
