import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleComponent } from '../role/role.component';
import { AddRoleComponent } from '../role/add-role/add-role.component';
import { EditRoleComponent } from '../role/edit-role/edit-role.component'
const routes: Routes = [
  {
    path: '',
    component: RoleComponent
  },
  {
    path: 'add',
    component: AddRoleComponent
  },
  {
    path: 'edit/:id',
    component: EditRoleComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleRoutingModule { }
