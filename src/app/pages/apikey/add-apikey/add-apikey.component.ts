import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApikeyI} from '../models/apikey.model';
import { ApikeyHttpService } from '../services/apikey-http.service';
import { StatusEnum } from '@const/api.constant';
import { ToastService } from '@shared/services/toast.service';
import { BreadcrumbI } from '@shared/models/titlebar.model';
import { APIKEY_BREADCRUMSLIST } from '@const/breadcrumb.constant';
@Component({
  selector: 'app-add-apikey',
  templateUrl: './add-apikey.component.html',
  styleUrls: ['./add-apikey.component.scss']
})
export class AddApikeyComponent implements OnInit,OnDestroy {
  readonly breadcrumbList: BreadcrumbI[] = APIKEY_BREADCRUMSLIST.add;
  readonly pageTitle = 'Edit Role';
  apiKeyWrapper: ApikeyI;
  private subscriptions: Subscription = new Subscription();

  constructor(
    private _router: Router,
    private _apiKeyHttp: ApikeyHttpService,
    private _toast: ToastService
  ) {}

  ngOnInit() {
    this.initiateApiKeyForm();
  }

  initiateApiKeyForm() {
    this.apiKeyWrapper = {
      name: "",
      apikey:"",
      roleID:"",
      statusID: StatusEnum.ACTIVE
    };
  }

  onApiKeySubmit() {
    if(this.apiKeyWrapper.statusID === false){
      this.apiKeyWrapper.statusID = 0
    }else if(this.apiKeyWrapper.statusID === true){
      this.apiKeyWrapper.statusID = 1;
    }
    this.subscriptions.add(
      this._apiKeyHttp.createApiKey(this.apiKeyWrapper).subscribe(
        (res) => {
          this.redirectToApiKeyListing();
          this._toast.success(`${this.apiKeyWrapper.name} Created successfully.`);
        },
        (err) => {
          this._toast.error(
            err.error.message,
          );
        }
      )
    );
  }

  redirectToApiKeyListing() {
    this._router.navigate(['/api-key']);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
