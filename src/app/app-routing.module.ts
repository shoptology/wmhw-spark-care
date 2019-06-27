import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './screens/login/login.component';
import { HomeComponent } from './screens/home/home.component';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { HelpComponent } from './screens/help/help.component';
import { SettingsComponent } from './screens/settings/settings.component';
import { ShareSparkComponent } from './screens/share-spark/share-spark.component';
import { SparkConfirmationComponent } from './screens/spark-confirmation/spark-confirmation.component';

const routes: Routes = [

  // Default to home
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  // Main Screens
  { path: 'login', component: LoginComponent, data: { state: 'login' } },
  { path: 'home', component: HomeComponent, data: { state: 'home' } },
  { path: 'dashboard', component: DashboardComponent, data: { state: 'dashboard' } },
  { path: 'share-spark', component: ShareSparkComponent, data: { state: 'share-spark' } },
  { path: 'spark-confirmation', component: SparkConfirmationComponent, data: { state: 'spark-confirmation' } },

  // Utility Screens
  { path: 'help', component: HelpComponent, data: { state: 'help' } },
  { path: 'settings', component: SettingsComponent, data: { state: 'settings' } },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{useHash:true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
