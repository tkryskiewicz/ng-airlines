import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { SignUpFormModel, LogInFormModel } from "@ng-airlines/authentication";

@Component({
  selector: "authentication-panel",
  templateUrl: "authentication-panel.component.html",
})
export class AuthenticationPanel {
  constructor(private router: Router) {
  }

  handleSignUpClick(credentials: SignUpFormModel) {
    console.log(`Sign up: ${credentials.login} / ${credentials.password}`);
  }

  handleLogInClick(credentials: LogInFormModel) {
    console.log(`Log in: ${credentials.login} / ${credentials.password}`);
  }

  handleResetPasswordClick() {
    this.router.navigate(["/forgot-password"]);
  }
}
