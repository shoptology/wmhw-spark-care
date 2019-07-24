import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './screens/login/login.component';
import { HomeComponent } from './screens/home/home.component';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { HelpComponent } from './screens/help/help.component';
import { SettingsComponent } from './screens/settings/settings.component';

import { CreateAccountComponent } from './screens/create-account/create-account.component';
import { ForgotPasswordComponent } from './screens/forgot-password/forgot-password.component';

import { ShareSparkComponent } from './screens/share-spark/share-spark.component';

const routes: Routes = [

  // Default to home
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  // Main Screens
  { path: 'login', component: LoginComponent, data: { state: 'login' } },

  { path: 'home', component: HomeComponent, data: { state: 'home' } },
  { path: 'dashboard', component: DashboardComponent, data: { state: 'dashboard' } },
  { path: 'share-spark', component: ShareSparkComponent, data: { state: 'share-spark' } },

  // Utility Screens
  { path: 'help', component: HelpComponent, data: { state: 'help' } },
  { path: 'settings', component: SettingsComponent, data: { state: 'settings' } },

  { path: 'create-account', component: CreateAccountComponent, data: { state: 'create-account' } },
  { path: 'forgot-password', component: ForgotPasswordComponent, data: { state: 'forgot-password' } },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{useHash:true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
