import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveFormsModule } from '@angular/forms';

import { BloodBankRoutingModule } from './blood-bank-routing.module';
import {BloodBankComponent} from './blood-bank.component';
import { AddBloodBankComponent } from './add-blood-bank/add-blood-bank.component';
import { EditBloodBankComponent } from './edit-blood-bank/edit-blood-bank.component';
import { BloodBankListingComponent } from './components/blood-bank-listing/blood-bank-listing.component';
import { BloodBankFormComponent } from './components/blood-bank-form/blood-bank-form.component';
import { BloodBankHttpService } from '../blood-bank/services/blood-bank-http.service'

@NgModule({
  declarations: [BloodBankComponent,AddBloodBankComponent, EditBloodBankComponent, BloodBankListingComponent, BloodBankFormComponent],
  imports: [
    CommonModule,
    BloodBankRoutingModule,
    CommonModule,
    SharedModule,
    NgbTooltipModule,
    NgbDropdownModule,
    NgSelectModule,
    ReactiveFormsModule
  ],
  providers:[
    BloodBankHttpService
  ]
})
export class BloodBankModule { }
