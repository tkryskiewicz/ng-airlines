import { NgModule } from "@angular/core";
import { MatTabsModule } from "@angular/material";

import { LogInFormModule, SignUpFormModule } from "@ng-airlines/authentication";

import { AuthenticationPanelComponent } from "./authentication-panel.component";

@NgModule({
  declarations: [
    AuthenticationPanelComponent,
  ],
  exports: [
    AuthenticationPanelComponent,
  ],
  imports: [
    MatTabsModule,
    LogInFormModule,
    SignUpFormModule,
  ],
})
export class AuthenticationPanelModule { }
