import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserBloodBankRequestI } from '../../models/user-blood-bank-request'

@Component({
  selector: 'app-user-blood-bank-request-listing',
  templateUrl: './user-blood-bank-request-listing.component.html',
  styleUrls: ['./user-blood-bank-request-listing.component.scss']
})
export class UserBloodBankRequestListingComponent implements OnInit {

  @Input() userRequestList:UserBloodBankRequestI[];
  @Output() statusUpdate: EventEmitter<any> = new EventEmitter<any>();
  readonly adminUrl: string = 'edit/';
  constructor() { }

  ngOnInit(): void {
  }

  onUpdate(updatedUserData) {
  this.statusUpdate.emit(updatedUserData);
  }

}
