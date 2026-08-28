import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './services/api.service';
import { ContentService } from './services/content.service';

@NgModule({
  imports: [CommonModule],
  providers: [ApiService, ContentService],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule | null) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it only in AppModule/App config.');
    }
  }
}
