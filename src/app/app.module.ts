import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from "@angular/router";
import { APP_ROUTES } from "app/app.routes";
import { FlightManagerComponent } from './flight-manager/components/flight-manager/flight-manager.component';
import { FlightMealService } from './flight-manager/services/flight-meal.service';
import { FlightCardComponent } from './flight-manager/components/flight-card/flight-card.component';
import { ErrorCardComponent } from './flight-manager/components/error-card/error-card.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [
    AppComponent,
    AboutComponent,
    FlightManagerComponent,
    FlightCardComponent,
    ErrorCardComponent
  ],
  providers: [
    FlightMealService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
