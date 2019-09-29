import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import {Flight} from "../models/flight";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable()
export class FlightMealService {

  constructor(private http: Http) {
  }

  /**
   * Get all flights from the database
   */
  allFlights(): Observable<any> {
    let headers = new Headers();
    headers.set('Accept', 'application/json');

    let url = `${environment.api}/flight/`;

    return this
      .http
      .get(url, {headers})
      .map(resp => resp.json());
  }

  /**
   * Add a flight inside the database
   *
   * @param flight The flight which consists of flight number and flight departure date
   */
  addFlight(flight: Flight) {
    let headers = new Headers();
    headers.set('Accept', 'application/json');

    let url = `${environment.api}/flight/`;

    return this
      .http
      .post(url, flight, {headers})
      .map(resp => resp.json());
  }

  /**
   * Save the meals inside the database
   *
   * @param flightNumber The flight number
   * @param flightDepartureDate Date of the departure
   * @param meals Array of meals
   */
  addMeal(flightNumber: string, flightDepartureDate: Date, meals: Object) {
    let headers = new Headers();
    headers.set('Accept', 'application/json');

    let url = `${environment.api}/flight/${flightNumber}/${flightDepartureDate}/meals`;

    return this
      .http
      .post(url, meals, {headers})
      .map(resp => resp.json());
  }

  /**
   * Delete a flight from the database
   *
   * @param flightNumber The flight number
   * @param flightDepartureDate Date of the departure
   */

  deleteFlight(flightNumber: string, flightDepartureDate: Date) {
    let headers = new Headers();
    headers.set('Accept', 'application/json');

    let url = `${environment.api}/flight/${flightNumber}/${flightDepartureDate}/`;

    return this
      .http
      .delete(url, {headers})
      .map(resp => resp.json());
  }
}
