import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule, MatDividerModule, MatMenuModule } from "@angular/material";

import { AuthenticationDialogComponent, AuthenticationDialogModule } from "../authentication-dialog";
import { AuthenticationToolbarComponent } from "./authentication-toolbar.component";

@NgModule({
  declarations: [
    AuthenticationToolbarComponent,
  ],
  entryComponents: [
    AuthenticationDialogComponent,
  ],
  exports: [
    AuthenticationToolbarComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
    AuthenticationDialogModule,
  ],
})
export class AuthenticationToolbarModule { }
