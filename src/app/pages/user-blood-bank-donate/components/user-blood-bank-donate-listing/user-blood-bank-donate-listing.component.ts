import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { UserBloodBankDonateI } from '../../models/user-blood-bank-donate'
@Component({
  selector: 'app-user-blood-bank-donate-listing',
  templateUrl: './user-blood-bank-donate-listing.component.html',
  styleUrls: ['./user-blood-bank-donate-listing.component.scss']
})
export class UserBloodBankDonateListingComponent implements OnInit {

  @Input() userDonateList:UserBloodBankDonateI[] = [];
  @Output() statusUpdate: EventEmitter<any> = new EventEmitter<any>();
  readonly listUrl: string = 'edit/';

  
  constructor() { }

  ngOnInit(): void {
  }
  
  onUpdate(updatedUserData) {
  this.statusUpdate.emit(updatedUserData);
  }

}
