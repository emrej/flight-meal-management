import { Component, Input } from '@angular/core';
import { FlightFare } from '../entities/flight-fare';

@Component({
  selector: 'flight-card',
  templateUrl: './flight-card.component.html'
})
export class FlightCardComponent {

  @Input() item: FlightFare;

}
