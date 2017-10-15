import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import{ Guitar } from '../../models/Guitar';
import { Client } from '../../models/Client';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  guitar:Guitar;
  client:Client;
  index:number;
  order:number;

  constructor(
    public sessionservice: SessionService,
    public router: Router,
    public activatedroute: ActivatedRoute,
    public dataservice: DataService
  ) { }

  ngOnInit() {
    //getting specific guitar selected
    this.index = this.activatedroute.snapshot.params['index'];
   this.guitar = this.dataservice.getSpecificData(this.index);
   //this.guitar = this.sessionservice.getClientDetails();
 }

}
