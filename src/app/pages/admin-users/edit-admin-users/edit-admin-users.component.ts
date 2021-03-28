import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Rxjs
import { Subscription } from 'rxjs';
import { AdminuserI} from '../models/adminuser.model';
import { AdminuserHttpService } from '../services/adminuser-http.service';
import { SpinnerService } from '@shared/services/spinner.service';
import { ToastService } from '@shared/services/toast.service';

@Component({
  selector: 'app-edit-admin-users',
  templateUrl: './edit-admin-users.component.html',
  styleUrls: ['./edit-admin-users.component.scss']
})
export class EditAdminUsersComponent implements OnInit {

  adminUserWrapper: AdminuserI;
  userAdminID:string;
  private subscriptions: Subscription = new Subscription();

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _urlHttp: AdminuserHttpService,
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
      this._urlHttp.fetchAdminUserById(this.userAdminID)
      .subscribe(
        (resp) => {
         this.adminUserWrapper = resp;
        this._spinner.hide();
        },
        err => {
          this._spinner.hide();
          this._toast.error(err.error.message, 'Admin User');
        }
      )
    );
  }
  onAdminUserSubmit(){
    let adminId = this.adminUserWrapper.id
    if(this.adminUserWrapper.statusID === false){
      this.adminUserWrapper.statusID = 0
    }else if(this.adminUserWrapper.statusID === true){
      this.adminUserWrapper.statusID = 1;
    }
    delete this.adminUserWrapper.id;
    delete this.adminUserWrapper.createdAt;
    this.subscriptions.add(
      this._urlHttp.updateAdminUser(this.adminUserWrapper,adminId)
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
    this._router.navigate(['/admin-users']);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
    this._spinner.hide();
  }

}


