import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import * as Moment from "moment";

import { Airport } from "../airport.model";
import { AirportService } from "../airport.service";

@Component({
  selector: "flight-search-form",
  templateUrl: "flight-search-form.component.html",
})
export class FlightSearchFormComponent implements OnInit {
  public origins: Airport[] = [];
  public destinations: Airport[] = [];

  public originControl = new FormControl();
  public destinationControl = new FormControl();
  public departureDateControl = new FormControl();
  public form: FormGroup = new FormGroup({
    departureDate: this.departureDateControl,
    destination: this.destinationControl,
    origin: this.originControl,
  });

  public minDepartureDate = Moment();
  public maxDepartureDate = Moment().add(1, "y");

  constructor(private airportService: AirportService) {
  }

  public ngOnInit() {
    this.airportService.getAll()
      .subscribe((r) => this.origins = r);
  }

  public selectOrigin(value: string) {
    const origin = this.origins.find((a) => a.code === value);

    if (!origin) {
      return;
    }

    this.destinations = this.origins.filter((a) => origin.routes.includes(a.code));

    if (!this.destinations.find((a) => a.code === this.destinationControl.value)) {
      this.destinationControl.setValue(null);
    }
  }

  public handleSubmit() {
    this.form.markAllAsTouched();

    if (!this.form.valid) {
      return;
    }

    // tslint:disable-next-line: no-console
    console.log("Search flights");
  }
}
