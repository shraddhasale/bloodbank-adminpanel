import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import get from 'lodash.get';
import set from 'lodash.set';
import { StatusEnum } from '@const/api.constant';
import { AdminuserI} from '../../models/adminuser.model';

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
  roleList = [];
  roleId:any = [];
  
  
  constructor(
    private _formBuilder: FormBuilder,
    ) {}

  ngOnInit() {
    this.initAdminUserForm();
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
      email: [get(this.adminUserWrapper, ['email'], ''), Validators.required],
      password:[get(this.adminUserWrapper, ['password'], ''), Validators.required],
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
  }

 
/**
   * @description emit back click
   * @memberof EndpointFormComponent
   */
 onBackClick() {
  this.back.emit();
}

}
