import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule, MatInputModule, MatSelectModule } from "@angular/material";

import { PhoneNumberFormComponent } from "./phone-number-form.component";

@NgModule({
  declarations: [
    PhoneNumberFormComponent,
  ],
  exports: [
    PhoneNumberFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
})
export class PhoneNumberFormModule { }
