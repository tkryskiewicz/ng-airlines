import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { Router } from "@angular/router";

@Component({
  selector: "authentication-dialog",
  styleUrls: [
    "authentication-dialog.component.scss",
  ],
  templateUrl: "authentication-dialog.component.html",
})
export class AuthenticationDialogComponent {
  constructor(
    private router: Router,
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

  public async handleResetPassword() {
    await this.router.navigate(["/forgot-password"]);

    this.dialogRef.close();
  }

  public handleDismiss() {
    this.dialogRef.close();
  }
}
