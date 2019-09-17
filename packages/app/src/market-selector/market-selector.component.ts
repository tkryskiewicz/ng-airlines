import { Component, OnInit } from "@angular/core";

import { Language, LanguageService, Market, MarketService } from "@ng-airlines/shared";

@Component({
  selector: "market-selector",
  templateUrl: "market-selector.component.html",
})
export class MarketSelectorComponent implements OnInit {
  public languages: Language[] = [];
  public markets: Market[] = [];

  public selectedMarket?: Market;

  constructor(
    private readonly languageService: LanguageService,
    private readonly marketService: MarketService,
  ) {
  }

  public ngOnInit() {
    this.languageService.getAll().subscribe((r) => this.languages = r);

    this.marketService.getAll().subscribe((r) => this.markets = r);
    this.marketService.selectedMarket.subscribe((r) => this.selectedMarket = r);
  }

  public getLanguage(code: string) {
    return this.languages.find((l) => l.code === code);
  }

  public selectMarket(market: Market) {
    this.marketService.selectMarket(market.code);
  }
}
