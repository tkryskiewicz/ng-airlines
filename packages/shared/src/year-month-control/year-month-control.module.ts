import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatSelectModule } from "@angular/material";

import { YearMonthControlComponent } from "./year-month-control.component";

@NgModule({
  declarations: [
    YearMonthControlComponent,
  ],
  exports: [
    YearMonthControlComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSelectModule,
  ],
})
export class YearMonthControlModule { }
