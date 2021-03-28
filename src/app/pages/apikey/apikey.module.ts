import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveFormsModule } from '@angular/forms';

import { ApikeyRoutingModule } from './apikey-routing.module';
import { ApikeyComponent } from './apikey.component';
import { AddApikeyComponent } from './add-apikey/add-apikey.component';
import { EditApikeyComponent } from './edit-apikey/edit-apikey.component';
import { ApikeyFormComponent } from './components/apikey-form/apikey-form.component';
import { ApikeyListingComponent } from './components/apikey-listing/apikey-listing.component';
 import {ApikeyHttpService} from './services/apikey-http.service'

@NgModule({
  declarations: [ApikeyComponent, AddApikeyComponent, EditApikeyComponent, ApikeyFormComponent, ApikeyListingComponent],
  imports: [
    CommonModule,
    ApikeyRoutingModule,
    SharedModule,
    NgbTooltipModule,
    NgbDropdownModule,
    NgSelectModule,
    ReactiveFormsModule
  ],
  providers: [
    ApikeyHttpService
  ]
})
export class ApikeyModule { }
