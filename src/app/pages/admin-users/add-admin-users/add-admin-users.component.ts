import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AdminuserI} from '../models/adminuser.model';
import { AdminuserHttpService } from '../services/adminuser-http.service';
import { StatusEnum } from '@const/api.constant';
import { ToastService } from '@shared/services/toast.service';
import { BreadcrumbI } from '@shared/models/titlebar.model';
import { ADMIN_USERS_BREADCRUMSLIST } from '@const/breadcrumb.constant';
@Component({
  selector: 'app-add-admin-users',
  templateUrl: './add-admin-users.component.html',
  styleUrls: ['./add-admin-users.component.scss']
})
export class AddAdminUsersComponent implements OnInit,OnDestroy {
  readonly breadcrumbList: BreadcrumbI[] = ADMIN_USERS_BREADCRUMSLIST.add;
  readonly pageTitle = 'Add New Admin User';
  adminUserWrapper: AdminuserI;
  private subscriptions: Subscription = new Subscription();

  constructor(
    private _router: Router,
    private _urlHttp: AdminuserHttpService,
    private _toast: ToastService
  ) {}

  ngOnInit() {
    this.initiateUrlForm();
  }

  initiateUrlForm() {
    this.adminUserWrapper = {
      email: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      password: "",
      statusID: StatusEnum.ACTIVE,
      roleID: [],
    };
  }

  onRoleSubmit() {
    if(this.adminUserWrapper.statusID === false){
      this.adminUserWrapper.statusID = 0
    }else if(this.adminUserWrapper.statusID === true){
      this.adminUserWrapper.statusID = 1;
    }
    this.subscriptions.add(
      this._urlHttp.createAdminUser(this.adminUserWrapper).subscribe(
        (res) => {
          this.redirectToAdminListing();
          this._toast.success(`${this.adminUserWrapper.firstName} ${this.adminUserWrapper.lastName} Created successfully.`);
        },
        (err) => {
          this._toast.error(
            err.error.message,
          );
        }
      )
    );
  }

  redirectToAdminListing() {
    this._router.navigate(['/admin-users']);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
