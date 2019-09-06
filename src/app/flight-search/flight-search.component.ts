import { Component } from '@angular/core';
import { FlightFare } from '../entities/flight-fare';
import { FlightFareService } from './flight-fare.service';
import {AirportDetail} from "../entities/airport-detail";

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
})
export class FlightSearchComponent {

  from: string;
  to: string;
  filterToggleFrom: boolean;
  filterToggleTo: boolean;

  constructor(private flightService: FlightFareService) {
    console.debug('Flight fare search constructor called!');
    this.retrieveAirports();
  }

  get flightFare(): FlightFare {
    return this.flightService.flightFare;
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
