import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Rxjs
import { Subscription } from 'rxjs';
import { RoleI} from '../models/role.model';
import { RoleHttpService } from '../services/role-http.service'
import { SpinnerService } from '@shared/services/spinner.service';
import { ToastService } from '@shared/services/toast.service';
import { BreadcrumbI } from '@shared/models/titlebar.model';
import { ROLE_BREADCRUMSLIST } from '@const/breadcrumb.constant';
@Component({
  selector: 'app-edit-role',
  templateUrl: './edit-role.component.html',
  styleUrls: ['./edit-role.component.scss']
})
export class EditRoleComponent implements OnInit,OnDestroy {
  readonly breadcrumbList: BreadcrumbI[] = ROLE_BREADCRUMSLIST.edit;
  readonly pageTitle = 'Edit Role';
  roleWrapper: RoleI;
  roleID:string;
  private subscriptions: Subscription = new Subscription();

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _roleHttp: RoleHttpService,
    private _toast: ToastService,
    private _spinner: SpinnerService,
  ) {
    this.roleID = this._route.snapshot.params.id;
  }

  ngOnInit() {
    this.roleGetByID();
  }
  roleGetByID(){
    this._spinner.show("Fetching role ...");
    this.subscriptions.add(
      this._roleHttp.fetchRoleById(this.roleID)
      .subscribe(
        (resp) => {
         this.roleWrapper = resp;
        this._spinner.hide();
        },
        err => {
          this._spinner.hide();
          this._toast.error(err.error.message, 'role');
        }
      )
    );
  }
  onRoleSubmit(){
    let roleId = this.roleWrapper.id;
    if(this.roleWrapper.statusID === false){
      this.roleWrapper.statusID = 0
    }else if(this.roleWrapper.statusID === true){
      this.roleWrapper.statusID = 1;
    }
    delete this.roleWrapper.id;
    delete this.roleWrapper.createdAt;
    delete this.roleWrapper.updatedAt;
    this.subscriptions.add(
      this._roleHttp.updateRole(this.roleWrapper,roleId)
      .subscribe(
        (resp) => {
          this._toast.success('Role Updated Sucessfully');
        this.redirectToRoleListing();
        },
        err => {
          this._toast.error(err.error.message, 'role');
        }
      )
    );

  }

  redirectToRoleListing() {
    this._router.navigate(['/role']);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
    this._spinner.hide();
  }

}
