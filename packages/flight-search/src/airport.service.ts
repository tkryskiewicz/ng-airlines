import { Injectable } from "@angular/core";
import { of } from "rxjs";

import { Airport } from "./airport.model";
import * as airports from "./airports.json";

@Injectable({
  providedIn: "root",
})
export class AirportService {
  private data: Airport[] = airports.data as Airport[];

  public getAll() {
    return of(this.data);
  }
}
