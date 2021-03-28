import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-url-listing',
  templateUrl: './url-listing.component.html',
  styleUrls: ['./url-listing.component.scss']
})
export class UrlListingComponent implements OnInit {
  @Input() urlList;
  @Output() statusUpdate: EventEmitter<any> = new EventEmitter<any>();
  readonly userUrl: string = 'edit/';
  constructor() { }

  ngOnInit(): void {
  }

  onUpdate(updatedUserData) {
  this.statusUpdate.emit(updatedUserData);
  }
}
