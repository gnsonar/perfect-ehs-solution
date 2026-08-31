import { Component, HostListener, Input, signal } from '@angular/core';
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
  readonly selectedTraining = signal<TrainingSession | null>(null);

  setTab(tab: TrainingTab): void {
    this.activeTab.set(tab);
  }

  showDetails(training: TrainingSession): void {
    this.selectedTraining.set(training);
  }

  closeDetails(): void {
    this.selectedTraining.set(null);
  }

  scrollCards(viewport: HTMLElement, direction: number): void {
    viewport.scrollBy({ left: direction * viewport.clientWidth, behavior: 'smooth' });
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeDetails();
  }
}
