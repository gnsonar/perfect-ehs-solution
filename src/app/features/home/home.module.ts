import { NgModule } from '@angular/core';
import { HeroShowcaseComponent } from './components/hero-showcase/hero-showcase.component';
import { ShowcaseCarouselComponent } from './components/showcase-carousel/showcase-carousel.component';
import { ShowcaseMarqueeComponent } from './components/showcase-marquee/showcase-marquee.component';

@NgModule({
  imports: [HeroShowcaseComponent, ShowcaseCarouselComponent, ShowcaseMarqueeComponent],
  exports: [HeroShowcaseComponent],
})
export class HomeModule {}
