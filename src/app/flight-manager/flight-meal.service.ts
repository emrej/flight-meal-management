import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import {Flight} from "../entities/flight";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable()
export class FlightMealService {

  constructor(private http: Http) {
  }

  allFlights(): Observable<any> {
    let headers = new Headers();
    headers.set('Accept', 'application/json');

    let url = `${environment.api}/flight/`;

    return this
      .http
      .get(url, {headers})
      .map(resp => resp.json());
  }

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
