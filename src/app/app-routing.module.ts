import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserHomeComponent } from './user-home/user-home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PendingOrderComponent } from './pending-order/pending-order.component';
import { PreparingOrderComponent } from './preparing-order/preparing-order.component';
import { TodaysOrdersComponent } from './todays-orders/todays-orders.component';

const routes: Routes = [
  { path: 'home', component: UserHomeComponent },
  { path: 'orders', component: TodaysOrdersComponent,
  children: [
    { path: 'pending', component: PendingOrderComponent},
    { path: 'preparingorder', component: PreparingOrderComponent}
  ] },
  { path: '',redirectTo:'/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
