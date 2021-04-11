import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import get from 'lodash.get';
import set from 'lodash.set';
import { StatusEnum } from '@const/api.constant';
import { AdminuserI} from '../../models/adminuser.model';
import { UrlHttpsService } from '../../../url/services/url-https.service';
@Component({
  selector: 'app-admin-users-form',
  templateUrl: './admin-users-form.component.html',
  styleUrls: ['./admin-users-form.component.scss']
})
export class AdminUsersFormComponent implements OnInit {

  @Input() adminUserWrapper:AdminuserI;
  @Output() submit: EventEmitter<void> = new EventEmitter<void>();
  @Output() back: EventEmitter<void> = new EventEmitter<void>();
  subscriptions: Subscription = new Subscription();
  adminUserForm: FormGroup;
  roleId:any = [];
  roleList = [];
  constructor(
    private _formBuilder: FormBuilder,
    private _urlhttps: UrlHttpsService
    ) {}

  ngOnInit() {
    this.initAdminUserForm();
    this.getRoleList();
  }
  
  /**
   * @description initiate endpoint form
   * @memberof EndpointFormComponent
   */
   initAdminUserForm() {
    this.adminUserForm = this._formBuilder.group({
      firstName: [get(this.adminUserWrapper, ['firstName'], ''), Validators.required],
      lastName: [get(this.adminUserWrapper, ['lastName'], ''), Validators.required],
      phoneNumber: [get(this.adminUserWrapper, ['phoneNumber'], ''), Validators.required],
      email: [get(this.adminUserWrapper, ['email'], ''), [Validators.required, Validators.email]],
      password:[get(this.adminUserWrapper, ['password'], ''), Validators.required],
      roleID: [get(this.adminUserWrapper, ['roleID'], ''), Validators.required],
      statusID: [
        get(this.adminUserWrapper, ['statusID'],StatusEnum.ACTIVE)],
     
    });
  }

  /**
   * @description on submit, map to wrapper and emit submit event
   * @memberof EndpointFormComponent
   */
  onSubmit() {
    this.mapToWrapper();
    this.submit.emit();
  }

  /**
   * @description map form value to wrapper
   * @memberof EndpointFormComponent
   */
  mapToWrapper() {
    let formValue = this.adminUserForm.getRawValue();
    set(this.adminUserWrapper, ['firstName'], formValue['firstName']);
    set(this.adminUserWrapper, ['lastName'], formValue['lastName']);
    set(this.adminUserWrapper, ['phoneNumber'], formValue['phoneNumber']);
    set(this.adminUserWrapper, ['email'], formValue['email']);
    set(this.adminUserWrapper, ['statusID'], formValue['statusID']);
    set(this.adminUserWrapper, ['password'], formValue['password']);
    set(this.adminUserWrapper, ['roleID'], formValue['roleID']);
  }
  getRoleList() {
    this.subscriptions.add(
      this._urlhttps.fetchAllRole().subscribe(resp=>{
       this.roleList = resp.data;
      })
    )  
  }
/**
   * @description emit back click
   * @memberof EndpointFormComponent
   */
 onBackClick() {
  this.back.emit();
}

}
