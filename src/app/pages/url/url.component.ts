import { Component, OnInit } from '@angular/core';
import { UrlHttpsService } from './services/url-https.service';


import { Subscription } from 'rxjs';
import { ButtonOptionsI } from '@shared/models/titlebar.model';
import { EndpointI } from '../url/models/endpoint.model';
import { API_CONFIG} from '@const/api.constant';
import { SpinnerService } from '@shared/services/spinner.service';
import { ToastService } from '@shared/services/toast.service';
import { StatusEnum } from '@const/api.constant';
@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrls: ['./url.component.scss']
})
export class UrlComponent implements OnInit {
  readonly button: ButtonOptionsI = {
    label: 'Add New URL',
    routerLink: ['/urls/add']
  };
  readonly pageTitle = 'URL';
  readonly pageSize = API_CONFIG.pageSize;
  paginationTotalCount = 0;
  currentPage = 1;
  searchString:string;
  where: { [key: string]: any } = {
    statusID: {inq: [StatusEnum.ACTIVE, StatusEnum.INACTIVE]}
  };
  urlCount:number = 0;
  urlList: EndpointI[] = [];
  urlFilter: { [key: string]: any } = {};
  subscriptions: Subscription = new Subscription();
  constructor(
    private readonly _urlhttps:UrlHttpsService,
    private _toast: ToastService,
    private _spinner: SpinnerService,
  ) { }

  ngOnInit(): void {
    this.getUrlList();
  }
  getUrlList() {
    this._spinner.show("Fetching URL list...")
    this.subscriptions.add(
      this._urlhttps.fetchAllUrls(this.pageSize,this.currentPage,this.where).subscribe(resp=>{
        if(resp && resp['data'] && resp['data'].length > 0){
          this.urlList = resp['data'].map(url =>{
            if(url.roleID && resp['relationData'] && resp['relationData'].role){
              url.roleID = url.roleID.map(urlId=>{
                let roleData =  resp['relationData'].role[urlId] || "";
                return roleData
              })
            }
            return url
          })
          }else{
          this.urlList = []
        }
        this.urlCount = resp.count;
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
    this.getUrlList();
  }
  onSearchChange(searchString: string) {
    this.searchString = searchString;
    if (this.searchString) {
      this.where.search = searchString;
    } else {
      delete this.where.search;
    }
    this.currentPage = 1;
    this.getUrlList()
  }
  onStatusUpdate(url){
    this.subscriptions.add(
      this._urlhttps.deleteEndpoint(url).subscribe(
        (resp: any) => {
          this.getUrlList();
          this._toast.success("Url Delete Sucessfully")
        },
        (err) => {
          this._toast.error(err.error.message)
        }
      )
    );
  }
}
