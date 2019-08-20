import { NgModule } from "@angular/core";

import { LogInFormModule } from "./log-in-form";
import { ResetPasswordFormModule } from "./reset-password-form";
import { SignUpFormModule } from "./sign-up-form";

@NgModule({
  exports: [
    LogInFormModule,
    ResetPasswordFormModule,
    SignUpFormModule,
  ],
  imports: [
    LogInFormModule,
    ResetPasswordFormModule,
    SignUpFormModule,
  ],
})
export class AuthenticationModule { }
