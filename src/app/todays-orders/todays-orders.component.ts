import { Component, OnInit } from '@angular/core';
import {NgbTabsetConfig} from '@ng-bootstrap/ng-bootstrap';
import{ActivatedRoute,Router,ParamMap} from '@angular/router';
@Component({
  selector: 'app-todays-orders',
  templateUrl: './todays-orders.component.html',
  styleUrls: ['./todays-orders.component.css'],
  providers: [NgbTabsetConfig]
})
export class TodaysOrdersComponent implements OnInit {

  constructor(public router:Router,private route: ActivatedRoute) { }

  ngOnInit() {
  }
public tabChange(id){
  if(id==="Pending"){
    this.router.navigate(["pending"], {relativeTo:this.route});
  }
  if(id==="Preparing"){
    this.router.navigate(["preparingorder"],{relativeTo:this.route});
  }
}
}
