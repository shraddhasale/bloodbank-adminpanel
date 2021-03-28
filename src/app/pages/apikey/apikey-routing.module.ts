import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApikeyComponent } from '../apikey/apikey.component';
import { AddApikeyComponent } from './add-apikey/add-apikey.component';
import { EditApikeyComponent } from './edit-apikey/edit-apikey.component';
const routes: Routes = [
  {
    path:'',
    component:ApikeyComponent
  },
  {
    path:'add',
    component:AddApikeyComponent
  },
  {
    path:'edit/:id',
    component:EditApikeyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApikeyRoutingModule { }
