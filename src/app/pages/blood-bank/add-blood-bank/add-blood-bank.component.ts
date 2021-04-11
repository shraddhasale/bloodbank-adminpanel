import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BloodBankI} from '../models/blood-bank.model';
import { BloodBankHttpService } from '../services/blood-bank-http.service';
import { ToastService } from '@shared/services/toast.service';
import { BreadcrumbI } from '@shared/models/titlebar.model';
import { BLOOD_BANK_BREADCRUMSLIST } from '@const/breadcrumb.constant';
@Component({
  selector: 'app-add-blood-bank',
  templateUrl: './add-blood-bank.component.html',
  styleUrls: ['./add-blood-bank.component.scss']
})
export class AddBloodBankComponent implements OnInit {
  readonly breadcrumbList: BreadcrumbI[] = BLOOD_BANK_BREADCRUMSLIST.add;
  readonly pageTitle = 'Add Blood Bank';
  bloodBankWrapper: BloodBankI;
  private subscriptions: Subscription = new Subscription();

  constructor(
    private _router: Router,
    private _bloodBankHttp: BloodBankHttpService,
    private _toast: ToastService
  ) {}

  ngOnInit() {
    this.initiateUrlForm();
  }

  initiateUrlForm() {
    this.bloodBankWrapper = {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      thumbnail: "string",
      address: {
        country: "",
        state: "",
        city: "",
        pinCode: "",
        landMark: "",
        location: ""
      },
      statusID: 1
    };
  }

  onBloodBankSubmit(bloodbank) {
    if(bloodbank.statusID === false){
      bloodbank.statusID = 0
    }else if(this.bloodBankWrapper.statusID === true){
      bloodbank.statusID = 1;
    }
    bloodbank.thumbnail = "String";
    this.subscriptions.add(
      this._bloodBankHttp.createBloodBank(bloodbank).subscribe(
        (res) => {
          this.redirectToBloodBankListing();
          this._toast.success(`${this.bloodBankWrapper.firstName} ${this.bloodBankWrapper.lastName} Created successfully.`);
        },
        (err) => {
          this._toast.error(
            err.error.message,
          );
        }
      )
    );
  }

  redirectToBloodBankListing() {
    this._router.navigate(['/blood-bank']);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
