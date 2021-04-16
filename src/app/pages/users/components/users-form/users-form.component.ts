import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import get from 'lodash.get';
import set from 'lodash.set';
import { StatusEnum } from '@const/api.constant';
import { UserI} from '../../models/user.model';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss']
})
export class UsersFormComponent implements OnInit {

  @Input() userWrapper:UserI;
  @Output() submit: EventEmitter<void> = new EventEmitter<void>();
  @Output() back: EventEmitter<void> = new EventEmitter<void>();
  subscriptions: Subscription = new Subscription();
  userForm: FormGroup;
  roleList = [];
  roleId:any = [];
  
  
  constructor(
    private _formBuilder: FormBuilder,
    ) {}

  ngOnInit() {
    this.inituserForm();
  }
  
  /**
   * @description initiate endpoint form
   * @memberof EndpointFormComponent
   */
   inituserForm() {
    this.userForm = this._formBuilder.group({
      firstName: [get(this.userWrapper, ['firstName'], ''), Validators.required],
      lastName: [get(this.userWrapper, ['lastName'], ''), Validators.required],
      phoneNumber: [get(this.userWrapper, ['phoneNumber'], ''), Validators.required],
      email: [get(this.userWrapper, ['email'], ''), Validators.required],
      password:[get(this.userWrapper, ['password'], ''), Validators.required],
      username:[get(this.userWrapper, ['username'], ''), Validators.required],
      gender:[get(this.userWrapper, ['gender'], ''), Validators.required],
      dob:[get(this.userWrapper, ['dob'], ''), Validators.required],
      nationality:[get(this.userWrapper, ['nationality'], ''), Validators.required],
      panCard:[get(this.userWrapper, ['panCard'], ''), Validators.required],
      adharCard:[get(this.userWrapper, ['adharCard'], ''), Validators.required],
      bloodgroup:[get(this.userWrapper, ['bloodgroup'], ''), ],

      address: this._formBuilder.group({
        country:[get(this.userWrapper,'address.country', '')],
         state:[get(this.userWrapper,'address.state', '')],
        city:[get(this.userWrapper, 'address.city', '')],
        pinCode:[get(this.userWrapper, 'address.pinCode', '')],
        landMark:[get(this.userWrapper, 'address.landMark', '')],
        location:[get(this.userWrapper, 'address.location', '')],
      }),
      
      statusID: [
        get(this.userWrapper, ['statusID'],StatusEnum.ACTIVE)
      ],
     
    });
   }

  /**
   * @description on submit, map to wrapper and emit submit event
   * @memberof EndpointFormComponent
   */
  onSubmit() {
    this.submit.emit(this.userForm.value);
  }

 

 
/**
   * @description emit back click
   * @memberof EndpointFormComponent
   */
 onBackClick() {
  this.back.emit();
}

}

