import { NgModule } from '@angular/core';
import { AppSharedModule } from 'src/app/shared/app-shared.module';
import { HomePageComponent } from './home.component';

@NgModule({
    declarations: [HomePageComponent],
    exports: [HomePageComponent],
    imports: [AppSharedModule],
})
export class HomePageComponentModule {}
