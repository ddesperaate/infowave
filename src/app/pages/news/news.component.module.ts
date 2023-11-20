import { NgModule } from '@angular/core';
import { AppSharedModule } from 'src/app/shared/app-shared.module';
import { NewsPageComponent } from './news.component';
import { AsideComponentModule } from 'src/app/components/aside/aside.component.module';
import { NewsDetailsComponentModule } from 'src/app/components/news-details/news-details.component.module';

@NgModule({
    declarations: [NewsPageComponent],
    exports: [NewsPageComponent],
    imports: [AppSharedModule, AsideComponentModule, NewsDetailsComponentModule],
})
export class NewsPageComponentModule {}
