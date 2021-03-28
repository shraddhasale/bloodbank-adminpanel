import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

// Rxjs
import { Subscription } from 'rxjs';
import { RoleI} from '../models/role.model';
import { RoleHttpService } from '../services/role-http.service';
import { StatusEnum } from '@const/api.constant';
import { ToastService } from '@shared/services/toast.service';
@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.scss']
})
export class AddRoleComponent implements OnInit,OnDestroy {

  roleWrapper: RoleI;
  private subscriptions: Subscription = new Subscription();

  constructor(
    private _router: Router,
    private _urlHttp: RoleHttpService,
    private _toast: ToastService
  ) {}

  ngOnInit() {
    this.initiateUrlForm();
  }

  initiateUrlForm() {
    this.roleWrapper = {
      name: '',
      statusID: StatusEnum.ACTIVE
    };
  }

  onRoleSubmit() {
    if(this.roleWrapper.statusID === false){
      this.roleWrapper.statusID = 0
    }else if(this.roleWrapper.statusID === true){
      this.roleWrapper.statusID = 1;
    }
    this.subscriptions.add(
      this._urlHttp.createRole(this.roleWrapper).subscribe(
        (res) => {
          this.redirectToRoleListing();
          this._toast.success(`${this.roleWrapper.name} Created successfully.`);
        },
        (err) => {
          this._toast.error(
            err.error.message,
          );
        }
      )
    );
  }

  redirectToRoleListing() {
    this._router.navigate(['/role']);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
