import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingSession } from '../../../../core/models/content.models';
import { SectionHeadComponent } from '../../../../shared/components/section-head/section-head.component';
import { TrainingCardComponent } from '../training-card/training-card.component';
import { ConductedCardComponent } from '../conducted-card/conducted-card.component';

type TrainingTab = 'upcoming' | 'conducted';

@Component({
  selector: 'app-trainings-section',
  standalone: true,
  imports: [CommonModule, SectionHeadComponent, TrainingCardComponent, ConductedCardComponent],
  templateUrl: './trainings-section.component.html',
})
export class TrainingsSectionComponent {
  @Input({ required: true }) upcoming: TrainingSession[] = [];
  @Input({ required: true }) conducted: TrainingSession[] = [];

  readonly activeTab = signal<TrainingTab>('upcoming');

  setTab(tab: TrainingTab): void {
    this.activeTab.set(tab);
  }
}
