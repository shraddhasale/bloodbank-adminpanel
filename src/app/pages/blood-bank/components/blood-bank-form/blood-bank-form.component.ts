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
      email: [get(this.bloodBankWrapper, ['email'], ''), [Validators.required, Validators.email]],
      address: this._formBuilder.group({
        country:[get(this.bloodBankWrapper,'address.country', '')],
         state:[get(this.bloodBankWrapper, 'address.state', '')],
        city:[get(this.bloodBankWrapper, 'address.city', '')],
        pinCode:[get(this.bloodBankWrapper, 'address.pinCode', '')],
        landMark:[get(this.bloodBankWrapper, 'address.landMark', '')],
        location:[get(this.bloodBankWrapper, 'address.location', '')],
      }),
      thumbnail:[get(this.bloodBankWrapper, ['thumbnail'], 'string')],
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
   * @description emit back click
   * @memberof EndpointFormComponent
   */
 onBackClick() {
  this.back.emit();
}

}

