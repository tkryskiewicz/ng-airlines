import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { LogInFormModel, SignUpFormModel } from "@ng-airlines/authentication";

@Component({
  selector: "authentication-panel",
  templateUrl: "authentication-panel.component.html",
})
export class AuthenticationPanelComponent {
  constructor(private router: Router) {
  }

  public handleSignUpClick(credentials: SignUpFormModel) {
    // tslint:disable-next-line: no-console
    console.log(`Sign up: ${credentials.login} / ${credentials.password}`);
  }

  public handleLogInClick(credentials: LogInFormModel) {
    // tslint:disable-next-line: no-console
    console.log(`Log in: ${credentials.login} / ${credentials.password}`);
  }

  public handleResetPasswordClick() {
    this.router.navigate(["/forgot-password"]);
  }
}
