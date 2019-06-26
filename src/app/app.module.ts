import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LoginComponent } from './screens/login/login.component';
import { HomeComponent } from './screens/home/home.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { LogoComponent } from './components/logo/logo.component';
import { HelpComponent } from './screens/help/help.component';
import { SettingsComponent } from './screens/settings/settings.component';
import { ShareSparkComponent } from './screens/share-spark/share-spark.component';
import { ShareSparkConfirmationComponent } from './screens/share-spark-confirmation/share-spark-confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ToolbarComponent,
    DashboardComponent,
    LogoComponent,
    HelpComponent,
    SettingsComponent,
    ShareSparkComponent,
    ShareSparkConfirmationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
