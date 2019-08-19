import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

import { Country } from "../Country";

@Component({
  selector: "phone-number-form",
  templateUrl: "phone-number-form.component.html",
})
export class PhoneNumberFormComponent implements OnInit, OnChanges, OnDestroy {
  @Input() public formGroup = new FormGroup({});
  @Input() public name = "";
  @Input() public required = false;
  @Input() public disabled = false;

  public readonly valueMaxLength = 13;

  public countries: Country[] = [
    {
      callingCode: "48",
      code: "PL",
      name: "Poland",
    },
  ];
  public countryControl = new FormControl();
  public valueControl = new FormControl();
  public form = new FormGroup({});

  public selectedCountry?: Country;

  constructor(private formBuilder: FormBuilder) {
  }

  public ngOnInit() {
    this.countryControl = new FormControl("");
    this.valueControl = new FormControl("", Validators.compose([
      Validators.maxLength(this.valueMaxLength),
      Validators.pattern(/^[0-9- ]+$/),
    ]));

    this.form = this.formBuilder.group({
      country: this.countryControl,
      value: this.valueControl,
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

  public selectCountry(value: string) {
    this.selectedCountry = this.countries.find((c) => c.code === value);
  }
}
