import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from "@angular/router";
import { APP_ROUTES } from "app/app.routes";
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightFareService } from './flight-search/flight-fare.service';
import { FlightCardComponent } from './flight-search/flight-card.component';
import { FilterPipe } from './flight-search/filter.pipe';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES),
    Ng4LoadingSpinnerModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    FlightSearchComponent,
    FlightCardComponent,
    FilterPipe
  ],
  providers: [
    FlightFareService
    // { provide: FlightService, useClass: FlightService }
    // FlightService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
