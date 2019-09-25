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

  flightNumber: string;
  flightDepartureDate: Date;

  constructor(private flightService: FlightMealService) {
    this.retrieveFlights();
  }

  get flight(): FlightFare {
    return this.flightService.flight;
  }

  get errorMessage(): ErrorMessage {
    return this.flightService.errorMessage;
  }

  addFlight(): void {
    this.flightService.addFlight(this.flightNumber, this.flightDepartureDate);
  }

  retrieveFlights(): void {
    this.flightService.reset();
    this.flightService.allFlights();
  }

  get flights(): Array<AirportDetail> {
    return this.flightService.flights;
  }
}
