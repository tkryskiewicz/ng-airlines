import { NgModule } from "@angular/core";

import { ResetPasswordFormModule } from "@ng-airlines/authentication";

import { ForgotPasswordPageComponent } from "./forgot-password-page.component";

@NgModule({
  declarations: [
    ForgotPasswordPageComponent,
  ],
  exports: [
    ForgotPasswordPageComponent,
  ],
  imports: [
    ResetPasswordFormModule,
  ],
})
export class ForgotPasswordPageModule { }
