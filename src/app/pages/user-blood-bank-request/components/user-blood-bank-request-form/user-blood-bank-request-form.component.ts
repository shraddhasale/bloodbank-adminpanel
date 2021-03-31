import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import get from 'lodash.get';
import set from 'lodash.set';
import { StatusEnum } from '@const/api.constant';
import { UserBloodBankRequestI} from '../../models/user-blood-bank-request';
import { UserBloodBankDonateHttpService } from '../../../user-blood-bank-donate/services/user-blood-bank-donate-http.service';
@Component({
  selector: 'app-user-blood-bank-request-form',
  templateUrl: './user-blood-bank-request-form.component.html',
  styleUrls: ['./user-blood-bank-request-form.component.scss']
})
export class UserBloodBankRequestFormComponent implements OnInit {

  @Input() bloodRequestWrapper:UserBloodBankRequestI;
  @Output() submit: EventEmitter<void> = new EventEmitter<void>();
  @Output() back: EventEmitter<void> = new EventEmitter<void>();
  subscriptions: Subscription = new Subscription();
  bloodRequestForm: FormGroup;
  bloodBankList = [];
  bloodUserList = [];
  
  
  constructor(
    private _formBuilder: FormBuilder,
    private _bloodBankDonate:UserBloodBankDonateHttpService
    ) {}

  ngOnInit() {
    this.initbloodRequestForm();
    this.getBloodBankList();
    this.getUserList();
  }
  
  /**
   * @description initiate endpoint form
   * @memberof EndpointFormComponent
   */
   initbloodRequestForm() {
    this.bloodRequestForm = this._formBuilder.group({
      userID: [get(this.bloodRequestWrapper, ['userID'], ''), Validators.required],
      bloodBankID: [get(this.bloodRequestWrapper, ['bloodBankID'], ''), Validators.required],
      requestFor: [get(this.bloodRequestWrapper, ['requestFor'], ''), Validators.required],
      isHospitalize: [get(this.bloodRequestWrapper, ['isHospitalize'], ''), Validators.required],
      statusID: [
        get(this.bloodRequestWrapper, ['statusID'],StatusEnum.ACTIVE)],
     
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
    let formValue = this.bloodRequestForm.getRawValue();
    set(this.bloodRequestWrapper, ['userID'], formValue['userID']);
    set(this.bloodRequestWrapper, ['bloodBankID'], formValue['bloodBankID']);
    set(this.bloodRequestWrapper, ['requestFor'], formValue['requestFor']);
    set(this.bloodRequestWrapper, ['isHospitalize'], formValue['isHospitalize']);
    set(this.bloodRequestWrapper, ['statusID'], formValue['statusID']);
  }

  getBloodBankList() {
    this.subscriptions.add(
      this._bloodBankDonate.fetchAllBloodBank().subscribe(resp=>{
       this.bloodBankList = resp.data;
      })
    )  
  }
  getUserList(){
    this.subscriptions.add(
      this._bloodBankDonate.fetchAllUser().subscribe(resp=>{
       this.bloodUserList = resp.data;
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

