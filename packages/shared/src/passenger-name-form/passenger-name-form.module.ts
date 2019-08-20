import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule, MatInputModule, MatSelectModule } from "@angular/material";

import { PassengerNameFormComponent } from "./passenger-name-form.component";

@NgModule({
  declarations: [
    PassengerNameFormComponent,
  ],
  exports: [
    PassengerNameFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
})
export class PassengerNameFormModule { }
