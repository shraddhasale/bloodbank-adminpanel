import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { EditUsersComponent } from './edit-users/edit-users.component';
const routes: Routes = [
  {
    path:'',
    component: UsersComponent
  },
  {
    path:'add',
    component: AddUsersComponent
  },
  {
    path:'edit/:id',
    component: EditUsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
