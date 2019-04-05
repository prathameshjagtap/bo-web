import { Component, OnInit } from '@angular/core';
import{OrderService} from '../services/order.service'
@Component({
  selector: 'app-pending-order',
  templateUrl: './pending-order.component.html',
  styleUrls: ['./pending-order.component.css']
})
export class PendingOrderComponent implements OnInit {

   public pendingOrders:any
  constructor(public orderService:OrderService ) { }

  ngOnInit() {
    this.pendingOrders=this.orderService.getOrders();

  }
}
