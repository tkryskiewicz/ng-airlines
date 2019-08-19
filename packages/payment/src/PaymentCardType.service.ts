import { Injectable } from "@angular/core";
import { of } from "rxjs";

import { PaymentCardType } from "./PaymentCardType";

@Injectable({
  providedIn: "root",
})
export class PaymentCardTypeService {
  private data: PaymentCardType[] = [
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

  public getAll() {
    return of(this.data);
  }
}
