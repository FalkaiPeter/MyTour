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
import { FormsModule } from '@angular/forms';
import { AngularFireModule} from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth'
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MapComponent } from './components/map/map.component';
import { AgmCoreModule } from '@agm/core';
import { ProfileInfoCardComponent } from './components/profile-info-card/profile-info-card.component';
import { ShellComponent } from './components/shell/shell.component';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    NavMainComponent,
    HomeComponent,
    WelcomeComponent,
    ProfileComponent,
    DiscoverComponent,
    PlanningComponent,
    RegisterFormComponent,
    MapComponent,
    ProfileInfoCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AgmCoreModule.forRoot({ apiKey: environment.firebaseConfig.apiKey }),
    AngularFireAuthModule,
    AngularFirestoreModule,
    MaterialModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
