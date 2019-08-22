import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material";

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
    MatButtonModule,
    AuthenticationDialogModule,
  ],
})
export class AuthenticationToolbarModule { }
