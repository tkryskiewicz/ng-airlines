import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "payment-page",
  templateUrl: "payment-page.component.html",
})
export class PaymentPageComponent {
  public form = this.formBuilder.group({  });
  public disabled = false;

  constructor(private formBuilder: FormBuilder) {
  }

  public handleSubmit() {
    if (!this.form.valid) {
      return;
    }

    // tslint:disable-next-line: no-console
    console.log("Submit payment");
  }
}
