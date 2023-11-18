import { NgModule } from '@angular/core';
import { AppSharedModule } from 'src/app/shared/app-shared.module';
import { AsideComponent } from './aside.component';

@NgModule({
    declarations: [AsideComponent],
    exports: [AsideComponent],
    imports: [AppSharedModule],
})
export class AsideComponentModule {}
