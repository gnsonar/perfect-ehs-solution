import { Component, HostListener, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingAction, TrainingSession } from '../../../../core/models/content.models';
import { SectionHeadComponent } from '../../../../shared/components/section-head/section-head.component';

@Component({
  selector: 'app-training-highlights',
  standalone: true,
  imports: [CommonModule, SectionHeadComponent],
  templateUrl: './training-highlights.component.html',
})
export class TrainingHighlightsComponent {
  @Input({ required: true }) sessions: TrainingAction[] = [];

  readonly selectedIndex = signal<number | null>(null);

  selectCard(index: number): void {
    this.selectedIndex.set(index);
  }

  closeModal(): void {
    this.selectedIndex.set(null);
  }

  goTo(index: number): void {
    const filteredSessions = this.sessions.filter(s => s.image);
    if (!filteredSessions.length) return;
    this.selectedIndex.set((index + filteredSessions.length) % filteredSessions.length);
  }

  next(): void {
    const current = this.selectedIndex();
    if (current !== null) {
      this.goTo(current + 1);
    }
  }

  prev(): void {
    const current = this.selectedIndex();
    if (current !== null) {
      this.goTo(current - 1);
    }
  }

  getVisibleSessions(): TrainingSession[] {
    return this.sessions.filter(s => s.image);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeModal();
  }

  @HostListener('document:keydown.arrowright')
  onArrowRight(): void {
    if (this.selectedIndex() !== null) this.next();
  }

  @HostListener('document:keydown.arrowleft')
  onArrowLeft(): void {
    if (this.selectedIndex() !== null) this.prev();
  }
}