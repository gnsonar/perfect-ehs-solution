import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramHighlight, StatItem } from '../../../../core/models/content.models';
import { SectionHeadComponent } from '../../../../shared/components/section-head/section-head.component';

@Component({
  selector: 'app-summary-section',
  standalone: true,
  imports: [CommonModule, SectionHeadComponent],
  templateUrl: './summary-section.component.html',
})
export class SummarySectionComponent {
  @Input({ required: true }) summary: StatItem[] = [];
  @Input({ required: true }) programs: ProgramHighlight[] = [];
}
