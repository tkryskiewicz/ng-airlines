import { Component, Output, EventEmitter } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "reset-password-form",
  templateUrl: "reset-password-form.component.html",
})
export class ResetPasswordFormComponent {
  @Output() onSubmitClick = new EventEmitter<string>();

  form = this.formBuilder.group({
    login: [""],
  });

  constructor(private formBuilder: FormBuilder) {
  }

  handleSubmit() {
    if (this.form.invalid) {
      return;
    }

    this.onSubmitClick.emit(this.form.get("login")!.value);
  }
}
