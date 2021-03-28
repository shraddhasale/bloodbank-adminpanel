import { Component, OnInit } from '@angular/core';
import { AdminuserHttpService } from './services/adminuser-http.service';


import { Subscription } from 'rxjs';
import { ButtonOptionsI } from '@shared/models/titlebar.model';
import { API_CONFIG} from '@const/api.constant';
import { AdminuserI } from '../admin-users/models/adminuser.model'
import { SpinnerService } from '@shared/services/spinner.service';
import { ToastService } from '@shared/services/toast.service';
import { StatusEnum } from '@const/api.constant';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent implements OnInit {
  readonly button: ButtonOptionsI = {
    label: 'Add New User',
    routerLink: ['/admin-users/add']
  };
  readonly pageTitle = 'Admin Users';
  readonly pageSize = API_CONFIG.pageSize;
  paginationTotalCount = 0;
  currentPage = 1;
  searchString:string;
  where: { [key: string]: any } = {
    statusID: {inq: [StatusEnum.ACTIVE, StatusEnum.INACTIVE]}
  };
  adminCount:number = 0;
  adminList:AdminuserI[] = [];
  adminFilter: { [key: string]: any } = {};
  subscriptions: Subscription = new Subscription();
  constructor(
    private readonly _adminUserhttps:AdminuserHttpService,
    private _toast: ToastService,
    private _spinner: SpinnerService,
  ) { }

  ngOnInit(): void {
    this.getAdminUserList()
  }
  getAdminUserList() {
    this._spinner.show("Fetching Admin Users list...")
    this.subscriptions.add(
      this._adminUserhttps.fetchAllAdminUsers(this.pageSize,this.currentPage,this.where).subscribe(resp=>{
        this.adminList = resp.data;
        this.adminCount = resp.count
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
    this.getAdminUserList();
  }
  onSearchChange(searchString: string) {
    this.searchString = searchString;
    if (this.searchString) {
      this.where.search = searchString;
    } else {
      delete this.where.search;
    }
    this.currentPage = 1;
    this.getAdminUserList();
  }
  onStatusUpdate(admin){
    this.subscriptions.add(
      this._adminUserhttps.deleteAdminUser(admin).subscribe(
        (resp: any) => {
          this.getAdminUserList();
          this._toast.success("Admin User Delete Sucessfully")
        },
        (err) => {
          this._toast.error(err.error.message)
        }
      )
    );
  }
}
