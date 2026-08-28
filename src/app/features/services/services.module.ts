import { NgModule } from '@angular/core';
import { ServicesSectionComponent } from './components/services-section/services-section.component';
import { ServiceCardComponent } from './components/service-card/service-card.component';

@NgModule({
  imports: [ServicesSectionComponent, ServiceCardComponent],
  exports: [ServicesSectionComponent],
})
export class ServicesModule {}
