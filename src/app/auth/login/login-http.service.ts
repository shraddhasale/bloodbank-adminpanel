import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '@env/environment';

import { API_ENDPOINT } from '@const/api.constant';
import { AuthService } from '@shared/services/auth.service';
import { UserI } from '@shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginHttpService {
  private readonly baseUrl = environment.websiteNodeHost;

  constructor(private _http: HttpClient, private _auth: AuthService) {}

  /**
   *@description it helps user to login by calling API which sends back user data and token
   *
   * @param {string} username
   * @param {string} password
   * @memberof LoginHttpService
   */
  login(username: string, password: string) {
    const headers = new HttpHeaders().set('apiKey', environment.apiKey);
    let loginObs$ = this._http.post(
      this.baseUrl + API_ENDPOINT.auth.login,
      { phoneNumber: username, password },
      { headers }
    );
    return loginObs$;
  }

  /**
   *@description it clears out the user data and token from local storage.
   *
   * @memberof LoginHttpService
   */
  logout() {
    this._auth.clearCurrentUser();
  }

  
}
