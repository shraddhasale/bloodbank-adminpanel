import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveFormsModule } from '@angular/forms';

import { UserBloodBankRequestRoutingModule } from './user-blood-bank-request-routing.module';
import { UserBloodBankRequestComponent } from './user-blood-bank-request.component';
import { UserBloodBankRequestFormComponent } from './components/user-blood-bank-request-form/user-blood-bank-request-form.component';
import { UserBloodBankRequestListingComponent } from './components/user-blood-bank-request-listing/user-blood-bank-request-listing.component';
import { EditUserBloodBankRequestComponent } from './edit-user-blood-bank-request/edit-user-blood-bank-request.component';
import { AddUserBloodBankRequestComponent } from './add-user-blood-bank-request/add-user-blood-bank-request.component';
import {UserBloodBankRequestHttpService} from '../user-blood-bank-request/services/user-blood-bank-request-http.service'

@NgModule({
  declarations: [
    UserBloodBankRequestComponent, 
    UserBloodBankRequestFormComponent, 
    UserBloodBankRequestListingComponent, 
    EditUserBloodBankRequestComponent, 
    AddUserBloodBankRequestComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgbTooltipModule,
    NgbDropdownModule,
    UserBloodBankRequestRoutingModule,
    NgSelectModule,
    ReactiveFormsModule
  ],
  providers: [
    UserBloodBankRequestHttpService
  ]
})
export class UserBloodBankRequestModule { }
