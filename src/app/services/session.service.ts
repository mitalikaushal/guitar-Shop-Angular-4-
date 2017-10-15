import { Injectable } from '@angular/core';
import { Guitar } from '../models/Guitar';
@Injectable()
export class SessionService {
  guitar:Guitar;
  
  constructor() { }

  //this function will recieve the current object
  recieveObject(guitar){
    this.guitar = guitar;
  }
  //this function will send the current object
  sendObject(){
    return this.guitar;
  }
  //this will give/return client details to the confirmatiomation page
  getClientDetails(){

  }
}
