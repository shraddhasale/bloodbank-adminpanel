import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// Rxjs
import { Subscription } from 'rxjs';
import { UserI } from '../models/user.model';
import { UserHttpService } from '../services/user-http.service';
import { SpinnerService } from '@shared/services/spinner.service';
import { ToastService } from '@shared/services/toast.service';
import { BreadcrumbI } from '@shared/models/titlebar.model';
import { USERS_BREADCRUMSLIST } from '@const/breadcrumb.constant';
@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.scss']
})
export class EditUsersComponent implements OnInit {
  readonly breadcrumbList: BreadcrumbI[] = USERS_BREADCRUMSLIST.edit;
  readonly pageTitle = 'Edit User';
  userWrapper: UserI;
  userAdminID:string;
  private subscriptions: Subscription = new Subscription();

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _userHttp: UserHttpService,
    private _toast: ToastService,
    private _spinner: SpinnerService,
  ) {
    this.userAdminID = this._route.snapshot.params.id;
  }

  ngOnInit() {
    this.userAdminGetByID();
  }
  userAdminGetByID(){
    this._spinner.show("Fetching Admin User ...");
    this.subscriptions.add(
      this._userHttp.fetchUserById(this.userAdminID)
      .subscribe(
        (resp) => {
         this.userWrapper = resp;
         this.userWrapper.address = resp.address
        this._spinner.hide();
        },
        err => {
          this._spinner.hide();
          this._toast.error(err.error.message, 'Admin User');
        }
      )
    );
  }
  onUserSubmit(userDetails){
    if(userDetails.statusID === false){
      userDetails.statusID = 0
    }else if(userDetails.statusID === true){
      userDetails.statusID = 1;
    }
    delete userDetails.id;
    delete userDetails['roleID'];
    delete userDetails['createdAt'];
    delete userDetails['updatedAt'];
    this.subscriptions.add(
      this._userHttp.updateUser(userDetails,this.userAdminID)
      .subscribe(
        (resp) => {
       this.redirectToAdminListing();
        },
        err => {
          this._toast.error(err.error.message, 'Admin User');
        }
      )
    );

  }

  redirectToAdminListing() {
    this._router.navigate(['/users']);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
    this._spinner.hide();
  }

}
