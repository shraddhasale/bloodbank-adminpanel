import { Component } from '@angular/core';

import { AuthService } from '@shared/services/auth.service';
import { LOCAL_STORAGE_KEY } from '@const/storage-key.constant';
import {CookieService} from 'ngx-cookie-service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'plixxo-admin-panel';
  constructor(
    private _auth: AuthService,
    private _cs: CookieService,
  ) {}
  ngOnInit() {
    
    // Note: check if page is refreshed or user came from another route to handle browser/tab close
    if (window.performance) {
      if (performance.navigation.type !== 1) {
        this.clearLocalStorage();
      }
    }
  }

  clearLocalStorage() {
    const currentUser = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY.auth.user)
    );
    localStorage.clear();
    this._auth.setCurrentUser(currentUser);
  }
}
