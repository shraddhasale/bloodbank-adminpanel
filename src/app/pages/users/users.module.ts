import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveFormsModule } from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';
import { UsersListingComponent } from './components/users-listing/users-listing.component';
import { UsersFormComponent } from './components/users-form/users-form.component';
import { UsersComponent } from './users.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { EditUsersComponent } from './edit-users/edit-users.component';
import { UserHttpService } from './services/user-http.service'

@NgModule({
  declarations: [UsersListingComponent, UsersFormComponent, UsersComponent, AddUsersComponent, EditUsersComponent],
  imports: [
    CommonModule,
    SharedModule,
    UsersRoutingModule,
    NgbTooltipModule,
    NgbDropdownModule,
    NgSelectModule,
    ReactiveFormsModule
  ],
  providers: [
    UserHttpService
  ]
})
export class UsersModule { }
