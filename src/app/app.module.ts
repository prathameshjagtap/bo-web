import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeNavbarComponent } from './home-navbar/home-navbar.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TodaysOrdersComponent } from './todays-orders/todays-orders.component';
import { PendingOrderComponent } from './pending-order/pending-order.component';
import { PreparingOrderComponent } from './preparing-order/preparing-order.component';
import { ReadyToPickOrderComponent } from './ready-to-pick-order/ready-to-pick-order.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import {OrderService} from './services/order.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeNavbarComponent,
    UserHomeComponent,
    LandingPageComponent,
    PageNotFoundComponent,
    TodaysOrdersComponent,
    AnalyticsComponent,
    PendingOrderComponent,
    PreparingOrderComponent,
    ReadyToPickOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
