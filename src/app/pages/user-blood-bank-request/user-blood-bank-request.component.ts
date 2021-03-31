import { Component, OnInit } from '@angular/core';
import { UserBloodBankRequestHttpService } from './services/user-blood-bank-request-http.service';


import { Subscription } from 'rxjs';
import { ButtonOptionsI } from '@shared/models/titlebar.model';
import { API_CONFIG} from '@const/api.constant';
import { UserBloodBankRequestI } from '../user-blood-bank-request/models/user-blood-bank-request'
import { SpinnerService } from '@shared/services/spinner.service';
import { ToastService } from '@shared/services/toast.service';
import { StatusEnum } from '@const/api.constant';

@Component({
  selector: 'app-user-blood-bank-request',
  templateUrl: './user-blood-bank-request.component.html',
  styleUrls: ['./user-blood-bank-request.component.scss']
})
export class UserBloodBankRequestComponent implements OnInit {

  readonly button: ButtonOptionsI = {
    label: 'Add User Blood Bank Request',
    routerLink: ['/user-blood-bank-request/add']
  };
  readonly pageTitle = 'User Blood Bank Request';
  readonly pageSize = API_CONFIG.pageSize;
  paginationTotalCount = 0;
  currentPage = 1;
  searchString:string;
  where: { [key: string]: any } = {
    statusID: {inq: [StatusEnum.ACTIVE, StatusEnum.INACTIVE]}
  };
  userRequestCount:number = 0;
  userRequestList:UserBloodBankRequestI[] = [];
  userRequestFilter: { [key: string]: any } = {};
  subscriptions: Subscription = new Subscription();
  constructor(
    private readonly _bloodbankRequesthttps:UserBloodBankRequestHttpService,
    private _toast: ToastService,
    private _spinner: SpinnerService,
  ) { }

  ngOnInit(): void {
    this.getuserRequestList()
  }
  getuserRequestList() {
    this._spinner.show("Fetching Admin Users list...")
    this.subscriptions.add(
      this._bloodbankRequesthttps.fetchAllRequestUser(this.pageSize,this.currentPage,this.where).subscribe(resp=>{
        this.userRequestList = resp.data;
        this.userRequestCount = resp.count
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
    this.getuserRequestList();
  }
  onSearchChange(searchString: string) {
    this.searchString = searchString;
    if (this.searchString) {
      this.where.search = searchString;
    } else {
      delete this.where.search;
    }
    this.currentPage = 1;
    this.getuserRequestList();
  }
  onStatusUpdate(admin){
    this.subscriptions.add(
      this._bloodbankRequesthttps.deleteRequestUser(admin).subscribe(
        (resp: any) => {
          this.getuserRequestList();
          this._toast.success("Admin User Delete Sucessfully")
        },
        (err) => {
          this._toast.error(err.error.message)
        }
      )
    );
  }
}


