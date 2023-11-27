import { NgModule } from '@angular/core';
import { AppSharedModule } from 'src/app/shared/app-shared.module';
import { NewsDetailsComponent } from './news-details.component';
// import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [NewsDetailsComponent],
  exports: [NewsDetailsComponent],
  imports: [AppSharedModule],
})
export class NewsDetailsComponentModule {}
