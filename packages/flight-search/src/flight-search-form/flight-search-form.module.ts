import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import {
  MatButtonModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
} from "@angular/material";
import { MatMomentDateModule } from "@angular/material-moment-adapter";

import { FlightSearchFormComponent } from "./flight-search-form.component";

@NgModule({
  declarations: [
    FlightSearchFormComponent,
  ],
  exports: [
    FlightSearchFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatMomentDateModule,
    MatSelectModule,
  ],
})
export class FlightSearchFormModule { }
