import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule, MatInputModule } from "@angular/material";

import { ConfirmEmailAddressFormComponent } from "./confirm-email-address-form.component";

@NgModule({
  declarations: [
    ConfirmEmailAddressFormComponent,
  ],
  exports: [
    ConfirmEmailAddressFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class ConfirmEmailAddressFormModule { }
