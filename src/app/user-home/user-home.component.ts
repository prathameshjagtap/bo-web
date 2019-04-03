import { Component, OnInit } from '@angular/core';
import{ActivatedRoute,Router,ParamMap} from '@angular/router';


@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

 constructor(public router:Router,private route: ActivatedRoute) { }

  ngOnInit() {
       
  }

}
