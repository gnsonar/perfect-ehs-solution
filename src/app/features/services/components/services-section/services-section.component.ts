import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceItem } from '../../../../core/models/content.models';
import { SectionHeadComponent } from '../../../../shared/components/section-head/section-head.component';
import { ServiceCardComponent } from '../service-card/service-card.component';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [CommonModule, SectionHeadComponent, ServiceCardComponent],
  templateUrl: './services-section.component.html',
})
export class ServicesSectionComponent {
  @Input({ required: true }) services: ServiceItem[] = [];
}
