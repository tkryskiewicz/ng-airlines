import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

import { Country } from "../Country";
import { CountryService } from "../Country.service";

@Component({
  selector: "phone-number-form",
  templateUrl: "phone-number-form.component.html",
})
export class PhoneNumberFormComponent implements OnInit, OnChanges, OnDestroy {
  @Input() public form = new FormGroup({});
  @Input() public name = "";
  @Input() public required = false;
  @Input() public disabled = false;

  public readonly valueMaxLength = 13;

  public countries: Country[] = [];
  public countryControl = new FormControl();
  public valueControl = new FormControl();
  public formGroup = new FormGroup({});

  public selectedCountry?: Country;

  constructor(
    private formBuilder: FormBuilder,
    private countryService: CountryService,
  ) {
  }

  public ngOnInit() {
    this.countryControl = new FormControl("");
    this.valueControl = new FormControl("", Validators.compose([
      Validators.maxLength(this.valueMaxLength),
      Validators.pattern(/^[0-9- ]+$/),
    ]));

    this.formGroup = this.formBuilder.group({
      country: this.countryControl,
      value: this.valueControl,
    });

    this.form.addControl(this.name, this.formGroup);

    this.countryService.getAll()
      .subscribe((r) => this.countries = r);
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
        this.formGroup.disable();
      } else {
        this.formGroup.enable();
      }
    }
  }

  public ngOnDestroy() {
    this.form.removeControl(this.name);
  }

  public selectCountry(value: string) {
    this.selectedCountry = this.countries.find((c) => c.code === value);
  }
}
