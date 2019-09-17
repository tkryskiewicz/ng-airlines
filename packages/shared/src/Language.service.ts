import { Injectable } from "@angular/core";
import { of } from "rxjs";

import { Language } from "./Language";

@Injectable({
  providedIn: "root",
})
export class LanguageService {
  private data: Language[] = [
    {
      code: "en",
      name: "English",
    },
    {
      code: "pl",
      name: "Polish",
    },
  ];

  public getAll() {
    return of(this.data);
  }
}
