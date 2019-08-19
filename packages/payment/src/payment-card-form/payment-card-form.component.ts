import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { MatSelectChange } from "@angular/material";
import * as Moment from "moment";
import { extendMoment } from "moment-range";

const moment = extendMoment(Moment);

import { PaymentCardType } from "../PaymentCardType";

@Component({
  selector: "payment-card-form",
  templateUrl: "payment-card-form.component.html",
})
export class PaymentCardFormComponent implements OnInit, OnChanges, OnDestroy {
  @Input() public formGroup = new FormGroup({});
  @Input() public name = "";
  @Input() public required = false;
  @Input() public disabled = false;

  public readonly cardNumberMaxLength = 16;
  public readonly securityCodeMaxLength = 4;
  public readonly cardholdersNameMinLength = 2;
  public readonly cardholdersNameMaxLength = 30;

  public cardTypes: PaymentCardType[] = [
    {
      cardNumber: {
        length: 15,
        pattern: "^3[4,7][0-9]+$",
      },
      code: "AX",
      name: "American Express",
      securityCode: {
        length: 4,
        type: "CID",
      },
    },
    {
      cardNumber: {
        length: 16,
        pattern: "^5[0-9]+$",
      },
      code: "MC",
      name: "MasterCard",
      securityCode: {
        length: 3,
        type: "CVV",
      },
    },
  ];
  public cardTypeControl = new FormControl("");
  public cardNumberControl = new FormControl("");
  public expiryDateYearControl = new FormControl("");
  public expiryDateMonthControl = new FormControl("");
  public securityCodeControl = new FormControl("");
  public cardholdersNameControl = new FormControl("");
  public form = new FormGroup({});

  public selectedCardType?: PaymentCardType;

  constructor(private formBuilder: FormBuilder) {
  }

  public ngOnInit() {
    this.form = this.formBuilder.group({
      cardNumber: this.cardNumberControl,
      cardType: this.cardTypeControl,
      cardholdersName: this.cardholdersNameControl,
      expiryDateMonth: this.expiryDateMonthControl,
      expiryDateYear: this.expiryDateYearControl,
      securityCode: this.securityCodeControl,
    });

    this.formGroup.addControl(this.name, this.form);

    this.setValidators();
  }

  public ngOnChanges(changes: SimpleChanges) {
    if (changes.formGroup && !changes.formGroup.currentValue) {
      throw new Error("[formGroup] is required and cannot change");
    }

    if (changes.name && !changes.name.currentValue) {
      throw new Error("[name] is required and cannot change");
    }

    if (changes.required) {
      this.setValidators();
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

  public getCardNumberError() {
    if (!this.cardNumberControl.invalid) {
      return;
    }

    if (this.cardNumberControl.hasError("required")) {
      return "This field is required";
    }

    if (!this.selectedCardType) {
      if (this.cardNumberControl.hasError("maxlength")) {
        return `Must be less than ${this.cardNumberMaxLength} digits`;
      }

      if (this.cardNumberControl.hasError("pattern")) {
        return "Only digits are allowed";
      }
    } else {
      if (this.cardNumberControl.hasError("minlength") || this.cardNumberControl.hasError("maxlength")) {
        return `Must be ${this.selectedCardType.cardNumber.length} digits long`;
      }

      if (this.cardNumberControl.hasError("pattern")) {
        return `Not a valid ${this.selectedCardType.name} card number`;
      }
    }
  }

  public getSecurityCodeError() {
    if (!this.securityCodeControl.invalid) {
      return;
    }

    if (this.securityCodeControl.hasError("required")) {
      return "This field is required";
    }

    if (!this.selectedCardType) {
      if (this.securityCodeControl.hasError("maxlength")) {
        return `Must be less than ${this.securityCodeMaxLength} digits`;
      }
    } else {
      if (this.securityCodeControl.hasError("minlength") || this.securityCodeControl.hasError("maxlength")) {
        return `Must be ${this.selectedCardType.securityCode.length} digits long`;
      }
    }

    if (this.securityCodeControl.hasError("pattern")) {
      return "Only digits are allowed";
    }
  }

  public selectCardType(value: MatSelectChange) {
    this.selectedCardType = this.cardTypes.find((ct) => ct.code === value.value);

    this.setValidators();
  }

  public getExpiryDateYears() {
    return Array.from(moment.rangeFromInterval("y", 2).by("y"))
      .map((d) => d.year());
  }

  public getExpiryDateMonths() {
    const startDate = this.expiryDateYearControl.value === moment().year() ?
      moment().startOf("M") :
      moment({ year: this.expiryDateYearControl.value });

    const endDate = this.expiryDateYearControl.value === moment().add(2, "y").year() ?
      moment().add(2, "y") :
      moment({ year: this.expiryDateYearControl.value }).endOf("y");

    return Array.from(moment.range(startDate, endDate).by("M"))
      .map((d) => d.month() + 1);
  }

  public selectExpiryDateYear() {
    if (!this.getExpiryDateMonths().includes(this.expiryDateMonthControl.value)) {
      this.expiryDateMonthControl.setValue("");
    }
  }

  private setValidators() {
    const baseValidators = this.required ?
      [Validators.required] :
      [];

    this.cardNumberControl.setValidators([
      ...baseValidators,
      ...this.selectedCardType ? [
        Validators.minLength(this.selectedCardType.cardNumber.length),
        Validators.maxLength(this.selectedCardType.cardNumber.length),
        Validators.pattern(this.selectedCardType.cardNumber.pattern),
      ] : [
          Validators.maxLength(this.cardNumberMaxLength),
          Validators.pattern(/^[0-9]+$/),
        ],
    ]);

    this.cardNumberControl.updateValueAndValidity();

    this.securityCodeControl.setValidators([
      ...baseValidators,
      ...this.selectedCardType ? [
        Validators.minLength(this.selectedCardType.securityCode.length),
        Validators.maxLength(this.selectedCardType.securityCode.length),
      ] : [
          Validators.maxLength(this.securityCodeMaxLength),
        ],
      Validators.pattern(/^[0-9]+$/),
    ]);

    this.securityCodeControl.updateValueAndValidity();

    this.cardholdersNameControl.setValidators([
      ...baseValidators,
      Validators.minLength(this.cardholdersNameMinLength),
      Validators.maxLength(this.cardholdersNameMaxLength),
    ]);

    this.cardholdersNameControl.updateValueAndValidity();
  }
}
