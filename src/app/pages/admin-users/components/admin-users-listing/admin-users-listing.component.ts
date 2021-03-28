import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AdminuserI } from '../../models/adminuser.model'
@Component({
  selector: 'app-admin-users-listing',
  templateUrl: './admin-users-listing.component.html',
  styleUrls: ['./admin-users-listing.component.scss']
})
export class AdminUsersListingComponent implements OnInit {
  @Input() adminList:AdminuserI[];
  @Output() statusUpdate: EventEmitter<any> = new EventEmitter<any>();
  readonly adminUrl: string = 'edit/';
  constructor() { }

  ngOnInit(): void {
  }

  onUpdate(updatedUserData) {
  this.statusUpdate.emit(updatedUserData);
  }

}
