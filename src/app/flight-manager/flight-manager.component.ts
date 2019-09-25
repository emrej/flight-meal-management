import { Component } from '@angular/core';
import { FlightFare } from '../entities/flight-fare';
import { FlightMealService } from './flight-meal.service';
import {AirportDetail} from "../entities/airport-detail";
import {ErrorMessage} from "../entities/error-message";

@Component({
  selector: 'flight-manager',
  templateUrl: './flight-manager.component.html',
})
export class FlightManagerComponent {

  from: string;
  to: string;
  filterToggleFrom: boolean;
  filterToggleTo: boolean;

  constructor(private flightService: FlightMealService) {
    this.retrieveAirports();
  }

  get flightFare(): FlightFare {
    return this.flightService.flightFare;
  }

  get errorMessage(): ErrorMessage {
    return this.flightService.errorMessage;
  }

  search(): void {
    this.flightService.findFare(this.from, this.to);
  }

  retrieveAirports(): void {
    this.flightService.reset();
    this.flightService.allAirports();
  }

  get airports(): Array<AirportDetail> {
    return this.flightService.airports;
  }

  fillTexBox(airport: AirportDetail, event: MouseEvent) {
    if (event.srcElement.id == 'fromItem') {
      this.filterToggleFrom = false;
      this.from = airport.code;
    } else if (event.srcElement.id == 'toItem') {
      this.filterToggleTo = false;
      this.to = airport.code;
    }
  }

  searchInputKeyUp(event: KeyboardEvent) {
    if (event.srcElement.id == 'from') {
      this.filterToggleFrom = true;
    } else if (event.srcElement.id == 'to') {
      this.filterToggleTo = true;
    }
  }
}
