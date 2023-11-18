import { NgModule } from '@angular/core';
import { AppSharedModule } from 'src/app/shared/app-shared.module';
import { NewsPageComponent } from './news.component';
import { AsideComponent } from 'src/app/components/aside/aside.component';
import { AsideComponentModule } from 'src/app/components/aside/aside.component.module';

@NgModule({
    declarations: [NewsPageComponent],
    exports: [NewsPageComponent],
    imports: [AppSharedModule, AsideComponentModule],
})
export class NewsPageComponentModule {}
