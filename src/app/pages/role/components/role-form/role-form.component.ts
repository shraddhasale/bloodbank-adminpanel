import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import get from 'lodash.get';
import set from 'lodash.set';
import { StatusEnum } from '@const/api.constant';
import { RoleI} from '../../models/role.model';
@Component({
  selector: 'app-role-form',
  templateUrl: './role-form.component.html',
  styleUrls: ['./role-form.component.scss']
})
export class RoleFormComponent implements OnInit {

  @Input() roleWrapper:RoleI;
  @Output() submit: EventEmitter<void> = new EventEmitter<void>();
  @Output() back: EventEmitter<void> = new EventEmitter<void>();
  subscriptions: Subscription = new Subscription();
  roleForm: FormGroup;
  roleList = [];
  roleId:any = [];
  
  
  constructor(
    private _formBuilder: FormBuilder,
    ) {}

  ngOnInit() {
    this.initRoleForm();
  }
  
  /**
   * @description initiate endpoint form
   * @memberof EndpointFormComponent
   */
   initRoleForm() {
    this.roleForm = this._formBuilder.group({
      name: [get(this.roleWrapper, ['name'], ''), Validators.required],
      statusID: [
        get(this.roleWrapper, ['statusID'],StatusEnum.ACTIVE)],
     
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
    let formValue = this.roleForm.getRawValue();
    set(this.roleWrapper, ['name'], formValue['name']);
    set(this.roleWrapper, ['statusID'], formValue['statusID']);
    
  }

 
/**
   * @description emit back click
   * @memberof EndpointFormComponent
   */
 onBackClick() {
  this.back.emit();
}

}
