import { APP_INITIALIZER, NgModule } from '@angular/core';
import { LOCALE_ID} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { AppSharedModule } from './shared/app-shared.module';
import { HeaderComponentModule } from './components/header/header.component.module';
import { FooterComponentModule } from './components/footer/footer.component.module';
import { NewsPageComponentModule } from './pages/news/news.component.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'; 
// import { AsideComponentModule } from './components/aside/aside.component.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppSharedModule,
    HeaderComponentModule,
    FooterComponentModule,
    NewsPageComponentModule,
    HttpClientModule,
    
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/infowave/' },
    // {provide: LOCALE_ID, useValue: 'us'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
