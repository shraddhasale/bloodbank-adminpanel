import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { AuthGuard } from '@shared/guard/auth.guard';
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivateChild: [AuthGuard],
    children: [
      
      { path: '', redirectTo: 'urls' },
      
      {
        path: 'urls',
        loadChildren: () =>
          import('../pages/url/url.module').then(
            (m) => m.UrlModule
          )
      },
      {
        path: 'roles',
        loadChildren: () =>
          import('../pages/role/role.module').then(
            (m) => m.RoleModule
          )
      },
      {
        path: 'admin-users',
        loadChildren: () =>
          import('../pages/admin-users/admin-users.module').then(
            (m) => m.AdminUsersModule
          )
      },
      {
        path: 'api-key',
        loadChildren: () =>
          import('../pages/apikey/apikey.module').then(
            (m) => m.ApikeyModule
          )
      },
      {
        path: 'users',
        loadChildren: () =>
          import('../pages/users/users.module').then(
            (m) => m.UsersModule
          )
      },
      {
        path: 'blood-bank',
        loadChildren: () =>
          import('../pages/blood-bank/blood-bank.module').then(
            (m) => m.BloodBankModule
          )
      },
      {
        path: 'user-blood-bank-request',
        loadChildren: () =>
          import('../pages/user-blood-bank-request/user-blood-bank-request.module').then(
            (m) => m.UserBloodBankRequestModule
          )
      },
      {
        path: 'user-blood-bank-donate',
        loadChildren: () =>
          import('../pages/user-blood-bank-donate/user-blood-bank-donate.module').then(
            (m) => m.UserBloodBankDonateModule
          )
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
