import { Injectable } from '@angular/core';

import { UserI } from '../models/user.model';
import { ToastService } from './toast.service';
import { LOCAL_STORAGE_KEY } from '@const/storage-key.constant';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _toast: ToastService) {}
  /**
   * @description it provides the user object
   * user is saved in session storage and can be accessed directly in each component.
   * But we don't want components to directly access user's details via session storage,
   * hence we created this method
   *
   * @returns {UserI}
   * @memberof AuthService
   */
  getCurrentUser(): UserI {
    const currentUser = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY.auth.user)
    );
    if (!currentUser) {
      this._toast.error('Please login again', 'Invalid User');
    }
    return currentUser;
  }

  /**
   * @description it stores user details in the session storage
   * TODO: Check once the App dev is done, should be avoid using session storage
   * and store user in a private user variable
   *
   * TODO: redirect user to login page if user is invalid
   *
   * @param {UserI} user
   * @memberof AuthService
   */
  setCurrentUser(user: UserI) {
    localStorage.setItem(LOCAL_STORAGE_KEY.auth.user, JSON.stringify(user));
  }

  /**
   * @description it clears the user details from session storage
   *
   * @memberof AuthService
   */
  clearCurrentUser() {
    localStorage.removeItem(LOCAL_STORAGE_KEY.auth.user);
  }

  /**
   * @description it tells whether user is logged in
   *
   * @returns {boolean}
   * @memberof AuthService
   */
  isUserAuthenticated(): boolean {
    return !!this.getToken();
  }

  /**
   * @description it gives access token for current user
   *
   * @returns {string}
   * @memberof AuthService
   */
  getToken(): string {
    const currentUser = this.getCurrentUser();
    if (!currentUser || !currentUser.token) {
      this._toast.error('Please login again', 'Invalid Token');
      return null;
    }
    return currentUser.token;
  }

  /**
   * @description here we are updating the token.
   * We also make sure that user properties other than token
   * should also persist
   *
   * @param {string} token
   * @memberof AuthService
   */
  setToken(token: string) {
    let user = this.getCurrentUser();
    user.token = token;
    this.setCurrentUser(user);
  }

  /**
   * @description it gives a single vendor code assigned for the loggedIn user
   *  TODO: redirect user to login page is vendor code is invalid
   *
   * @returns {string}
   * @memberof AuthService
   */
  getVendorCode(): string {
    const currentUser = this.getCurrentUser();
    if (
      !currentUser || !currentUser.allowedVendorCodes ||
      !currentUser.allowedVendorCodes.length
    ) {
      this._toast.error('Please login again', 'Invalid Vendor Code');
      return null;
    }
    // NOTE: @sumit has made it sure that we will get only single vendor code per user
    // but for future they have kept the data type as array
    return currentUser.allowedVendorCodes[0];
  }

  /**
   * @description it gives the list of countries the current user is allowed to access
   *
   * TODO: if there are no allowed countries then logout and redirect to login screen
   *
   * @returns {string[]}
   * @memberof AuthService
   */
  getUserAllowedCountries(): string[] {
    const currentUser = this.getCurrentUser();
    if (!currentUser.allowedCountries || !currentUser.allowedCountries.length) {
      this._toast.error(
        'User has no access to countries. Please login again',
        'No allowed countries'
      );
      return null;
    }
    return currentUser.allowedCountries;
  }
}
