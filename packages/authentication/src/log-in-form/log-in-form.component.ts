import { Component, EventEmitter, Output } from "@angular/core";
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
  @Output() public onResetPasswordClick = new EventEmitter<never>();
  @Output() public onSubmitClick = new EventEmitter<LogInFormModel>();

  public form = this.formBuilder.group({
    login: [""],
    password: [""],
  });

  constructor(private formBuilder: FormBuilder) {
  }

  public handleSubmit() {
    if (this.form.invalid) {
      return;
    }

    const model: LogInFormModel = this.form.value;

    this.onSubmitClick.emit(model);
  }
}
