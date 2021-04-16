import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import get from 'lodash.get';
import set from 'lodash.set';
import { StatusEnum } from '@const/api.constant';
import { UserBloodBankDonateI} from '../../models/user-blood-bank-donate';
import { UserBloodBankDonateHttpService } from '../../services/user-blood-bank-donate-http.service';
import { PAID_STATUS_LIST } from '../../constants/donate.constant'
@Component({
  selector: 'app-user-blood-bank-donate-form',
  templateUrl: './user-blood-bank-donate-form.component.html',
  styleUrls: ['./user-blood-bank-donate-form.component.scss']
})
export class UserBloodBankDonateFormComponent implements OnInit {

  @Input() bloodDonateWrapper:UserBloodBankDonateI;
  @Output() submit: EventEmitter<void> = new EventEmitter<void>();
  @Output() back: EventEmitter<void> = new EventEmitter<void>();
  subscriptions: Subscription = new Subscription();
  bloodDonateForm: FormGroup;
  bloodBankList = [];
  bloodUserList = [];
  roleId:any = [];
  readonly paidList = PAID_STATUS_LIST
  
  constructor(
    private _formBuilder: FormBuilder,
    private _bloodBankDonate:UserBloodBankDonateHttpService
    ) {}

  ngOnInit() {
    this.initBloodDonateForm();
    this.getBloodBankList();
    this.getUserList();
  }
  
  /**
   * @description initiate endpoint form
   * @memberof EndpointFormComponent
   */
   initBloodDonateForm() {
    this.bloodDonateForm = this._formBuilder.group({
      userID: [get(this.bloodDonateWrapper, ['userID'], ''), Validators.required],
      bloodBankID: [get(this.bloodDonateWrapper, ['bloodBankID'], ''), Validators.required],
      paidAmount: [get(this.bloodDonateWrapper, ['paidAmount'], ''), Validators.required],
      paidStatus: [get(this.bloodDonateWrapper, ['paidStatus'], 0), Validators.required],
      requestFor: [get(this.bloodDonateWrapper, ['requestFor'], ''), Validators.required],
      statusID: [
        get(this.bloodDonateWrapper, ['statusID'],StatusEnum.ACTIVE)],
     
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
    let formValue = this.bloodDonateForm.getRawValue();
    set(this.bloodDonateWrapper, ['userID'], formValue['userID']);
    set(this.bloodDonateWrapper, ['bloodBankID'], formValue['bloodBankID']);
    set(this.bloodDonateWrapper, ['paidAmount'], formValue['paidAmount']);
    set(this.bloodDonateWrapper, ['requestFor'], formValue['requestFor']);
    set(this.bloodDonateWrapper, ['paidStatus'], formValue['paidStatus']);
    set(this.bloodDonateWrapper, ['statusID'], formValue['statusID']);
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
  paidStatus(status){
    console.log(status);
    this.bloodDonateForm.patchValue({
      paidStatus:status.key
    })
  }
/**
   * @description emit back click
   * @memberof EndpointFormComponent
   */
 onBackClick() {
  this.back.emit();
}

}
