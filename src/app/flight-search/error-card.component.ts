import { Component, Input } from '@angular/core';
import { ErrorMessage } from '../entities/error-message';

@Component({
  selector: 'error-card',
  templateUrl: './error-card.component.html'
})

export class ErrorCardComponent {

  @Input() item: ErrorMessage;

}
