import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule, MatFormFieldModule, MatInputModule } from "@angular/material";
import { ReactiveFormsModule } from "@angular/forms";

import { LogInFormComponent } from "./log-in-form";
import { SignUpFormComponent } from "./sign-up-form";

@NgModule({
  declarations: [
    LogInFormComponent,
    SignUpFormComponent,
  ],
  exports: [
    LogInFormComponent,
    SignUpFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class AuthenticationModule { }
