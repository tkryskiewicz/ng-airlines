import { Injectable } from "@angular/core";
import { of } from "rxjs";

import { Country } from "./Country";

@Injectable({
  providedIn: "root",
})
export class CountryService {
  private data: Country[] = [
    {
      callingCode: "48",
      code: "PL",
      name: "Poland",
    },
  ];

  public getAll() {
    return of(this.data);
  }
}
