import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-head',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-head.component.html',
})
export class SectionHeadComponent {
  @Input({ required: true }) eyebrow!: string;
  @Input({ required: true }) title!: string;
  @Input({ required: true }) description!: string;
  @Input() extraClass = '';
}
