import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LicensePlateService } from './services/license-plate.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { LicensePlateComponent } from './license-plate/license-plate.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    JumbotronComponent,
    LicensePlateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [LicensePlateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
