import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component'
import { AdmissionsComponent } from './admissions/admissions.component'
import { WhyNUComponent } from './why-nu/why-nu.component'


const routes: Routes = [
  {path: '', component:HomePageComponent},
  {path: 'admissions', component: AdmissionsComponent},
  {path: 'whyNU', component: WhyNUComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
