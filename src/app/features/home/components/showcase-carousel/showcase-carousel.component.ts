import { Component, DestroyRef, Input, OnChanges, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowcaseSlide } from '../../../../core/models/content.models';

@Component({
  selector: 'app-showcase-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './showcase-carousel.component.html',
})
export class ShowcaseCarouselComponent implements OnChanges {
  private readonly destroyRef = inject(DestroyRef);
  private timer: ReturnType<typeof setInterval> | null = null;

  @Input({ required: true }) slides: ShowcaseSlide[] = [];

  readonly current = signal(0);
  readonly paused = signal(false);

  ngOnChanges(): void {
    this.current.set(0);
    this.startAutoplay();
  }

  constructor() {
    this.destroyRef.onDestroy(() => this.stopAutoplay());
  }

  goTo(index: number): void {
    if (!this.slides.length) {
      return;
    }
    this.current.set((index + this.slides.length) % this.slides.length);
  }

  next(): void {
    this.goTo(this.current() + 1);
  }

  prev(): void {
    this.goTo(this.current() - 1);
  }

  pause(): void {
    this.paused.set(true);
    this.stopAutoplay();
  }

  resume(): void {
    this.paused.set(false);
    this.startAutoplay();
  }

  restartAutoplay(): void {
    this.startAutoplay();
  }

  private startAutoplay(): void {
    this.stopAutoplay();
    if (this.slides.length <= 1) {
      return;
    }
    this.timer = setInterval(() => this.next(), 5000);
  }

  private stopAutoplay(): void {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }
}
