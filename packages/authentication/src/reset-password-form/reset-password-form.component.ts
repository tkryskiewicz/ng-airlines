import { Component, EventEmitter, Output } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "reset-password-form",
  templateUrl: "reset-password-form.component.html",
})
export class ResetPasswordFormComponent {
  @Output() public onSubmitClick = new EventEmitter<string>();

  public form = this.formBuilder.group({
    login: [""],
  });

  constructor(private formBuilder: FormBuilder) {
  }

  public handleSubmit() {
    if (this.form.invalid) {
      return;
    }

    this.onSubmitClick.emit(this.form.get("login")!.value);
  }
}
