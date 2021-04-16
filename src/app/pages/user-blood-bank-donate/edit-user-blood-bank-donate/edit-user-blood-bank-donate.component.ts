import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// Rxjs
import { Subscription } from 'rxjs';
import { UserBloodBankDonateI} from '../../user-blood-bank-donate/models/user-blood-bank-donate';
import { UserBloodBankDonateHttpService } from '../services/user-blood-bank-donate-http.service';
import { SpinnerService } from '@shared/services/spinner.service';
import { ToastService } from '@shared/services/toast.service';
import { BreadcrumbI } from '@shared/models/titlebar.model';
import { BLOOD_DONATEBREADCRUMSLIST } from '@const/breadcrumb.constant';
@Component({
  selector: 'app-edit-user-blood-bank-donate',
  templateUrl: './edit-user-blood-bank-donate.component.html',
  styleUrls: ['./edit-user-blood-bank-donate.component.scss']
})
export class EditUserBloodBankDonateComponent implements OnInit {
  readonly breadcrumbList: BreadcrumbI[] = BLOOD_DONATEBREADCRUMSLIST.edit;
  bloodDonateWrapper: UserBloodBankDonateI;
  readonly pageTitle = "Edit User Blood Donate"
  private subscriptions: Subscription = new Subscription();

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _spinner: SpinnerService,
    private _bloodDonatettHttp: UserBloodBankDonateHttpService,
    private _toast: ToastService
   
  ) {}

  ngOnInit() {
    this.fetchEndpointById(this._activatedRoute.snapshot.params.id);
  }
  
  fetchEndpointById(UserBloodBankRequestId: string) {
    this._spinner.show('User Blood Donate Details...');
    this.subscriptions.add(
      this._bloodDonatettHttp.fetchdonateUserById(UserBloodBankRequestId).subscribe(
        (res) => {
          this.bloodDonateWrapper = res;
          this._spinner.hide();
        },
        (err) => {
          this._toast.error(
            err.error.message,
            'Failed to Fetch User Blood Donate Details'
          );
          this._spinner.hide();
        }
      )
    );
  }

  onUserBloodDonateSubmit() {
    let urlId = this.bloodDonateWrapper.id;
    if(this.bloodDonateWrapper.statusID === false){
      this.bloodDonateWrapper.statusID = 0
    }else if(this.bloodDonateWrapper.statusID === true){
      this.bloodDonateWrapper.statusID = 1;
    }
    delete  this.bloodDonateWrapper.id;
    delete this.bloodDonateWrapper.createdAt;
    delete this.bloodDonateWrapper.updatedAt;
    this._spinner.show('Updating Blood Donate ...');
    let updatedEndpointWrapper = { ...this.bloodDonateWrapper };
    this.subscriptions.add(
      this._bloodDonatettHttp.updatedonateUser(updatedEndpointWrapper, urlId).subscribe(
        (res) => {
          this._toast.success(`User Blood Donate Updated successfully.`);
          this.redirectTobloodDonateListing();
          this._spinner.hide();
        },
        (err) => {
          this._toast.error(
            err.error.message,
            'User Blood Donate Update Failed'
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
    this._spinner.hide();
  }

}
