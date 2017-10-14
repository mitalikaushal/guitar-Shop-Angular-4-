import { Component, OnInit, Input } from '@angular/core';
import { Guitar } from '../../models/Guitar';
//import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
@Input('guitar') guitars: Guitar;
  constructor() { }

  ngOnInit() {
   
  }

}
