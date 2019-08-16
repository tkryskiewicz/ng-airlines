import { Component, Output, EventEmitter } from "@angular/core";
import { FormBuilder } from "@angular/forms";

export interface LogInFormModel {
  login: string;
  password: string;
}

@Component({
  selector: "log-in-form",
  templateUrl: "log-in-form.component.html",
})
export class LogInFormComponent {
  @Output() onResetPasswordClick = new EventEmitter<never>();
  @Output() onSubmitClick = new EventEmitter<LogInFormModel>();

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

    const model: LogInFormModel = this.form.value;

    this.onSubmitClick.emit(model);
  }
}
