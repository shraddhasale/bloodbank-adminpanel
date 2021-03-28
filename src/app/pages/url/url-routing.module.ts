import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UrlComponent } from './url.component';
import {AddUrlComponent } from './add-url/add-url.component';
import {EditUrlComponent } from './edit-url/edit-url.component';
const routes: Routes = [
  {
    path: '',
    component: UrlComponent
  },
  { path: 'add', component: AddUrlComponent },
  { path: 'edit/:id', component: EditUrlComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UrlRoutingModule { }
