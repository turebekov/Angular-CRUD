import { Component, OnInit } from '@angular/core';
import { PhoneService } from './phone.service'
import {Phone} from './item-data';
import {clone} from 'lodash'
import {projectionDef} from "@angular/core/src/render3/instructions";



@Component({

  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css'],
  providers: [PhoneService]

})
export class PhoneComponent implements OnInit {
  phones: Phone[];
  phoneForm: boolean = (false);
  editedItem: any = {};
  newPhone: any = {};
  isNewForm: boolean;

  constructor(private _phoneService: PhoneService) { }
  ngOnInit() {
    this.getProducts();
  }
  getProducts() {
    this.phones = this._phoneService.getItemsFromData();
  }
  showAddPhoneForm(){
    if(this.phones.length) {
      this.newPhone = {};
    }
    this.isNewForm = true;
    this.phoneForm=true;
  }
  addPhone(phone: Phone){
    if (this.isNewForm){
      //add a new phone
      this._phoneService.addPhone(phone);
    }
    this.phoneForm = false;
  }
  showEditItemForm(phone: Phone) {
    this.editedItem = clone(phone);
  }
  updateItem(){
    this._phoneService.updatePhone(this.editedItem);
    this.editedItem = {};
  }
  cancelAddForm(){
    this.phoneForm=false;
    this.isNewForm = false;
  }
  cancelEdits(){
    this.editedItem = {};
  }

 removePhone(phone: Phone){
    this._phoneService.deletePhone(phone);
  }


  count: number = 0;

  increase($event): void {
    this.count++;
    console.log($event);
  }




}
