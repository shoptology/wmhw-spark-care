
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

import { LoginComponent } from './screens/login/login.component';
import { HomeComponent } from './screens/home/home.component';
import { ToolbarComponent } from './_components/toolbar/toolbar.component';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { LogoComponent } from './_components/logo/logo.component';
import { HelpComponent } from './screens/help/help.component';
import { SettingsComponent } from './screens/settings/settings.component';
import { ShareSparkComponent } from './screens/share-spark/share-spark.component';
import { IconComponent } from './_components/icon/icon.component';
import { CreateAccountComponent } from './screens/create-account/create-account.component';
import { ForgotPasswordComponent } from './screens/forgot-password/forgot-password.component';
import { MainMenuComponent } from './_components/main-menu/main-menu.component';
import { NotificationComponent } from './_components/notification/notification.component';
import { ShareSparkModalComponent } from './_components/share-spark-modal/share-spark-modal.component';
import { TeamDashboardComponent } from './screens/team-dashboard/team-dashboard.component';
import { ChartModule } from 'angular-highcharts';
import { SendThanksModalComponent } from './_components/send-thanks-modal/send-thanks-modal.component'; // https://api.highcharts.com/highcharts/

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
    IconComponent,
    CreateAccountComponent,
    ForgotPasswordComponent,
    MainMenuComponent,
    NotificationComponent,
    ShareSparkModalComponent,
    TeamDashboardComponent,
    SendThanksModalComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    ChartModule,
    FormsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatToolbarModule,
    MatDialogModule,
    ReactiveFormsModule,
  ],
  entryComponents: [
    ShareSparkModalComponent,
    SendThanksModalComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
