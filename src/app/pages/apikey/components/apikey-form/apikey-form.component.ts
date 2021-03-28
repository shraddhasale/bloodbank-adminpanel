import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import get from 'lodash.get';
import set from 'lodash.set';
import { StatusEnum } from '@const/api.constant';
import { ApikeyI} from '../../models/apikey.model';
import { ApikeyHttpService } from '../../services/apikey-http.service';
@Component({
  selector: 'app-apikey-form',
  templateUrl: './apikey-form.component.html',
  styleUrls: ['./apikey-form.component.scss']
})
export class ApikeyFormComponent implements OnInit {

  @Input() apiKeyWrapper:ApikeyI;
  @Output() submit: EventEmitter<void> = new EventEmitter<void>();
  @Output() back: EventEmitter<void> = new EventEmitter<void>();
  subscriptions: Subscription = new Subscription();
  apiKeyForm: FormGroup;
  apiKeyList = [];
  apiKeyId:any = [];
  roleList = [];
  roleId:string = "";
  
  constructor(
    private _formBuilder: FormBuilder,
    private _apiKeyhttps: ApikeyHttpService
    ) {}

  ngOnInit() {
    this.initapiKeyForm();
    this.getRoleList();
  }
  
  /**
   * @description initiate endpoint form
   * @memberof EndpointFormComponent
   */
   initapiKeyForm() {
    this.apiKeyForm = this._formBuilder.group({
      name: [get(this.apiKeyWrapper, ['name'], ''), Validators.required],
      apikey: [get(this.apiKeyWrapper, ['apikey'], ''), Validators.required],
      roleID: [get(this.apiKeyWrapper, ['roleID'], '')],
      statusID: [
        get(this.apiKeyWrapper, ['statusID'],StatusEnum.ACTIVE)],
     
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
    let formValue = this.apiKeyForm.getRawValue();
    set(this.apiKeyWrapper, ['name'], formValue['name']);
    set(this.apiKeyWrapper, ['apikey'], formValue['apikey']);
    set(this.apiKeyWrapper, ['statusID'], formValue['statusID']);
    set(this.apiKeyWrapper, ['roleID'], this.roleId);
  }
  getRoleList() {
    this.subscriptions.add(
      this._apiKeyhttps.fetchAllRole().subscribe(resp=>{
       this.roleList = resp.data;
      })
    )  
  }
  onRoleChange(role){
    if(role){
      this.roleId = role.id
    }
  }
  
 
/**
   * @description emit back click
   * @memberof EndpointFormComponent
   */
 onBackClick() {
  this.back.emit();
}

}
