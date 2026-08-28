import { Component, Input } from '@angular/core';
import { TrainingSession } from '../../../../core/models/content.models';

@Component({
  selector: 'app-training-card',
  standalone: true,
  templateUrl: './training-card.component.html',
})
export class TrainingCardComponent {
  @Input({ required: true }) training!: TrainingSession;
  @Input() actionLabel = 'Register interest';
}
