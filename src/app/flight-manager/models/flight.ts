import {Meal} from "./meal";

export interface Flight {
  flightNumber: string;
  flightDepartureDate: Date;
  meals: Array<Meal>;
}
