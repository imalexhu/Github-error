import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { LandingComponent } from './pages/landing/landing.component';
import { ContentComponent } from './pages/content/content.component';
import { NavComponent } from './pages/nav/nav.component';
@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    LandingComponent,
    ContentComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
