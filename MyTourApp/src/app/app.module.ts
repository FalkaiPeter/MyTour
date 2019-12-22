import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavMainComponent } from './components/nav/nav-main/nav-main.component';
import { HomeComponent } from './pages/home/home.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DiscoverComponent } from './pages/discover/discover.component';
import { PlanningComponent } from './pages/planning/planning.component';
import { MaterialModule } from './modules/material.module';

@NgModule({
  declarations: [
    AppComponent,
    NavMainComponent,
    HomeComponent,
    WelcomeComponent,
    ProfileComponent,
    DiscoverComponent,
    PlanningComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
