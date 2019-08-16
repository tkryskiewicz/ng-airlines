import { Component, Output, EventEmitter } from "@angular/core";
import { FormBuilder } from "@angular/forms";

export interface SignUpFormModel {
  login: string;
  password: string;
}

@Component({
  selector: "sign-up-form",
  templateUrl: "sign-up-form.component.html",
})
export class SignUpFormComponent {
  @Output() onSubmitClick = new EventEmitter<SignUpFormModel>();

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

    const model: SignUpFormModel = this.form.value;

    this.onSubmitClick.emit(model);
  }
}
