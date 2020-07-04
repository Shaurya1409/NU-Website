import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdmissionsComponent } from './admissions/admissions.component';
import { HomePageComponent } from './home-page/home-page.component';
import { WhyNUComponent } from './why-nu/why-nu.component';

@NgModule({
  declarations: [
    AppComponent,
    AdmissionsComponent,
    HomePageComponent,
    WhyNUComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
