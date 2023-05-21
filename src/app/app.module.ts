import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { HeaderTopComponent } from './header-top/header-top.component';
import { HeaderSectionComponent } from './header-section/header-section.component';
import { BannerSectionComponent } from './banner-section/banner-section.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    HeaderTopComponent,
    HeaderSectionComponent,
    BannerSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
