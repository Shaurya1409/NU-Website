import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdmissionsComponent } from './admissions/admissions.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CSEComponent } from './cse/cse.component';
import { EceComponent } from './ece/ece.component';
import { BioComponent } from './bio/bio.component';

@NgModule({
  declarations: [
    AppComponent,
    AdmissionsComponent,
    HomePageComponent,
    CSEComponent,
    EceComponent,
    BioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
