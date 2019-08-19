import { Injectable } from "@angular/core";
import { of } from "rxjs";

import { HonorificTitle } from "./HonofiricTitle";

@Injectable({
  providedIn: "root",
})
export class HonorificTitleService {
  private data: HonorificTitle[] = [
    {
      code: "mr",
      name: "Mr",
    },
    {
      code: "mrs",
      name: "Mrs",
    },
    {
      code: "ms",
      name: "Ms",
    },
  ];

  public getAll() {
    return of(this.data);
  }
}
