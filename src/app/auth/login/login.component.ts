import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';



import { take } from 'rxjs/operators';
import { Subscription } from 'rxjs';

import { UserI } from '@shared/models/user.model';

import { LoginHttpService } from './login-http.service';


import { LOCAL_STORAGE_KEY } from '@const/storage-key.constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoading = false;
  errorMessage: string;
  invalidLogin = false;

  private readonly subscriptions = new Subscription();

  constructor(
    private readonly _loginHttp: LoginHttpService,
    private readonly _router: Router,
    
  ) {}

  ngOnInit() {
  }

  
  signOut(): void {
    // this.authService.signOut();
  }

 
  onLoginClick(username: string, password: string) {
    this.isLoading = true;
    this.invalidLogin = false;
    this.subscriptions.add(
      this._loginHttp
        .login(username, password)
        .pipe(take(1))
        .subscribe(
          (data: UserI) => {
            this.updateLocalStorage(data);
          },
          (err) => {
            this.isLoading = false;
            this.invalidLogin = true;
            console.log(err);
            this.errorMessage = err.error.message;
            console.error('Login Error ==> ', err);
          }
        )
    );
  }

  updateLocalStorage(data: UserI) {
    localStorage.setItem(LOCAL_STORAGE_KEY.auth.user, JSON.stringify(data));
    this._router.navigate(['/']);
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
