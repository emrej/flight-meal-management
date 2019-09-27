import {Component} from '@angular/core';
import {FlightMealService} from './flight-meal.service';
import {Flight} from "../entities/flight";
import {ErrorMessage} from "../entities/error-message";
import {Meal} from "../entities/meal";

@Component({
  selector: 'flight-manager',
  templateUrl: './flight-manager.component.html',
})
export class FlightManagerComponent {

  flightNumber: string;
  flightDepartureDate: Date;
  economyMeal: Meal;
  businessMeal: Meal;

  constructor(private flightService: FlightMealService) {
    this.retrieveFlights();
    this.economyMeal = {breakfast: 0, dinner: 0, lightSnack: 0, lunch: 0, mealClass: "economyClass"};
    this.businessMeal = {breakfast: 0, dinner: 0, lightSnack: 0, lunch: 0, mealClass: "businessClass"};
  }

  get flights(): Array<Flight> {
    return this.flightService.flights;
  }

  get errorMessage(): ErrorMessage {
    return this.flightService.errorMessage;
  }

  addFlight(): void {
    const flight: Flight = {
      flightNumber: this.flightNumber,
      flightDepartureDate: this.flightDepartureDate,
      meals: undefined
    };

    this.flightService.addFlight(flight);
  }

  retrieveFlights(): void {
    this.flightService.reset();
    this.flightService.allFlights();
  }

  addMeal(): void {

  }
}
