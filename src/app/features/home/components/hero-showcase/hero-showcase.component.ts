import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroStat, ShowcaseSlide } from '../../../../core/models/content.models';
import { ShowcaseCarouselComponent } from '../showcase-carousel/showcase-carousel.component';
import { ShowcaseMarqueeComponent } from '../showcase-marquee/showcase-marquee.component';

@Component({
  selector: 'app-hero-showcase',
  standalone: true,
  imports: [CommonModule, ShowcaseCarouselComponent, ShowcaseMarqueeComponent],
  templateUrl: './hero-showcase.component.html',
})
export class HeroShowcaseComponent {
  @Input({ required: true }) slides: ShowcaseSlide[] = [];
  @Input({ required: true }) marqueeItems: string[] = [];
  @Input({ required: true }) stats: HeroStat[] = [];
}
