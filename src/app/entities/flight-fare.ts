import {AirportDetail} from "./airport-detail";

export interface FlightFare {
  amount: number; // int+double
  currency: string;
  originDetail: AirportDetail;
  destinationDetail: AirportDetail;
}
