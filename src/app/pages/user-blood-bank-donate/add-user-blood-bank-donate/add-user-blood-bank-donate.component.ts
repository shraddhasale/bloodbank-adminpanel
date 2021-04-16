
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserBloodBankDonateI} from '../../user-blood-bank-donate/models/user-blood-bank-donate';

import { UserBloodBankDonateHttpService } from '../services/user-blood-bank-donate-http.service';
import { BLOOD_DONATEBREADCRUMSLIST } from '@const/breadcrumb.constant';
import { StatusEnum } from '@const/api.constant';
import { ToastService } from '@shared/services/toast.service';
import { BreadcrumbI } from '@shared/models/titlebar.model';
@Component({
  selector: 'app-add-user-blood-bank-donate',
  templateUrl: './add-user-blood-bank-donate.component.html',
  styleUrls: ['./add-user-blood-bank-donate.component.scss']
})
export class AddUserBloodBankDonateComponent implements OnInit {
  readonly breadcrumbList: BreadcrumbI[] = BLOOD_DONATEBREADCRUMSLIST.add;
  readonly pageTitle = 'Add New User Blood Bank Donate';
  bloodDonateWrapper: UserBloodBankDonateI;
  private subscriptions: Subscription = new Subscription();

  constructor(
    private _router: Router,
    private _bloodDonateHttp: UserBloodBankDonateHttpService,
    private _toast: ToastService
  ) {}

  ngOnInit() {
    this.initiateUrlForm();
  }

  initiateUrlForm() {
    this.bloodDonateWrapper = {
      userID: "",
      bloodBankID: "",
      paidAmount: 0,
      paidStatus: 0,
      requestFor:'',
      statusID: StatusEnum.ACTIVE
    };
  }

  onRoleSubmit() {
    if(this.bloodDonateWrapper.statusID === false){
      this.bloodDonateWrapper.statusID = 0
    }else if(this.bloodDonateWrapper.statusID === true){
      this.bloodDonateWrapper.statusID = 1;
    }
    this.subscriptions.add(
      this._bloodDonateHttp.createdonateUser(this.bloodDonateWrapper).subscribe(
        (res) => {
          this.redirectTobloodDonateListing();
          this._toast.success(`Blood Donate Created successfully.`);
        },
        (err) => {
          this._toast.error(
            err.error.message,
          );
        }
      )
    );
  }

  redirectTobloodDonateListing() {
    this._router.navigate(['/user-blood-bank-donate']);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}

