import { Component } from "@angular/core";

@Component({
  selector: "forgot-password-page",
  templateUrl: "forgot-password-page.component.html",
})
export class ForgotPasswordPageComponent {
  public handleSubmitClick(login: string) {
    // tslint:disable-next-line: no-console
    console.log(`Reset password: ${login}`);
  }
}
