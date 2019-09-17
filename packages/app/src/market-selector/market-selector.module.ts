import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule, MatMenuModule } from "@angular/material";

import { MarketSelectorComponent } from "./market-selector.component";

@NgModule({
  declarations: [
    MarketSelectorComponent,
  ],
  exports: [
    MarketSelectorComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
  ],
})
export class MarketSelectorModule { }
