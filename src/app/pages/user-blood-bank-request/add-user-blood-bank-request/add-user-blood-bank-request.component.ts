
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserBloodBankRequestI} from '../models/user-blood-bank-request';
import { UserBloodBankRequestHttpService } from '../services/user-blood-bank-request-http.service';
import { StatusEnum } from '@const/api.constant';
import { ToastService } from '@shared/services/toast.service';
import { BreadcrumbI } from '@shared/models/titlebar.model';
import { BLOOD_REQUEST_BREADCRUMSLIST } from '@const/breadcrumb.constant';
@Component({
  selector: 'app-add-user-blood-bank-request',
  templateUrl: './add-user-blood-bank-request.component.html',
  styleUrls: ['./add-user-blood-bank-request.component.scss']
})
export class AddUserBloodBankRequestComponent implements OnInit {
  readonly breadcrumbList: BreadcrumbI[] = BLOOD_REQUEST_BREADCRUMSLIST.add;
  readonly pageTitle = 'Add User Blood Bank Request';
  bloodRequestWrapper: UserBloodBankRequestI;
  private subscriptions: Subscription = new Subscription();

  constructor(
    private _router: Router,
    private _bloodRequestHttp: UserBloodBankRequestHttpService,
    private _toast: ToastService
  ) {}

  ngOnInit() {
    this.initiateUrlForm();
  }

  initiateUrlForm() {
    this.bloodRequestWrapper = {
      userID: "",
      bloodBankID: "",
      requestFor: "",
      isHospitalize: "",
      statusID: StatusEnum.ACTIVE
    };
  }

  onRequestSubmit() {
    if(this.bloodRequestWrapper.statusID === false){
      this.bloodRequestWrapper.statusID = 0
    }else if(this.bloodRequestWrapper.statusID === true){
      this.bloodRequestWrapper.statusID = 1;
    }
    this.subscriptions.add(
      this._bloodRequestHttp.createRequestUser(this.bloodRequestWrapper).subscribe(
        (res) => {
          this.redirectToBloodRequestListing();
          this._toast.success(`Blood Request Created successfully.`);
        },
        (err) => {
          this._toast.error(
            err.error.message,
          );
        }
      )
    );
  }

  redirectToBloodRequestListing() {
    this._router.navigate(['/user-blood-bank-request']);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
