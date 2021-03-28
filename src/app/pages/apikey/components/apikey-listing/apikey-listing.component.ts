import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-apikey-listing',
  templateUrl: './apikey-listing.component.html',
  styleUrls: ['./apikey-listing.component.scss']
})
export class ApikeyListingComponent implements OnInit {
  @Input() apikeyList;
  @Output() statusUpdate: EventEmitter<any> = new EventEmitter<any>();
  readonly apikeyUrl: string = 'edit/';
  constructor() { }

  ngOnInit(): void {
  }

  onUpdate(updatedUserData) {
  this.statusUpdate.emit(updatedUserData);
  }

}
