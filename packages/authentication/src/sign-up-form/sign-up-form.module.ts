import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule, MatFormFieldModule, MatInputModule } from "@angular/material";

import { SignUpFormComponent } from "./sign-up-form.component";

@NgModule({
  declarations: [
    SignUpFormComponent,
  ],
  exports: [
    SignUpFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class SignUpFormModule { }
