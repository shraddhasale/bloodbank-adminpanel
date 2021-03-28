import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

// Constant
import { LOCAL_STORAGE_KEY } from '@const/storage-key.constant';

//Models 
import { UserI } from '@shared/models/user.model';

// Services
import { AuthService } from '@shared/services/auth.service';
import { LoginHttpService } from 'src/app/auth/login/login-http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public user: UserI;
  constructor(
    private _router: Router,
    private _auth: AuthService,
    private _loginHttp: LoginHttpService,
    private _cs: CookieService
  ) { }

  ngOnInit(): void {
    this.user = this._auth.getCurrentUser();
  }
  onLogout() {
    this._loginHttp.logout();
    this._router.navigate(['/auth']);
    localStorage.removeItem(LOCAL_STORAGE_KEY.navigation.menuSelected);
    localStorage.removeItem(LOCAL_STORAGE_KEY.navigation.subMenuSelected);
  }
}
