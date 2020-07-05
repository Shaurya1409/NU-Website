import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AdmissionsComponent } from './admissions/admissions.component';
import { WhyNUComponent } from './why-nu/why-nu.component';
import { CSEComponent } from './cse/cse.component';
import { EceComponent } from './ece/ece.component';
import { BioComponent } from './bio/bio.component';
import { PlacementsComponent } from './placements/placements.component';
import { WhyComponent } from './why/why.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { NarrativesComponent } from './narratives/narratives.component';


const routes: Routes = [
  {path: '', component:HomePageComponent},
  {path: 'admissions', component: AdmissionsComponent},
  {path: 'whyNU', component: WhyNUComponent},
  {path: 'cse', component: CSEComponent},
  {path: 'ece', component: EceComponent},
  {path: 'bio', component: BioComponent},
  {path: 'placements', component: PlacementsComponent},
  {path: 'why', component: WhyComponent},
  {path: 'testimonials', component: TestimonialsComponent},
  {path: 'narratives', component: NarrativesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
