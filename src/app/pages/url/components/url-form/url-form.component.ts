import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import get from 'lodash.get';
import set from 'lodash.set';
import { EndpointI } from '../../models/endpoint.model'
import {VERB_TYPE_LIST} from '../../constants/endpoint.constant';
import { UrlHttpsService } from '../../services/url-https.service';
import { StatusEnum } from '@const/api.constant';
@Component({
  selector: 'app-url-form',
  templateUrl: './url-form.component.html',
  styleUrls: ['./url-form.component.scss']
})
export class UrlFormComponent implements OnInit {

  @Input() urlWrapper: EndpointI;
  @Output() submit: EventEmitter<void> = new EventEmitter<void>();
  @Output() back: EventEmitter<void> = new EventEmitter<void>();
  subscriptions: Subscription = new Subscription();
  urlForm: FormGroup;
  roleList = [];
  roleId:any = [];
  readonly VerbList: string[] = VERB_TYPE_LIST
  
  constructor(
    private _formBuilder: FormBuilder,
    private _urlhttps: UrlHttpsService
    ) {}

  ngOnInit() {
    this.initEndpointForm();
    this.getRoleList();
    
  }
  

  /**
   * @description initiate endpoint form
   * @memberof EndpointFormComponent
   */
  initEndpointForm() {
    this.urlForm = this._formBuilder.group({
      name: [get(this.urlWrapper, ['name'], ''), Validators.required],
      endPoint: [
        get(this.urlWrapper, ['endPoint'], ''),
        Validators.required
      ],
      verb: [get(this.urlWrapper, ['verb'], ''),Validators.required],
      roleID: [get(this.urlWrapper, ['roleID'], '')],
      statusID: [get(this.urlWrapper, ['statusID'], StatusEnum.ACTIVE)],
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
    let formValue = this.urlForm.getRawValue();
    set(this.urlWrapper, ['name'], formValue['name']);
    set(this.urlWrapper, ['endPoint'], formValue['endPoint']);
    set(this.urlWrapper, ['verb'], formValue['verb']);
    set(this.urlWrapper, ['statusID'], formValue['statusID']);
    set(this.urlWrapper, ['roleID'], this.roleId);
  }

  getRoleList() {
    this.subscriptions.add(
      this._urlhttps.fetchAllRole().subscribe(resp=>{
       this.roleList = resp.data;
      })
    )  
  }
  onRoleChange(role){
    if(role){
      this.roleId = role.map(resp=>{
        return resp.id
       })
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
