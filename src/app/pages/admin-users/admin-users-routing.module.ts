import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminUsersComponent } from '../admin-users/admin-users.component';
import { AddAdminUsersComponent } from '../admin-users/add-admin-users/add-admin-users.component';
import { EditAdminUsersComponent } from '../admin-users/edit-admin-users/edit-admin-users.component'
const routes: Routes = [
  {
    path:'',
    component: AdminUsersComponent
  },
  {
    path:'add',
    component: AddAdminUsersComponent
  },
  {
    path:'edit/:id',
    component: EditAdminUsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminUsersRoutingModule { }
