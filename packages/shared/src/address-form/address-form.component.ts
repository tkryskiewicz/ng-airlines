import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

import { Country } from "../Country";

@Component({
  selector: "address-form",
  templateUrl: "address-form.component.html",
})
export class AddressFormComponent implements OnInit, OnChanges, OnDestroy {
  @Input() public formGroup = new FormGroup({});
  @Input() public name = "";
  @Input() public required = false;
  @Input() public disabled = false;

  public readonly addressLineMaxLength = 52;
  public readonly cityMaxLength = 32;
  public readonly postalCodeMaxLength = 10;

  public countries: Country[] = [];
  public addressLine1Control = new FormControl();
  public addressLine2Control = new FormControl();
  public cityControl = new FormControl();
  public postalCodeControl = new FormControl();
  public countryControl = new FormControl();
  public form = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {
  }

  public ngOnInit() {
    const addressLineValidators = Validators.maxLength(this.addressLineMaxLength);

    this.addressLine1Control = new FormControl("", addressLineValidators);
    this.addressLine2Control = new FormControl("", addressLineValidators);
    this.cityControl = new FormControl("", Validators.maxLength(this.cityMaxLength));
    this.postalCodeControl = new FormControl("", Validators.compose([
      Validators.maxLength(this.postalCodeMaxLength),
      Validators.pattern(/^[a-zA-Z0-9- ]+$/),
    ]));
    this.countryControl = new FormControl("");

    this.form = this.formBuilder.group({
      addressLine1: this.addressLine1Control,
      addressLine2: this.addressLine2Control,
      city: this.cityControl,
      country: this.countryControl,
      postalCode: this.postalCodeControl,
    });

    this.formGroup.addControl(this.name, this.form);
  }

  public ngOnChanges(changes: SimpleChanges) {
    if (changes.formGroup && !changes.formGroup.currentValue) {
      throw new Error("[formGroup] is required and cannot change");
    }

    if (changes.name && !changes.name.currentValue) {
      throw new Error("[name] is required and cannot change");
    }

    if (changes.disabled) {
      if (changes.disabled.currentValue) {
        this.form.disable();
      } else {
        this.form.enable();
      }
    }
  }

  public ngOnDestroy() {
    this.formGroup.removeControl(this.name);
  }
}
