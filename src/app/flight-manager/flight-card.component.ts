import {Component, Input} from '@angular/core';
import {Flight} from "../entities/flight";

@Component({
  selector: 'flight-card',
  templateUrl: './flight-card.component.html'
})
export class FlightCardComponent {

  @Input() item: Flight;

}
