import { NgModule } from "@angular/core";
import { MatTabsModule } from "@angular/material";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Routes, RouterModule } from "@angular/router";

import { AuthenticationModule } from "@ng-airlines/authentication";

import { AuthenticationPanel } from "../authentication-panel";
import { ForgotPasswordPageComponent } from "../forgot-password-page";
import { HomePageComponent } from "../home-page";
import { NotFoundPageComponent } from "../not-found-page";
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
    component: NotFoundPageComponent,
    path: "**",
  }
];

@NgModule({
  bootstrap: [
    AppComponent,
  ],
  declarations: [
    AppComponent,
    HomePageComponent,
    NotFoundPageComponent,
    AuthenticationPanel,
    ForgotPasswordPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    AuthenticationModule,
    RouterModule.forRoot(routes),
  ],
})
export class AppModule { }
