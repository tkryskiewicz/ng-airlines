import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "sign-up-form",
  templateUrl: "sign-up-form.component.html",
})
export class SignUpFormComponent {
  form = this.formBuilder.group({
    login: [""],
    password: [""],
  });

  constructor(private formBuilder: FormBuilder) {
  }

  get loginControl() {
    return this.form.get("login")!;
  }

  get passwordControl() {
    return this.form.get("password")!;
  }

  handleSubmit() {
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      return;
    }

    console.log(`Sign up: ${this.loginControl.value} / ${this.passwordControl.value}`);
  }
}
