import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApikeyRoutingModule } from './apikey-routing.module';
import { ApikeyComponent } from './apikey.component';
import { AddApikeyComponent } from './add-apikey/add-apikey.component';
import { EditApikeyComponent } from './edit-apikey/edit-apikey.component';
import { ApikeyFormComponent } from './components/apikey-form/apikey-form.component';
import { ApikeyListingComponent } from './components/apikey-listing/apikey-listing.component';


@NgModule({
  declarations: [ApikeyComponent, AddApikeyComponent, EditApikeyComponent, ApikeyFormComponent, ApikeyListingComponent],
  imports: [
    CommonModule,
    ApikeyRoutingModule
  ]
})
export class ApikeyModule { }
