import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminUsersRoutingModule } from './admin-users-routing.module';
import { AdminUsersComponent } from './admin-users.component';
import { EditAdminUsersComponent } from './edit-admin-users/edit-admin-users.component';
import { AddAdminUsersComponent } from './add-admin-users/add-admin-users.component';
import { AdminUsersFormComponent } from './components/admin-users-form/admin-users-form.component';
import { AdminUsersListingComponent } from './components/admin-users-listing/admin-users-listing.component';
import { AdminuserHttpService } from './services/adminuser-http.service'

@NgModule({
  declarations: [AdminUsersComponent, EditAdminUsersComponent, AddAdminUsersComponent, AdminUsersFormComponent, AdminUsersListingComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgbTooltipModule,
    NgbDropdownModule,
    AdminUsersRoutingModule,
    NgSelectModule,
    ReactiveFormsModule
  ],
  providers: [
    AdminuserHttpService
  ]
})
export class AdminUsersModule { }
