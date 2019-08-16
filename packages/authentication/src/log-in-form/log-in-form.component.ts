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

  handleSubmit() {
    if (this.form.invalid) {
      return;
    }

    console.log(`Log in: ${this.form.get("login")!.value} / ${this.form.get("password")!.value}`);
  }
}
