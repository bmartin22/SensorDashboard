import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { ShowDashboardComponent } from './dashboard/show-dashboard/show-dashboard.component';
import { AddEditDashboardComponent } from './dashboard/add-edit-dashboard/add-edit-dashboard.component';
import { ShowSensorSettingsComponent } from './settings/show-sensor-settings/show-sensor-settings.component';
import { AddEditSensorSettingsComponent } from './settings/add-edit-sensor-settings/add-edit-sensor-settings.component';
import { SharedService } from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ShowChartComponent } from './dashboard/show-chart/show-chart.component';
import { ShowAlertSettingsComponent } from './settings/show-alert-settings/show-alert-settings.component';
import { AddEditAlertSettingsComponent } from './settings/add-edit-alert-settings/add-edit-alert-settings.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SettingsComponent,
    ShowDashboardComponent,
    AddEditDashboardComponent,
    ShowSensorSettingsComponent,
    AddEditSensorSettingsComponent,
    ShowChartComponent,
    ShowAlertSettingsComponent,
    AddEditAlertSettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
