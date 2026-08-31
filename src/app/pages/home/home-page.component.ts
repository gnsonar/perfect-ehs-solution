import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ContentService } from '../../core/services/content.service';
import { MOCK_CONTENT } from '../../core/data/mock-content.data';
import { HeroShowcaseComponent } from '../../features/home/components/hero-showcase/hero-showcase.component';
import { ServicesSectionComponent } from '../../features/services/components/services-section/services-section.component';
import { TrainingsSectionComponent } from '../../features/trainings/components/trainings-section/trainings-section.component';
import { TrainingHighlightsComponent } from '../../features/trainings/components/training-highlights/training-highlights.component';
import { SummarySectionComponent } from '../../features/summary/components/summary-section/summary-section.component';
import { ClientsSectionComponent } from '../../features/clients/components/clients-section/clients-section.component';
import { ContactSectionComponent } from '../../features/contact/components/contact-section/contact-section.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    AsyncPipe,
    HeroShowcaseComponent,
    ServicesSectionComponent,
    TrainingsSectionComponent,
    TrainingHighlightsComponent,
    SummarySectionComponent,
    ClientsSectionComponent,
    ContactSectionComponent,
  ],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  private readonly contentService = inject(ContentService);

  readonly content$ = this.contentService.getSiteContent();
  readonly fallback = MOCK_CONTENT;
}
