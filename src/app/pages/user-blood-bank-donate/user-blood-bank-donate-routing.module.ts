import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserBloodBankDonateComponent } from './user-blood-bank-donate.component';
import { AddUserBloodBankDonateComponent } from './add-user-blood-bank-donate/add-user-blood-bank-donate.component';
import { EditUserBloodBankDonateComponent } from './edit-user-blood-bank-donate/edit-user-blood-bank-donate.component';
const routes: Routes = [
  {
    path:'',
    component: UserBloodBankDonateComponent
  },
  {
    path:'add',
    component: AddUserBloodBankDonateComponent
  },
  {
    path:'edit/:id',
    component: EditUserBloodBankDonateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserBloodBankDonateRoutingModule { }
