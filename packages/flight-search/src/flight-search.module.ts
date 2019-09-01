import { NgModule } from "@angular/core";

import { FlightSearchFormModule } from "./flight-search-form";

@NgModule({
  exports: [
    FlightSearchFormModule,
  ],
  imports: [
    FlightSearchFormModule,
  ],
})
export class FlightSearchModule { }
