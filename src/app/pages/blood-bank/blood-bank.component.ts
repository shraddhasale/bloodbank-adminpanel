import { Component, OnInit } from '@angular/core';
import { BloodBankHttpService } from './services/blood-bank-http.service';


import { Subscription } from 'rxjs';
import { ButtonOptionsI } from '@shared/models/titlebar.model';
import { BloodBankI } from './models/blood-bank.model';
import { API_CONFIG} from '@const/api.constant';
import { SpinnerService } from '@shared/services/spinner.service';
import { ToastService } from '@shared/services/toast.service';
import { StatusEnum } from '@const/api.constant';
import { BreadcrumbI } from '@shared/models/titlebar.model';
import { BLOOD_BANK_BREADCRUMSLIST } from '@const/breadcrumb.constant';
@Component({
  selector: 'app-blood-bank',
  templateUrl: './blood-bank.component.html',
  styleUrls: ['./blood-bank.component.scss']
})
export class BloodBankComponent implements OnInit {
  readonly breadcrumbList: BreadcrumbI[] = BLOOD_BANK_BREADCRUMSLIST.listing;
  readonly button: ButtonOptionsI = {
    label: 'Add Blood Bank',
    routerLink: ['/blood-bank/add']
  };
  readonly pageTitle = 'Blood Bank';
  readonly pageSize = API_CONFIG.pageSize;
  paginationTotalCount = 0;
  currentPage = 1;
  searchString:string;
  where: { [key: string]: any } = {
    statusID: {inq: [StatusEnum.ACTIVE, StatusEnum.INACTIVE]}
  };
  bloodbankCount:number = 0;
  bloodbankList: BloodBankI[] = [];
 
  subscriptions: Subscription = new Subscription();
  constructor(
    private readonly _bloodBankhttps:BloodBankHttpService,
    private _toast: ToastService,
    private _spinner: SpinnerService,
  ) { }

  ngOnInit(): void {
    this.getBloodBankList();
  }
  getBloodBankList() {
    this._spinner.show("Fetching Blood Bank list...")
    this.subscriptions.add(
      this._bloodBankhttps.fetchAllBloodBank(this.pageSize,this.currentPage,this.where).subscribe(resp=>{
        this.bloodbankList = resp.data
        this.bloodbankCount = resp.count;
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
    this.getBloodBankList();
  }
  onSearchChange(searchString: string) {
    this.searchString = searchString;
    if (this.searchString) {
      this.where.search = searchString;
    } else {
      delete this.where.search;
    }
    this.currentPage = 1;
    this.getBloodBankList()
  }
  onStatusUpdate(bloodbank){
    this.subscriptions.add(
      this._bloodBankhttps.deleteBloodBank(bloodbank).subscribe(
        (resp: any) => {
          this.getBloodBankList();
          this._toast.success("Blood Bank Delete Sucessfully")
        },
        (err) => {
          this._toast.error(err.error.message)
        }
      )
    );
  }
}






