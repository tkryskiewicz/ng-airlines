import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule, MatFormFieldModule, MatInputModule } from "@angular/material";

import { ResetPasswordFormComponent } from "./reset-password-form.component";

@NgModule({
  declarations: [
    ResetPasswordFormComponent,
  ],
  exports: [
    ResetPasswordFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class ResetPasswordFormModule { }
