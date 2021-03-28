import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BloodBankRoutingModule } from './blood-bank-routing.module';
import { AddBloodBankComponent } from './add-blood-bank/add-blood-bank.component';
import { EditBloodBankComponent } from './edit-blood-bank/edit-blood-bank.component';
import { BloodBankListingComponent } from './components/blood-bank-listing/blood-bank-listing.component';
import { BloodBankFormComponent } from './components/blood-bank-form/blood-bank-form.component';


@NgModule({
  declarations: [AddBloodBankComponent, EditBloodBankComponent, BloodBankListingComponent, BloodBankFormComponent],
  imports: [
    CommonModule,
    BloodBankRoutingModule
  ]
})
export class BloodBankModule { }
