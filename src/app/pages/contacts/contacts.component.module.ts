import { NgModule } from '@angular/core';
import { AppSharedModule } from 'src/app/shared/app-shared.module';
import { ContactsComponent } from './contacts.component';

@NgModule({
    declarations: [ContactsComponent],
    exports: [ContactsComponent],
    imports: [AppSharedModule],
})
export class ContactsComponentModule {}
