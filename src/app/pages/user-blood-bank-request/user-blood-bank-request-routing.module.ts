import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserBloodBankRequestComponent } from './user-blood-bank-request.component';
import { EditUserBloodBankRequestComponent } from './edit-user-blood-bank-request/edit-user-blood-bank-request.component';
import { AddUserBloodBankRequestComponent } from './add-user-blood-bank-request/add-user-blood-bank-request.component';
const routes: Routes = [
  {
    path: '',
    component:UserBloodBankRequestComponent,
  },
  {
    path: 'add',
    component:AddUserBloodBankRequestComponent,
  },
  {
    path: 'edit/:id',
    component:EditUserBloodBankRequestComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserBloodBankRequestRoutingModule { }
