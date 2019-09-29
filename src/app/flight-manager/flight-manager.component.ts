import {Component, OnInit} from '@angular/core';
import {FlightMealService} from './flight-meal.service';
import {Flight} from "../entities/flight";
import {ErrorMessage} from "../entities/error-message";
import {Meal} from "../entities/meal";

@Component({
  selector: 'flight-manager',
  templateUrl: './flight-manager.component.html',
})
export class FlightManagerComponent implements OnInit {

  flights: Array<Flight>;
  errorMessage: ErrorMessage;
  flightNumber: string;
  flightDepartureDate: Date;
  economyMeal: Meal;
  businessMeal: Meal;
  economyNumberOfMealsValidated: boolean = true;
  businessNumberOfMealsValidated: boolean = true;

  constructor(private flightService: FlightMealService) {
  }

  ngOnInit() {
    this.retrieveFlights();
    this.resetMeals();
  }

  resetMeals() : void {
    this.economyMeal = {breakfast: 0, dinner: 0, lightSnack: 0, lunch: 0, mealClass: "economyClass"};
    this.businessMeal = {breakfast: 0, dinner: 0, lightSnack: 0, lunch: 0, mealClass: "businessClass"};
  }

  addFlight(): void {
    const flight: Flight = {
      flightNumber: this.flightNumber,
      flightDepartureDate: this.flightDepartureDate,
      meals: undefined
    };
    this.errorMessage = undefined;

    this.flightService.addFlight(flight)
      .subscribe(
      response => {
        this.retrieveFlights();
      },
      err => {
        this.errorMessage = err;
        this.errorMessage.title = 'Add flight service call failed!';
      }
    );
  }

  retrieveFlights(): void {
    this.flights = [];
    this.errorMessage = undefined;
    this.flightService.allFlights()
      .subscribe(
        flights => {
          this.flights = flights;
        },
        err => {
          this.errorMessage = err;
          this.errorMessage.title = 'Get all flights service call failed!';
        }
      );;
  }

  addMeal(): void {
    this.errorMessage = undefined;
    this.flightService.addMeal(this.flightNumber, this.flightDepartureDate, {
      meals:
        [this.economyMeal, this.businessMeal]
    }).subscribe(
        response => {
          this.retrieveFlights();
        },
        err => {
          this.errorMessage = err;
          this.errorMessage.title = 'Add meal service call failed!';
        }
      );
  }

  deleteFlight() {
    this.errorMessage = undefined;
    this.flightService.deleteFlight(this.flightNumber, this.flightDepartureDate)
      .subscribe(
        response => {
          this.retrieveFlights();
        },
        err => {
          this.errorMessage = err;
          this.errorMessage.title = 'Delete flight service call failed!';
        }
      );;
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

  fillInFlightInfo(flight: Flight) {
    this.flightNumber = flight.flightNumber;
    this.flightDepartureDate = flight.flightDepartureDate;
    this.retrieveFlights();
    this.resetMeals();
  }

}
