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
  economyNumberOfMealsValidated: boolean = true;
  businessNumberOfMealsValidated: boolean = true;

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
    this.flightService.addMeal(this.flightNumber, this.flightDepartureDate, {
      meals:
        [this.economyMeal, this.businessMeal]
    });
  }

  validateNumberOfMeal(meal: Meal) {
    const numberOfMealsValidated = (meal.breakfast >= 0 && meal.breakfast <= 1000) &&
      (meal.lightSnack >= 0 && meal.lightSnack <= 1000) &&
      (meal.lunch >= 0 && meal.lunch <= 1000) &&
      (meal.dinner >= 0 && meal.dinner <= 1000);

    if (meal.mealClass == 'economyClass') {
      this.economyNumberOfMealsValidated = numberOfMealsValidated;
    } else {
      this.businessNumberOfMealsValidated = numberOfMealsValidated;
    }
  }
}
