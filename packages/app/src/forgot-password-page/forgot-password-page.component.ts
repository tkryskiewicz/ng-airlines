import { Component } from "@angular/core";

@Component({
  selector: "forgot-password-page",
  templateUrl: "forgot-password-page.component.html",
})
export class ForgotPasswordPageComponent {
  handleSubmitClick(login: string) {
    console.log(`Reset password: ${login}`);
  }
}
