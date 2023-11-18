import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { AppSharedModule } from 'src/app/shared/app-shared.module';

@NgModule({
    declarations: [HeaderComponent],
    exports: [HeaderComponent],
    imports: [AppSharedModule],
})
export class HeaderComponentModule {}
