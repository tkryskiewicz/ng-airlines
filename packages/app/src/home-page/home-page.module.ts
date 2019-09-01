import { NgModule } from "@angular/core";

import { FlightSearchFormModule } from "@ng-airlines/flight-search";

import { HomePageComponent } from "./home-page.component";

@NgModule({
  declarations: [
    HomePageComponent,
  ],
  exports: [
    HomePageComponent,
  ],
  imports: [
    FlightSearchFormModule,
  ],
})
export class HomePageModule { }
