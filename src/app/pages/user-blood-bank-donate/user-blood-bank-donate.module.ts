import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveFormsModule } from '@angular/forms';

import { UserBloodBankDonateRoutingModule } from './user-blood-bank-donate-routing.module';
import { UserBloodBankDonateComponent } from './user-blood-bank-donate.component';
import { AddUserBloodBankDonateComponent } from './add-user-blood-bank-donate/add-user-blood-bank-donate.component';
import { EditUserBloodBankDonateComponent } from './edit-user-blood-bank-donate/edit-user-blood-bank-donate.component';
import { UserBloodBankDonateListingComponent } from './components/user-blood-bank-donate-listing/user-blood-bank-donate-listing.component';
import { UserBloodBankDonateFormComponent } from './components/user-blood-bank-donate-form/user-blood-bank-donate-form.component';

import { UserBloodBankDonateHttpService } from  '../user-blood-bank-donate/services/user-blood-bank-donate-http.service'

@NgModule({
  declarations: [
    
    UserBloodBankDonateComponent, 
    AddUserBloodBankDonateComponent, 
    EditUserBloodBankDonateComponent, 
    UserBloodBankDonateListingComponent, 
    UserBloodBankDonateFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgbTooltipModule,
    NgbDropdownModule,
    NgSelectModule,
    ReactiveFormsModule,
    UserBloodBankDonateRoutingModule
  ],
  providers: [
    UserBloodBankDonateHttpService
  ]
})
export class UserBloodBankDonateModule { }
