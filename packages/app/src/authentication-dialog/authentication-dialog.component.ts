import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

@Component({
  selector: "authentication-dialog",
  styleUrls: [
    "authentication-dialog.component.scss",
  ],
  templateUrl: "authentication-dialog.component.html",
})
export class AuthenticationDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<AuthenticationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public selectedTab: string,
  ) {
  }

  public handleSignUp() {
    this.dialogRef.close();
  }

  public handleLogIn() {
    this.dialogRef.close();
  }

  public handleDismiss() {
    this.dialogRef.close();
  }
}
