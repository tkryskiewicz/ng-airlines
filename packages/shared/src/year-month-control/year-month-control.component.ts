import { Component, forwardRef } from "@angular/core";
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR } from "@angular/forms";
import * as Moment from "moment";
import { extendMoment } from "moment-range";

const moment = extendMoment(Moment);

interface FormModel {
  year: number | null;
  month: number | null;
}

@Component({
  providers: [
    {
      multi: true,
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => YearMonthControlComponent),
    },
  ],
  selector: "year-month-control",
  styleUrls: [
    "year-month-control.component.scss",
  ],
  templateUrl: "year-month-control.component.html",
})
export class YearMonthControlComponent implements ControlValueAccessor {
  public formGroup = new FormGroup({
    month: new FormControl(),
    year: new FormControl(),
  });

  public value: FormModel = {
    month: null,
    year: null,
  };

  public onChange: (value: Date | null) => void = () => undefined;
  public onTouched: ControlValueAccessor["registerOnTouched"] = () => undefined;

  public writeValue(obj: Date | null) {
    this.value = obj ?
      {
        month: obj.getFullYear(),
        year: obj.getMonth(),
      } :
      {
        month: null,
        year: null,
      };
  }

  public registerOnChange(fn: ControlValueAccessor["registerOnChange"]) {
    this.onChange = fn;
  }

  public registerOnTouched(fn: ControlValueAccessor["registerOnTouched"]) {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean) {
    if (isDisabled) {
      this.formGroup.disable();
    } else {
      this.formGroup.enable();
    }
  }

  public getYears() {
    return Array.from(moment.rangeFromInterval("y", 2).by("y"))
      .map((d) => d.year());
  }

  public selectYear(value: number | null) {
    this.value = {
      ...this.value,
      year: value,
    };

    this.onChange(this.getValue());
  }

  public getMonths() {
    const { year } = this.formGroup.value;

    const startDate = year === moment().year() ?
      moment().startOf("M") :
      moment({ year });

    const endDate = year === moment().add(2, "y").year() ?
      moment().add(2, "y") :
      moment({ year }).endOf("y");

    return Array.from(moment.range(startDate, endDate).by("M"))
      .map((d) => d.month() + 1);
  }

  public selectMonth(value: number | null) {
    this.value = {
      ...this.value,
      month: value,
    };

    this.onChange(this.getValue());
  }

  private getValue() {
    const { year, month } = this.value;

    return year && month ?
      new Date(year, month, 1) :
      null;
  }
}
