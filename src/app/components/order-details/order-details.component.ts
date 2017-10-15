import { Component, OnInit, Input } from '@angular/core';
import { Guitar } from '../../models/Guitar';
import { SessionService } from '../../services/session.service';
import { Client } from '../../models/Client';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  guitar: Guitar;
  client: Client = {
    firstname : '',
    lastname: '',
    cc: '' ,
    email: '',
    phone: '',
  }
  order:number;
  index:number;
  onClickReview:boolean = false;
  constructor(
     public sessionservice: SessionService,
     public router: Router,
     public activatedroute: ActivatedRoute,
     public dataservice: DataService
  ) { }

  ngOnInit() {
    //this.guitar = this.sessionservice.sendObject();
   
    this.index = this.activatedroute.snapshot.params['index'];
    console.log(this.index);
     //this will ask data service for the whole object of the specific index
     this.guitar= this.dataservice.getSpecificData(this.index);
     this.randomNumber();
  }
  //randome number for order
 randomNumber(){
  this.order = Math.floor(Math.random()*100000);
 }
  
}
