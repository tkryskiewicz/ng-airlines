import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes } from "@angular/router";

import { AuthenticationToolbarModule } from "../authentication-toolbar";
import { ForgotPasswordPageComponent, ForgotPasswordPageModule } from "../forgot-password-page";
import { HomePageComponent, HomePageModule } from "../home-page";
import { NotFoundPageComponent, NotFoundPageModule } from "../not-found-page";
import { PaymentPageComponent, PaymentPageModule } from "../payment-page";
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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    RouterModule.forRoot(routes),
    NotFoundPageModule,
    HomePageModule,
    PaymentPageModule,
    AuthenticationToolbarModule,
    ForgotPasswordPageModule,
  ],
})
export class AppModule { }
