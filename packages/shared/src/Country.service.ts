import { Injectable } from "@angular/core";
import { of } from "rxjs";

import * as countries from "./countries.json";
import { Country } from "./Country";

@Injectable({
  providedIn: "root",
})
export class CountryService {
  private data: Country[] = countries.data as Country[];

  public getAll() {
    return of(this.data);
  }
}
