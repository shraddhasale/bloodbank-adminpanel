import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// Rxjs
import { Subscription } from 'rxjs';
import { UserBloodBankRequestI } from '../models/user-blood-bank-request';
import { UserBloodBankRequestHttpService } from '../services/user-blood-bank-request-http.service'
import { SpinnerService } from '@shared/services/spinner.service';
import { ToastService } from '@shared/services/toast.service';

@Component({
  selector: 'app-edit-user-blood-bank-request',
  templateUrl: './edit-user-blood-bank-request.component.html',
  styleUrls: ['./edit-user-blood-bank-request.component.scss']
})
export class EditUserBloodBankRequestComponent implements OnInit {

  bloodRequestWrapper: UserBloodBankRequestI;
  readonly pageTitle = "Edit URL"
  private subscriptions: Subscription = new Subscription();

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _spinner: SpinnerService,
    private _bloodRequesttHttp: UserBloodBankRequestHttpService,
    private _toast: ToastService
   
  ) {}

  ngOnInit() {
    this.fetchEndpointById(this._activatedRoute.snapshot.params.id);
  }
  
  fetchEndpointById(UserBloodBankRequestId: string) {
    this._spinner.show('User Blood Request Detail...');
    this.subscriptions.add(
      this._bloodRequesttHttp.fetchRequestUserById(UserBloodBankRequestId).subscribe(
        (res) => {
          this.bloodRequestWrapper = res;
          this._spinner.hide();
        },
        (err) => {
          this._toast.error(
            err.error.message,
            'Failed to Fetch User Blood Request Details'
          );
          this._spinner.hide();
        }
      )
    );
  }

  onUserBloodRequestSubmit() {
    let urlId = this.bloodRequestWrapper.id;
    if(this.bloodRequestWrapper.statusID === false){
      this.bloodRequestWrapper.statusID = 0
    }else if(this.bloodRequestWrapper.statusID === true){
      this.bloodRequestWrapper.statusID = 1;
    }
    delete  this.bloodRequestWrapper.id;
    delete this.bloodRequestWrapper.createdAt;
    // delete this.bloodRequestWrapper.updatedAt;
    this._spinner.show('Updating URL ...');
    let updatedEndpointWrapper = { ...this.bloodRequestWrapper };
    this.subscriptions.add(
      this._bloodRequesttHttp.updatedRequestUser(updatedEndpointWrapper, urlId).subscribe(
        (res) => {
          this._toast.success(`User Blood Request updated successfully.`);
          this.redirectToUserRequestListing();
          this._spinner.hide();
        },
        (err) => {
          this._toast.error(
            err.error.message,
            'User Blood Request Update Failed'
          );
        }
      )
    );
   }

  redirectToUserRequestListing() {
    this._router.navigate(['/user-blood-bank-request']);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
    this._spinner.hide();
  }

}
