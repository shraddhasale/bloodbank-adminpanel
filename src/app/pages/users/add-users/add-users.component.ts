import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

// Rxjs
import { Subscription } from 'rxjs';
import { UserI} from '../models/user.model';
import { UserHttpService } from '../services/user-http.service'
import { StatusEnum } from '@const/api.constant';
import { SpinnerService } from '@shared/services/spinner.service';
import { ToastService } from '@shared/services/toast.service';
import { BreadcrumbI } from '@shared/models/titlebar.model';
import { USERS_BREADCRUMSLIST } from '@const/breadcrumb.constant';
@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.scss']
})
export class AddUsersComponent implements OnInit {
  readonly breadcrumbList: BreadcrumbI[] = USERS_BREADCRUMSLIST.add;
  readonly pageTitle = 'Add New  User';
  userWrapper: UserI;
  private subscriptions: Subscription = new Subscription();

  constructor(
    private _router: Router,
    private _userHttp: UserHttpService,
    private _toast: ToastService,
    private _spinner: SpinnerService,
  ) {}

  ngOnInit() {
    this.initiateUrlForm();
  }

  initiateUrlForm() {
    this.userWrapper = {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      address: {
          country: "",
          state: "",
          city: "",
          pinCode: "",
          landMark: "",
          location: ""
      },
      username: "",
      password: "",
      bloodgroup: "",
      gender: "",
      dob: "",
      nationality: "",
      panCard: "",
      adharCard: "",
      statusID: StatusEnum.ACTIVE
    };
  }

  onUserSubmit(userDetails) {
    this._spinner.show(`Saving user ${userDetails.firstName}${userDetails.lastName}...`);
    if(userDetails.statusID === false){
      userDetails.statusID = 0
    }else if(userDetails.statusID === true){
      userDetails.statusID = 1;
    }
    this.subscriptions.add(
      this._userHttp.createUser(userDetails).subscribe(
        (res) => {
          this.redirectToUserListing();
          this._toast.success(`${userDetails.firstName} Added Sucessfully`)
        },
        (err) => {
          this._toast.error(err.error.message)
        }
      )
    );
  //   // this._spinner.hide();
  }

  redirectToUserListing() {
    this._router.navigate(['/users']);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
    // this._spinner.hide();
  }

}
