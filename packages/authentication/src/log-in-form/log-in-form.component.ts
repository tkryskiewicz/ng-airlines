import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "log-in-form",
  templateUrl: "log-in-form.component.html",
})
export class LogInFormComponent {
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

    console.log(`Log in: ${this.loginControl.value} / ${this.passwordControl.value}`);
  }
}
