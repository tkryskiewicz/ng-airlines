import { Component, EventEmitter, Input, Output } from "@angular/core";

import { AuthenticationService, LogInFormModel, SignUpFormModel } from "@ng-airlines/authentication";

export enum AuthenticationPanelTab {
  SignUp = "signUp",
  LogIn = "logIn",
}

@Component({
  selector: "authentication-panel",
  templateUrl: "authentication-panel.component.html",
})
export class AuthenticationPanelComponent {
  @Input() public selectedTab = AuthenticationPanelTab.SignUp;
  @Output() public signUp = new EventEmitter<never>();
  @Output() public logIn = new EventEmitter<never>();
  @Output() public resetPassword = new EventEmitter<never>();

  public Tab = AuthenticationPanelTab;

  constructor(private authenticationService: AuthenticationService) {
  }

  public async handleSignUpClick(credentials: SignUpFormModel) {
    const user = await this.authenticationService.signUp(credentials.login, credentials.password);

    if (user) {
      this.signUp.emit();
    }
  }

  public async handleLogInClick(credentials: LogInFormModel) {
    const user = await this.authenticationService.logIn(credentials.login, credentials.password);

    if (user) {
      this.logIn.emit();
    }
  }

  public handleResetPasswordClick() {
    this.resetPassword.emit();
  }
}
