import { Component, OnInit, Input } from '@angular/core';
import { Guitar } from '../../models/Guitar';
import { SessionService } from '../../services/session.service';
import { Client } from '../../models/Client';

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
  constructor( public sessionservice: SessionService) { }

  ngOnInit() {
    this.guitar = this.sessionservice.sendObject();
  }
  
}
