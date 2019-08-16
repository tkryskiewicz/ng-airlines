import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

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
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
})
export class AppModule { }
