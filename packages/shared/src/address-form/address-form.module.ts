import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule, MatInputModule, MatSelectModule } from "@angular/material";

import { AddressFormComponent } from "./address-form.component";

@NgModule({
  declarations: [
    AddressFormComponent,
  ],
  exports: [
    AddressFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
})
export class AddressFormModule { }
