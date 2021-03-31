import { Component, OnInit } from '@angular/core';
import { UserBloodBankDonateHttpService } from './services/user-blood-bank-donate-http.service';


import { Subscription } from 'rxjs';
import { ButtonOptionsI } from '@shared/models/titlebar.model';
import { API_CONFIG} from '@const/api.constant';
import { UserBloodBankDonateI } from '../user-blood-bank-donate/models/user-blood-bank-donate'
import { SpinnerService } from '@shared/services/spinner.service';
import { ToastService } from '@shared/services/toast.service';
import { StatusEnum } from '@const/api.constant';

@Component({
  selector: 'app-user-blood-bank-donate',
  templateUrl: './user-blood-bank-donate.component.html',
  styleUrls: ['./user-blood-bank-donate.component.scss']
})
export class UserBloodBankDonateComponent implements OnInit {

  readonly button: ButtonOptionsI = {
    label: 'Add User Blood Bank Donate',
    routerLink: ['/user-blood-bank-donate/add']
  };
  readonly pageTitle = 'User Blood Bank Donate';
  readonly pageSize = API_CONFIG.pageSize;
  paginationTotalCount = 0;
  currentPage = 1;
  searchString:string;
  where: { [key: string]: any } = {
    statusID: {inq: [StatusEnum.ACTIVE, StatusEnum.INACTIVE]}
  };
  userDonateCount:number = 0;
  userDonateList:UserBloodBankDonateI[] = [];
  userDonateFilter: { [key: string]: any } = {};
  subscriptions: Subscription = new Subscription();
  constructor(
    private readonly _bloodbankDonatehttps:UserBloodBankDonateHttpService,
    private _toast: ToastService,
    private _spinner: SpinnerService,
  ) { }

  ngOnInit(): void {
    this.getuserDonateList()
  }
  getuserDonateList() {
    this._spinner.show("Fetching Admin Users list...")
    this.subscriptions.add(
      this._bloodbankDonatehttps.fetchAlldonateUser(this.pageSize,this.currentPage,this.where).subscribe(resp=>{
        this.userDonateList = resp.data;
        console.log(this.userDonateList);
        
        this.userDonateCount = resp.count
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
    this.getuserDonateList();
  }
  onSearchChange(searchString: string) {
    this.searchString = searchString;
    if (this.searchString) {
      this.where.search = searchString;
    } else {
      delete this.where.search;
    }
    this.currentPage = 1;
    this.getuserDonateList();
  }
  onStatusUpdate(donate){
    this.subscriptions.add(
      this._bloodbankDonatehttps.deletedonateUser(donate).subscribe(
        (resp: any) => {
          this.getuserDonateList();
          this._toast.success("User Blood Donate Delete Sucessfully")
        },
        (err) => {
          this._toast.error(err.error.message)
        }
      )
    );
  }
}
