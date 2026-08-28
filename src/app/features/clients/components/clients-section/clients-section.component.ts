import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientItem, TestimonialItem } from '../../../../core/models/content.models';
import { SectionHeadComponent } from '../../../../shared/components/section-head/section-head.component';

@Component({
  selector: 'app-clients-section',
  standalone: true,
  imports: [CommonModule, SectionHeadComponent],
  templateUrl: './clients-section.component.html',
})
export class ClientsSectionComponent {
  @Input({ required: true }) clients: ClientItem[] = [];
  @Input({ required: true }) testimonials: TestimonialItem[] = [];

  initials(name: string): string {
    return name
      .split(' ')
      .slice(0, 2)
      .map((word) => word[0])
      .join('');
  }

  stars(rating: number): string {
    return '★'.repeat(rating);
  }
}
