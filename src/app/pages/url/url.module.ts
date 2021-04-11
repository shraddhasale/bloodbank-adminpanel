import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { UrlRoutingModule } from './url-routing.module';
import { UrlComponent } from './url.component';
import { UrlListingComponent } from './components/url-listing/url-listing.component';
import { EditUrlComponent } from './edit-url/edit-url.component';
import { AddUrlComponent } from './add-url/add-url.component';
import { UrlFormComponent } from './components/url-form/url-form.component';


import { UrlHttpsService } from './services/url-https.service'

@NgModule({
  declarations: [
    EditUrlComponent, 
    AddUrlComponent, 
    UrlFormComponent, 
    UrlListingComponent,
    UrlComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgbTooltipModule,
    NgbDropdownModule,
    UrlRoutingModule,
    NgSelectModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    UrlHttpsService
  ]
})
export class UrlModule { }
