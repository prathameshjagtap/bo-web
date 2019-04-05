import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserHomeComponent } from './user-home/user-home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TodaysOrdersComponent } from './todays-orders/todays-orders.component';
import { AnalyticsComponent } from './analytics/analytics.component';

const routes: Routes = [
  { path: 'home', component: UserHomeComponent,
   children:[  { path: 'orders',  outlet: 'navbar', component: TodaysOrdersComponent },
  { path: 'analytics',  outlet: 'navbar',component: AnalyticsComponent },] },
 

  { path: '', component: LandingPageComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
