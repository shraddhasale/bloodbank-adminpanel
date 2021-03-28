import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import {
  NgbModalModule,
  NgbDatepickerModule,
  NgbPaginationModule,
  NgbDropdownModule,
  NgbAccordionModule
} from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PageTitlebarComponent } from './components/page-titlebar/page-titlebar.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ActionBarComponent } from './components/action-bar/action-bar.component';

import { ToastComponent } from './components/toast/toast.component';

@NgModule({
  declarations: [
    SearchBarComponent,
    SpinnerComponent,
    PaginationComponent,
    ToastComponent,
    PageTitlebarComponent,
    ActionBarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModalModule,
    NgbDatepickerModule,
    NgbPaginationModule,
    NgbDropdownModule,
    NgbAccordionModule,
    RouterModule,
    NgSelectModule,
  ],
  exports: [
    SearchBarComponent,
    SpinnerComponent,
    PaginationComponent,
    ToastComponent,
    ActionBarComponent,
    PageTitlebarComponent,
  ]
})
export class SharedModule { }
