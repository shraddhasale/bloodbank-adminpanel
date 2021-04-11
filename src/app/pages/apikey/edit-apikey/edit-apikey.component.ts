import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Rxjs
import { Subscription } from 'rxjs';
import { ApikeyI} from '../models/apikey.model';
import { ApikeyHttpService } from '../services/apikey-http.service';
import { SpinnerService } from '@shared/services/spinner.service';
import { ToastService } from '@shared/services/toast.service';
import { BreadcrumbI } from '@shared/models/titlebar.model';
import { APIKEY_BREADCRUMSLIST } from '@const/breadcrumb.constant';
@Component({
  selector: 'app-edit-apikey',
  templateUrl: './edit-apikey.component.html',
  styleUrls: ['./edit-apikey.component.scss']
})
export class EditApikeyComponent implements OnInit {
  readonly breadcrumbList: BreadcrumbI[] = APIKEY_BREADCRUMSLIST.edit;
  readonly pageTitle = 'Edit API Key';
  apiKeyWrapper: ApikeyI;
  apiID:string;
  private subscriptions: Subscription = new Subscription();

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _apiKeyHttp: ApikeyHttpService,
    private _toast: ToastService,
    private _spinner: SpinnerService,
  ) {
    this.apiID = this._route.snapshot.params.id;
  }

  ngOnInit() {
    this.apiKeyGetByID();
  }
  apiKeyGetByID(){
    this._spinner.show("Fetching Admin User ...");
    this.subscriptions.add(
      this._apiKeyHttp.fetchApiKeyById(this.apiID)
      .subscribe(
        (resp) => {
        this.apiKeyWrapper = resp;
        this._spinner.hide();
        },
        err => {
          this._spinner.hide();
          this._toast.error(err.error.message, 'Admin User');
        }
      )
    );
  }
  onApiKeySubmit(){
    let apiId = this.apiKeyWrapper.id
    
    if(this.apiKeyWrapper.statusID === false){
      this.apiKeyWrapper.statusID = 0
    }else if(this.apiKeyWrapper.statusID === true){
      this.apiKeyWrapper.statusID = 1;
    }
    delete this.apiKeyWrapper.id;
    delete this.apiKeyWrapper.createdAt;
    this.subscriptions.add(
      this._apiKeyHttp.updateApiKey(this.apiKeyWrapper, apiId)
      .subscribe(
        (resp) => {
       this.redirectToApiKeyListing();
        },
        err => {
          this._toast.error(err.error.message, 'Admin User');
        }
      )
    );

  }

  redirectToApiKeyListing() {
    this._router.navigate(['/api-key']);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
    this._spinner.hide();
  }


}
