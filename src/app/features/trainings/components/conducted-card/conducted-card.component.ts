import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TrainingSession } from '../../../../core/models/content.models';

@Component({
  selector: 'app-conducted-card',
  standalone: true,
  templateUrl: './conducted-card.component.html',
})
export class ConductedCardComponent {
  @Input({ required: true }) training!: TrainingSession;
  @Output() selected = new EventEmitter<TrainingSession>();
}
