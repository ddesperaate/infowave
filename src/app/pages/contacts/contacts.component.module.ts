import { NgModule } from '@angular/core';
import { AppSharedModule } from 'src/app/shared/app-shared.module';
import { AboutUsComponent } from './about-us.component';

@NgModule({
    declarations: [AboutUsComponent],
    exports: [AboutUsComponent],
    imports: [AppSharedModule],
})
export class ContactsComponentModule {}
