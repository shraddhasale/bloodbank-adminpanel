import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import get from 'lodash.get';
import set from 'lodash.set';
import { BloodBankI} from '../../models/blood-bank.model';
import { StatusEnum } from '@const/api.constant';
@Component({
  selector: 'app-blood-bank-form',
  templateUrl: './blood-bank-form.component.html',
  styleUrls: ['./blood-bank-form.component.scss']
})
export class BloodBankFormComponent implements OnInit {

  @Input() bloodBankWrapper:BloodBankI;
  @Output() submit: EventEmitter<void> = new EventEmitter<void>();
  @Output() back: EventEmitter<void> = new EventEmitter<void>();
  subscriptions: Subscription = new Subscription();
  bloodBankForm: FormGroup;
  constructor(
    private _formBuilder: FormBuilder,
    ) {}

  ngOnInit() {
    this.initbloodBankForm();
  }
  
  /**
   * @description initiate endpoint form
   * @memberof EndpointFormComponent
   */
   initbloodBankForm() {
    this.bloodBankForm = this._formBuilder.group({
      firstName: [get(this.bloodBankWrapper, ['firstName'], ''), Validators.required],
      lastName: [get(this.bloodBankWrapper, ['lastName'], ''), Validators.required],
      phoneNumber: [get(this.bloodBankWrapper, ['phoneNumber'], ''), Validators.required],
      email: [get(this.bloodBankWrapper, ['email'], ''), Validators.required],
      address: this._formBuilder.group({
        country:[get(this.bloodBankWrapper,['country'], '')],
        state:[get(this.bloodBankWrapper, ['state'], '')],
        city:[get(this.bloodBankWrapper, ['city'], '')],
        pinCode:[get(this.bloodBankWrapper, ['pinCode'], '')],
        landMark:[get(this.bloodBankWrapper, ['landMark'], '')],
        location:[get(this.bloodBankWrapper, ['location'], '')],
      }),
      statusID: [
        get(this.bloodBankWrapper, ['statusID'],StatusEnum.ACTIVE)],
    });
  }

  /**
   * @description on submit, map to wrapper and emit submit event
   * @memberof EndpointFormComponent
   */
  onSubmit() {
    this.submit.emit(this.bloodBankForm.value);
  }

  /**
   * @description map form value to wrapper
   * @memberof EndpointFormComponent
   */
  mapToWrapper() {
    let formValue = this.bloodBankForm.getRawValue();
    set(this.bloodBankWrapper, ['firstName'], formValue['firstName']);
    set(this.bloodBankWrapper, ['lastName'], formValue['lastName']);
    set(this.bloodBankWrapper, ['phoneNumber'], formValue['phoneNumber']);
    set(this.bloodBankWrapper, ['email'], formValue['email']);
    set(this.bloodBankWrapper, ['statusID'], formValue['statusID']);
   }

 
/**
   * @description emit back click
   * @memberof EndpointFormComponent
   */
 onBackClick() {
  this.back.emit();
}

}

