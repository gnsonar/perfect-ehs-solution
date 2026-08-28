import { NgModule } from '@angular/core';
import { TrainingsSectionComponent } from './components/trainings-section/trainings-section.component';
import { TrainingCardComponent } from './components/training-card/training-card.component';
import { ConductedCardComponent } from './components/conducted-card/conducted-card.component';

@NgModule({
  imports: [TrainingsSectionComponent, TrainingCardComponent, ConductedCardComponent],
  exports: [TrainingsSectionComponent],
})
export class TrainingsModule {}
