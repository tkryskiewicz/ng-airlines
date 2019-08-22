import { NgModule } from "@angular/core";
import { MatButtonModule, MatDialogModule, MatDividerModule } from "@angular/material";

import { AuthenticationPanelModule } from "../authentication-panel";
import { AuthenticationDialogComponent } from "./authentication-dialog.component";

@NgModule({
  declarations: [
    AuthenticationDialogComponent,
  ],
  exports: [
    AuthenticationDialogComponent,
  ],
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatDividerModule,
    AuthenticationPanelModule,
  ],
})
export class AuthenticationDialogModule { }
