import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { DiscoverComponent } from './pages/discover/discover.component';
import { PlanningComponent } from './pages/planning/planning.component';
import { ProfileComponent } from './pages/profile/profile.component';


const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'discover', component: DiscoverComponent, canActivate: [AuthenticationGuard]},
  {path: 'planning', component: PlanningComponent, canActivate: [AuthenticationGuard]},
  {path: ':id/profile', component: ProfileComponent, pathMatch: 'full', canActivate: [AuthenticationGuard]},
  {path: '', component: HomeComponent, canActivate: [AuthenticationGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
