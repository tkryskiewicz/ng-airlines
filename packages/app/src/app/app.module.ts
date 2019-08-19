import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule, MatTabsModule } from "@angular/material";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes } from "@angular/router";

import { AuthenticationModule } from "@ng-airlines/authentication";
import { PaymentModule } from "@ng-airlines/payment";
import { SharedModule } from "@ng-airlines/shared";

import { AuthenticationPanelComponent } from "../authentication-panel";
import { ForgotPasswordPageComponent } from "../forgot-password-page";
import { HomePageComponent } from "../home-page";
import { NotFoundPageComponent } from "../not-found-page";
import { PaymentPageComponent } from "../payment-page";
import { AppComponent } from "./app.component";

const routes: Routes = [
  {
    component: HomePageComponent,
    path: "",
    pathMatch: "full",
  },
  {
    component: ForgotPasswordPageComponent,
    path: "forgot-password",
  },
  {
    component: PaymentPageComponent,
    path: "payment",
  },
  {
    component: NotFoundPageComponent,
    path: "**",
  },
];

@NgModule({
  bootstrap: [
    AppComponent,
  ],
  declarations: [
    AppComponent,
    HomePageComponent,
    NotFoundPageComponent,
    AuthenticationPanelComponent,
    ForgotPasswordPageComponent,
    PaymentPageComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTabsModule,
    SharedModule,
    AuthenticationModule,
    PaymentModule,
    RouterModule.forRoot(routes),
  ],
})
export class AppModule { }
