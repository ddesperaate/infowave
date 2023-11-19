import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { AppSharedModule } from './shared/app-shared.module';
import { HeaderComponentModule } from './components/header/header.component.module';
import { FooterComponentModule } from './components/footer/footer.component.module';
import { AsideComponent } from './components/aside/aside.component';
import { NewsPageComponentModule } from './pages/news/news.component.module';
import { HttpClientModule } from '@angular/common/http';
// import { AsideComponentModule } from './components/aside/aside.component.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppSharedModule,
    HeaderComponentModule,
    FooterComponentModule,
    NewsPageComponentModule,
    HttpClientModule,
    
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/infowave/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
