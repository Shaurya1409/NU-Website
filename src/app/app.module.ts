import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdmissionsComponent } from './admissions/admissions.component';
import { HomePageComponent } from './home-page/home-page.component';
import { WhyNUComponent } from './why-nu/why-nu.component';
import { CSEComponent } from './cse/cse.component';
import { EceComponent } from './ece/ece.component';
import { BioComponent } from './bio/bio.component';
import { WhyComponent } from './why/why.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { NarrativesComponent } from './narratives/narratives.component';

@NgModule({
  declarations: [
    AppComponent,
    AdmissionsComponent,
    HomePageComponent,
    WhyNUComponent,
    CSEComponent,
    EceComponent,
    BioComponent,
    WhyComponent,
    TestimonialsComponent,
    NarrativesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
