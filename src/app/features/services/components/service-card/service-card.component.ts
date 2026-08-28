import { Component, Input } from '@angular/core';
import { ServiceItem } from '../../../../core/models/content.models';

@Component({
  selector: 'app-service-card',
  standalone: true,
  templateUrl: './service-card.component.html',
})
export class ServiceCardComponent {
  @Input({ required: true }) service!: ServiceItem;
}
