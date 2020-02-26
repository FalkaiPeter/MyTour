import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { DiscoverComponent } from './pages/discover/discover.component';
import { PlanningComponent } from './pages/planning/planning.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ShellComponent } from './components/shell/shell.component';
import { ProfileResolver } from './resolvers/profile/profile-resolver.service';


const routes: Routes = [
  {path: '', component: ShellComponent, canActivate: [AuthenticationGuard],
    children: [
      {path: 'discover', component: DiscoverComponent},
      {path: 'planning', component: PlanningComponent},
      {path: 'profile/:id', component: ProfileComponent, resolve: { userData: ProfileResolver}},
      {path: '', component: HomeComponent},
    ],
  },
  {path: 'welcome', component: WelcomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
