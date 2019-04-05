import { Component, OnInit } from '@angular/core';
import{OrderService} from '../services/order.service';

@Component({
  selector: 'app-preparing-order',
  templateUrl: './preparing-order.component.html',
  styleUrls: ['./preparing-order.component.css']
})
export class PreparingOrderComponent implements OnInit {
  public pendingOrders:any
  constructor(public orderService:OrderService ) { }

  ngOnInit() {
    this.pendingOrders=this.orderService.getOrders();

  }

}
