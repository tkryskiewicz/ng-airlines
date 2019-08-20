import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "confirm-email-address-form",
  styleUrls: [
    "confirm-email-address-form.component.scss",
  ],
  templateUrl: "confirm-email-address-form.component.html",
})
export class ConfirmEmailAddressFormComponent implements OnInit, OnChanges, OnDestroy {
  @Input() public form = new FormGroup({});
  @Input() public name = "";
  @Input() public required = false;
  @Input() public disabled = false;

  public valueControl = new FormControl();
  public confirmValueControl = new FormControl();
  public formGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {
  }

  public ngOnInit() {
    this.valueControl = new FormControl("");
    this.confirmValueControl = new FormControl("");

    this.formGroup = this.formBuilder.group({
      confirmValue: this.confirmValueControl,
      value: this.valueControl,
    });

    // FIXME
    this.formGroup.setValidators(() => {
      if ((this.valueControl.value || this.confirmValueControl.value) &&
        this.valueControl.value !== this.confirmValueControl.value) {
        this.confirmValueControl.setErrors({
          ...this.confirmValueControl.errors,
          match: true,
        });
      } else {
        const { match = null, ...rest } = this.confirmValueControl.errors || {};

        if (Object.keys(rest).length) {
          this.confirmValueControl.setErrors(rest);
        } else {
          this.confirmValueControl.setErrors(null);
        }
      }

      return null;
    });

    this.form.addControl(this.name, this.formGroup);

    this.setValidators();
  }

  public ngOnChanges(changes: SimpleChanges) {
    if (changes.form && !changes.form.currentValue) {
      throw new Error("[form] is required and cannot change");
    }

    if (changes.name && !changes.name.currentValue) {
      throw new Error("[name] is required and cannot change");
    }

    if (changes.disabled) {
      if (changes.disabled.currentValue) {
        this.formGroup.disable();
      } else {
        this.formGroup.enable();
      }
    }
  }

  public ngOnDestroy() {
    this.form.removeControl(this.name);
  }

  public valueBlur() {
    if (this.valueControl.value) {
      this.confirmValueControl.markAsTouched();
    }
  }

  private setValidators() {
    const baseValidators = this.required ?
      [Validators.required] :
      [];

    const validators = [
      ...baseValidators,
      Validators.email,
    ];

    this.valueControl.setValidators(validators);
    this.valueControl.updateValueAndValidity();

    this.confirmValueControl.setValidators(validators);
    this.confirmValueControl.updateValueAndValidity();
  }
}
