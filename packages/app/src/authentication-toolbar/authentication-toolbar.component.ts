import { Component } from "@angular/core";
import { MatDialog } from "@angular/material";

import { AuthenticationDialogComponent } from "../authentication-dialog";
import { AuthenticationPanelTab } from "../authentication-panel";

@Component({
  selector: "authentication-toolbar",
  templateUrl: "authentication-toolbar.component.html",
})
export class AuthenticationToolbarComponent {
  constructor(public dialog: MatDialog) {
  }

  public handleSignUpClick() {
    this.dialog.open(AuthenticationDialogComponent, { data: AuthenticationPanelTab.SignUp });
  }

  public handleLogInClick() {
    this.dialog.open(AuthenticationDialogComponent, { data: AuthenticationPanelTab.LogIn });
  }
}
