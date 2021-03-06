import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import * as Moment from "moment";
import { extendMoment } from "moment-range";

const moment = extendMoment(Moment);

import { PaymentCardType } from "../PaymentCardType";
import { PaymentCardTypeService } from "../PaymentCardType.service";

@Component({
  selector: "payment-card-form",
  styleUrls: [
    "payment-card-form.component.scss",
  ],
  templateUrl: "payment-card-form.component.html",
})
export class PaymentCardFormComponent implements OnInit, OnChanges, OnDestroy {
  @Input() public form = new FormGroup({});
  @Input() public name = "";
  @Input() public required = false;
  @Input() public disabled = false;

  public readonly cardNumberMaxLength = 16;
  public readonly securityCodeMaxLength = 4;
  public readonly cardholdersNameMinLength = 2;
  public readonly cardholdersNameMaxLength = 30;

  public cardTypes: PaymentCardType[] = [];
  public cardTypeControl = new FormControl("");
  public cardNumberControl = new FormControl("");
  public expiryDateYearControl = new FormControl("");
  public expiryDateMonthControl = new FormControl("");
  public securityCodeControl = new FormControl("");
  public cardholdersNameControl = new FormControl("");
  public formGroup = new FormGroup({});

  public selectedCardType?: PaymentCardType;

  constructor(
    private formBuilder: FormBuilder,
    private cardTypeService: PaymentCardTypeService,
  ) {
  }

  public ngOnInit() {
    this.formGroup = this.formBuilder.group({
      cardNumber: this.cardNumberControl,
      cardType: this.cardTypeControl,
      cardholdersName: this.cardholdersNameControl,
      expiryDate: null,
      expiryDateMonth: this.expiryDateMonthControl,
      expiryDateYear: this.expiryDateYearControl,
      securityCode: this.securityCodeControl,
    });

    this.form.addControl(this.name, this.formGroup);

    this.setValidators();

    this.cardTypeService.getAll()
      .subscribe((r) => this.cardTypes = r);
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
        this.formGroup.disable();
      } else {
        this.formGroup.enable();
      }
    }
  }

  public ngOnDestroy() {
    this.form.removeControl(this.name);
  }

  public selectCardType(value: string) {
    this.selectedCardType = this.cardTypes.find((ct) => ct.code === value);

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
