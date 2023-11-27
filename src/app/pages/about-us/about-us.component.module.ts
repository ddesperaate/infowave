import { NgModule } from '@angular/core';
import { AppSharedModule } from 'src/app/shared/app-shared.module';
import { AboutUsComponent } from './about-us.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AboutUsComponent],
  exports: [AboutUsComponent],
  imports: [AppSharedModule],
})
export class AboutUsComponentModule {}
