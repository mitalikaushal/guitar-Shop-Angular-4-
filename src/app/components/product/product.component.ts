import { Component, OnInit } from '@angular/core';
import {DataService } from '../../services/data.service';
import { Guitar } from '../../models/Guitar';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  //array guitars of type class Guitar  
  guitars:Guitar[];
  index:number = 0;
  
  //injecting dataservice dependency
  constructor( public dataservice: DataService, public sessionservice: SessionService) { }

  ngOnInit() {
    //calling getData() method through dataservice which returns the whole guitars 
   this.guitars = this.dataservice.getData();
  }
  // on click on decrement arrow this function will call
  decrement(){
    this.index = this.index-1;
   // console.log(this.index);
  }
  //on click on increment arrow this function will be called
  increment(){
    this.index = this.index+1;
    //console.log(this.index);
  }
  //on clicking on buy this function will send the current object to session service
  sendObject(){
    this.sessionservice.recieveObject(this.guitars[this.index]);
  }

}
