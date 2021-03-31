import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// Rxjs
import { Subscription } from 'rxjs';
import { UserI } from '../models/user.model';
import { UserHttpService } from '../services/user-http.service';
import { SpinnerService } from '@shared/services/spinner.service';
import { ToastService } from '@shared/services/toast.service';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.scss']
})
export class EditUsersComponent implements OnInit {
  readonly pageTitle = "Edit User"
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
        this._spinner.hide();
        },
        err => {
          this._spinner.hide();
          this._toast.error(err.error.message, 'Admin User');
        }
      )
    );
  }
  onUserSubmit(){
    let adminId = this.userWrapper.id
    if(this.userWrapper.statusID === false){
      this.userWrapper.statusID = 0
    }else if(this.userWrapper.statusID === true){
      this.userWrapper.statusID = 1;
    }
    delete this.userWrapper.id;
    delete this.userWrapper['roleID'];
    delete this.userWrapper['createdAt'];
    delete this.userWrapper['updatedAt'];
    this.subscriptions.add(
      this._userHttp.updateUser(this.userWrapper,adminId)
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
