import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveFormsModule } from '@angular/forms';

import { RoleRoutingModule } from './role-routing.module';
import { RoleComponent } from './role.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { EditRoleComponent } from './edit-role/edit-role.component';
import { RoleFormComponent } from './components/role-form/role-form.component';
import { RoleListingComponent } from './components/role-listing/role-listing.component';
import { RoleHttpService } from '../role/services/role-http.service'

@NgModule({
  declarations: [RoleComponent, AddRoleComponent, EditRoleComponent, RoleFormComponent, RoleListingComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgbTooltipModule,
    NgbDropdownModule,
    NgSelectModule,
    ReactiveFormsModule,
    RoleRoutingModule
  ],
  providers: [
    RoleHttpService
  ]
  
})
export class RoleModule { }
