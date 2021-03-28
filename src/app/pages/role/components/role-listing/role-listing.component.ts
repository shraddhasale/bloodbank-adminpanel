import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-role-listing',
  templateUrl: './role-listing.component.html',
  styleUrls: ['./role-listing.component.scss']
})
export class RoleListingComponent implements OnInit {

  @Input() roleList;
  @Output() statusUpdate: EventEmitter<any> = new EventEmitter<any>();
  readonly roleUrl: string = 'edit/';
  constructor() { }

  ngOnInit(): void {
  }

  onUpdate(updatedUserData) {
  this.statusUpdate.emit(updatedUserData);
  }

}
