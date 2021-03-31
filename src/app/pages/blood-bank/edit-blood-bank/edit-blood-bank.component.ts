import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// Rxjs
import { Subscription } from 'rxjs';
import { BloodBankI } from '../models/blood-bank.model';
import { BloodBankHttpService } from '../services/blood-bank-http.service';
import { SpinnerService } from '@shared/services/spinner.service';
import { ToastService } from '@shared/services/toast.service';

@Component({
  selector: 'app-edit-blood-bank',
  templateUrl: './edit-blood-bank.component.html',
  styleUrls: ['./edit-blood-bank.component.scss']
})
export class EditBloodBankComponent implements OnInit {

  readonly pageTitle = "Edit User"
  bloodBankWrapper: BloodBankI;
  bloodBankID:string;
  private subscriptions: Subscription = new Subscription();

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _bloodBankHttp: BloodBankHttpService,
    private _toast: ToastService,
    private _spinner: SpinnerService,
  ) {
    this.bloodBankID = this._route.snapshot.params.id;
  }

  ngOnInit() {
    this.userAdminGetByID();
  }
  userAdminGetByID(){
    this._spinner.show("Fetching Blood Bank ...");
    this.subscriptions.add(
      this._bloodBankHttp.fetchBloodBankById(this.bloodBankID)
      .subscribe(
        (resp) => {
         this.bloodBankWrapper = resp;
        this._spinner.hide();
        },
        err => {
          this._spinner.hide();
          this._toast.error(err.error.message, ' Blood Bank');
        }
      )
    );
  }
  onBloodBankSubmit(){
    let adminId = this.bloodBankWrapper.id
    if(this.bloodBankWrapper.statusID === false){
      this.bloodBankWrapper.statusID = 0
    }else if(this.bloodBankWrapper.statusID === true){
      this.bloodBankWrapper.statusID = 1;
    }
    delete this.bloodBankWrapper.id;
    delete this.bloodBankWrapper['createdAt'];
    delete this.bloodBankWrapper['updatedAt'];
    this.subscriptions.add(
      this._bloodBankHttp.updateBloodBank(this.bloodBankWrapper,adminId)
      .subscribe(
        (resp) => {
       this.redirectToBloodBankListing();
        },
        err => {
          this._toast.error(err.error.message, ' Blood Bank');
        }
      )
    );

  }

  redirectToBloodBankListing() {
    this._router.navigate(['/blood-bank']);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
    this._spinner.hide();
  }

}

