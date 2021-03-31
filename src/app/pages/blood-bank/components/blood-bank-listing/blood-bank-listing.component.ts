import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-blood-bank-listing',
  templateUrl: './blood-bank-listing.component.html',
  styleUrls: ['./blood-bank-listing.component.scss']
})
export class BloodBankListingComponent implements OnInit {

  @Input() bloodbankList;
  @Output() statusUpdate: EventEmitter<any> = new EventEmitter<any>();
  readonly listUrl: string = 'edit/';
  constructor() { }

  ngOnInit(): void {
  }

  onUpdate(updatedUserData) {
  this.statusUpdate.emit(updatedUserData);
  }

}
