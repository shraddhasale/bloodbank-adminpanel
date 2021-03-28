import { Component, OnInit } from '@angular/core';
import { RoleHttpService } from './services/role-http.service';


import { Subscription } from 'rxjs';
import { ButtonOptionsI } from '@shared/models/titlebar.model';
import { RoleI } from '../role/models/role.model';
import { API_CONFIG} from '@const/api.constant';
import { SpinnerService } from '@shared/services/spinner.service';
import { ToastService } from '@shared/services/toast.service';
import { StatusEnum } from '@const/api.constant';
@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {

  readonly button: ButtonOptionsI = {
    label: 'Add New Role',
    routerLink: ['/role/add']
  };
  readonly pageTitle = 'Role';
  readonly pageSize = API_CONFIG.pageSize;
  paginationTotalCount = 0;
  currentPage = 1;
  searchString:string;
  where: { [key: string]: any } = {
    statusID: {inq: [StatusEnum.ACTIVE, StatusEnum.INACTIVE]}
  };
  roleCount:number = 0;
  roleList: RoleI[] = [];
  roleFilter: { [key: string]: any } = {};
  subscriptions: Subscription = new Subscription();
  constructor(
    private readonly _rolehttps:RoleHttpService,
    private _toast: ToastService,
    private _spinner: SpinnerService,
  ) { }

  ngOnInit(): void {
    this.getUserList();
  }
  getUserList() {
    this.subscriptions.add(
      this._rolehttps.fetchAllRole(this.pageSize,this.currentPage,this.where).subscribe(resp=>{
        this.roleList = resp.data
         this.roleCount = resp.count
      })
    )  
  }
  onPageChange(currentPage: number) {
    this.currentPage = currentPage;
    this.getUserList();
  }
  onSearchChange(searchString: string) {
    this.searchString = searchString;
    if (this.searchString) {
      this.where.search = searchString;
    } else {
      delete this.where.search;
    }
    this.currentPage = 1;
    this.getUserList()
  }
  onStatusUpdate(role){
    console.log(role);
    
    this.subscriptions.add(
      this._rolehttps.deleteEndpoint(role).subscribe(
        (resp: any) => {
          this.getUserList();
          this._toast.success("Role Delete Sucessfully")
        },
        (err) => {
          this._toast.error(err.error.message);
        }
      )
    );
  }

}
