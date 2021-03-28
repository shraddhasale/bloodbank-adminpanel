import { Injectable } from '@angular/core';
import { Router, CanLoad, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivateChild {
  constructor(
    private router: Router,
    private _auth: AuthService
  ) { }

  canLoad() {
    if (this._auth.isUserAuthenticated()) {
      return true;
    }
    this.router.navigate(['/auth']);
    return false;
  }


  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this._auth.isUserAuthenticated()) {
      return true;
    }
    this.router.navigate(['/auth']);
    return false;
  }
}
