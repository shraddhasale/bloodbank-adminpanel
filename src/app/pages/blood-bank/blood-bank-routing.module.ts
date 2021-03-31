import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BloodBankComponent } from './blood-bank.component';
import {AddBloodBankComponent } from './add-blood-bank/add-blood-bank.component';
import {EditBloodBankComponent } from './edit-blood-bank/edit-blood-bank.component';
const routes: Routes = [
  {
    path: '',
    component: BloodBankComponent
  },
  { path: 'add', component: AddBloodBankComponent },
  { path: 'edit/:id', component: EditBloodBankComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BloodBankRoutingModule { }
