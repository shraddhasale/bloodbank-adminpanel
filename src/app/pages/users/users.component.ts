import { Component, OnInit } from '@angular/core';
import { UserHttpService } from './services/user-http.service';


import { Subscription } from 'rxjs';
import { ButtonOptionsI } from '@shared/models/titlebar.model';
import { EndpointI } from '../url/models/endpoint.model';
import { API_CONFIG} from '@const/api.constant';
import { SpinnerService } from '@shared/services/spinner.service';
import { ToastService } from '@shared/services/toast.service';
import { StatusEnum } from '@const/api.constant';
import { BreadcrumbI } from '@shared/models/titlebar.model';
import { USERS_BREADCRUMSLIST } from '@const/breadcrumb.constant';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  readonly button: ButtonOptionsI = {
    label: 'Add New User',
    routerLink: ['/users/add']
  };
  readonly breadcrumbList: BreadcrumbI[] = USERS_BREADCRUMSLIST.listing;
  readonly pageTitle = 'Users';
  readonly pageSize = API_CONFIG.pageSize;
  paginationTotalCount = 0;
  currentPage = 1;
  searchString:string;
  where: { [key: string]: any } = {
    statusID: {inq: [StatusEnum.ACTIVE, StatusEnum.INACTIVE]}
  };
  userCount:number = 0;
  userList: EndpointI[] = [];
 
  subscriptions: Subscription = new Subscription();
  constructor(
    private readonly _userhttps:UserHttpService,
    private _toast: ToastService,
    private _spinner: SpinnerService,
  ) { }

  ngOnInit(): void {
    this.getuserList();
  }
  getuserList() {
    this._spinner.show("Fetching User list...")
    this.subscriptions.add(
      this._userhttps.fetchAllUsers(this.pageSize,this.currentPage,this.where).subscribe(resp=>{
        this.userList = resp.data
        this.userCount = resp.count;
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
    this.getuserList();
  }
  onSearchChange(searchString: string) {
    this.searchString = searchString;
    if (this.searchString) {
      this.where.search = searchString;
    } else {
      delete this.where.search;
    }
    this.currentPage = 1;
    this.getuserList()
  }
  onStatusUpdate(User){
    this.subscriptions.add(
      this._userhttps.deleteUser(User).subscribe(
        (resp: any) => {
          this.getuserList();
          this._toast.success("User Delete Sucessfully")
        },
        (err) => {
          this._toast.error(err.error.message)
        }
      )
    );
  }
}



