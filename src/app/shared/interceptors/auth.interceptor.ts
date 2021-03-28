import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';
import { HttpError } from '@const/http.constant';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private _auth: AuthService, private _router: Router) {}

  updateRequestToken(request: HttpRequest<any>) {
    return request.clone({
      setHeaders: {
        'token': this._auth.getToken()
      }
    });
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // If token is present then set header for auth token
    if (this._auth.isUserAuthenticated()) {
      request = this.updateRequestToken(request);
    }

    return next.handle(request).pipe(
      // NOTE: For Token Expired we need to refresh the token
      catchError((error: HttpErrorResponse) => {
        switch (error.status) {
          // Handling token expiry
          case HttpError.TOKEN_EXPIRED:
            let token = error.error.newToken;
            this._auth.setToken(token);
            request = this.updateRequestToken(request);
            return next.handle(request);
            break;
          // Handling unauthorized user
          case HttpError.FORBIDDEN:
            this._router.navigate(['/unauthorized']);
            return new Observable();
            break;
          default:
            throw error.error;
            break;
        }
      }),
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          let newEvent: HttpEvent<any>;
          // alter response here. maybe do the following
          newEvent = event.clone({
            // alter event params here
            body: event.body
          });
          return newEvent;
        }
      })
    );
  }
}
