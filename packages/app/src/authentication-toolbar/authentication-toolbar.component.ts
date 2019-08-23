import { Component, OnDestroy, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";

import { AuthenticationService, User } from "@ng-airlines/authentication";

import { AuthenticationDialogComponent } from "../authentication-dialog";
import { AuthenticationPanelTab } from "../authentication-panel";

@Component({
  selector: "authentication-toolbar",
  templateUrl: "authentication-toolbar.component.html",
})
export class AuthenticationToolbarComponent implements OnInit, OnDestroy {
  public user?: User;

  constructor(
    private dialog: MatDialog,
    private authenticationService: AuthenticationService,
  ) {
  }

  public ngOnInit() {
    this.authenticationService.user.subscribe((user) => {
      this.user = user;
    });
  }

  public ngOnDestroy() {
    this.authenticationService.user.unsubscribe();
  }

  public handleSignUpClick() {
    this.dialog.open(AuthenticationDialogComponent, { data: AuthenticationPanelTab.SignUp });
  }

  public handleLogInClick() {
    this.dialog.open(AuthenticationDialogComponent, { data: AuthenticationPanelTab.LogIn });
  }

  public async handleLogOutClick() {
    await this.authenticationService.logOut();
  }
}
