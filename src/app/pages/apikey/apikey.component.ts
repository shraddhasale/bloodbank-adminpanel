import { Component, OnInit } from '@angular/core';
import { ApikeyHttpService } from './services/apikey-http.service';


import { Subscription } from 'rxjs';
import { ButtonOptionsI } from '@shared/models/titlebar.model';
import { ApikeyI } from '../apikey/models/apikey.model';
import { API_CONFIG} from '@const/api.constant';
import { SpinnerService } from '@shared/services/spinner.service';
import { ToastService } from '@shared/services/toast.service';
import { StatusEnum } from '@const/api.constant';
import { BreadcrumbI } from '@shared/models/titlebar.model';
import { APIKEY_BREADCRUMSLIST } from '@const/breadcrumb.constant';
@Component({
  selector: 'app-apikey',
  templateUrl: './apikey.component.html',
  styleUrls: ['./apikey.component.scss']
})
export class ApikeyComponent implements OnInit {
  readonly breadcrumbList: BreadcrumbI[] = APIKEY_BREADCRUMSLIST.listing;
  readonly button: ButtonOptionsI = {
    label: 'Add New API Key',
    routerLink: ['/api-key/add']
  };
  readonly pageTitle = 'API Key';
  readonly pageSize = API_CONFIG.pageSize;
  paginationTotalCount = 0;
  currentPage = 1;
  searchString:string;
  where: { [key: string]: any } = {
    statusID: {inq: [StatusEnum.ACTIVE, StatusEnum.INACTIVE]}
  };
  apikeyCount:number = 0;
  apikeyList: ApikeyI[] = [];
  apikeyFilter: { [key: string]: any } = {};
  subscriptions: Subscription = new Subscription();
  constructor(
    private readonly _apkeyhttps:ApikeyHttpService,
    private _toast: ToastService,
    private _spinner: SpinnerService,
  ) { }

  ngOnInit(): void {
    this.getApiKeysList();
  }
  getApiKeysList() {
    this._spinner.show("Fetching API Key list...")
    this.subscriptions.add(
      this._apkeyhttps.fetchAllApiKeys(this.pageSize,this.currentPage,this.where).subscribe(resp=>{
        
        this.apikeyList = resp.data
        this.apikeyCount = resp.count;
        this._spinner.hide();
      },
        (err) => {
          this._toast.error(err.error.message)
          this._spinner.hide();
      })
    )  
  }
  onPageChange(currentPage: number) {
    this.currentPage = currentPage;
    this.getApiKeysList();
  }
  onSearchChange(searchString: string) {
    this.searchString = searchString;
    if (this.searchString) {
      this.where.search = searchString;
    } else {
      delete this.where.search;
    }
    this.currentPage = 1;
    this.getApiKeysList()
  }
  onStatusUpdate(api){
    this.subscriptions.add(
      this._apkeyhttps.deleteApiKey(api).subscribe(
        (resp: any) => {
          this.getApiKeysList();
          this._toast.success("Api Key Delete Sucessfully")
        },
        (err) => {
          this._toast.error(err.error.message)
        }
      )
    );
  }
}

