import { NgModule } from '@angular/core';
import { AppSharedModule } from 'src/app/shared/app-shared.module';
import { FooterComponent } from './footer.component';

@NgModule({
    declarations: [FooterComponent],
    exports: [FooterComponent],
    imports: [AppSharedModule],
})
export class FooterComponentModule {}
