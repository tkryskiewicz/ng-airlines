import { Injectable } from "@angular/core";
import { BehaviorSubject, of } from "rxjs";

import { Market } from "./Market";
import * as markets from "./markets.json";

@Injectable({
  providedIn: "root",
})
export class MarketService {
  public readonly selectedMarket = new BehaviorSubject<Market | undefined>(undefined);

  private readonly data = markets.data as Market[];

  constructor() {
    // TODO: resolve dynamically (e.g. based on IP)
    const market = this.data.find((m) => m.code === "IE");

    this.selectedMarket.next(market);
  }

  public getAll() {
    return of(this.data);
  }

  public selectMarket(code: string) {
    const market = this.data.find((m) => m.code === code);

    this.selectedMarket.next(market);
  }
}
