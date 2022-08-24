import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { ShowDashboardComponent } from './dashboard/show-dashboard/show-dashboard.component';
import { AddEditDashboardComponent } from './dashboard/add-edit-dashboard/add-edit-dashboard.component';
import { ShowSettingsComponent } from './settings/show-settings/show-settings.component';
import { AddEditSettingsComponent } from './settings/add-edit-settings/add-edit-settings.component';
import { SharedService } from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SettingsComponent,
    ShowDashboardComponent,
    AddEditDashboardComponent,
    ShowSettingsComponent,
    AddEditSettingsComponent
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
