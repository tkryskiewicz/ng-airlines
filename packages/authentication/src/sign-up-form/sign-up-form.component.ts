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

  handleSubmit() {
    if (this.form.invalid) {
      return;
    }

    console.log(`Sign up: ${this.form.get("login")!.value} / ${this.form.get("password")!.value}`);
  }
}
