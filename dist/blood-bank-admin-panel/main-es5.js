(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! c:\project\bloodbank-adminpanel\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "3WbM":
    /*!**************************************************!*\
      !*** ./src/app/shared/services/toast.service.ts ***!
      \**************************************************/

    /*! exports provided: ToastService */

    /***/
    function WbM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastService", function () {
        return ToastService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _models_toast_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../models/toast.model */
      "wQzq");

      var ToastService = /*#__PURE__*/function () {
        function ToastService(_router) {
          var _this = this;

          _classCallCheck(this, ToastService);

          this._router = _router;
          this.pushToastSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.keepAfterRouteChange = true; // clear toast messages on route change unless 'keepAfterRouteChange' flag is true  

          _router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
              if (!_this.keepAfterRouteChange) {
                _this.removeAllToast();
              }
            }
          });
        }
        /**
         * @description It is used to get the observable which sends the Toast Config object
         *
         * @returns
         * @memberof ToastService
         */


        _createClass(ToastService, [{
          key: "getObservable",
          value: function getObservable() {
            return this.pushToastSubject.asObservable();
          }
          /**
           * @description It is used to send toast config to Toast component,
           * which is used to display toast on DOM.
           *
           * @private
           * @param {ToastType} type
           * @param {string} message
           * @param {string} title
           * @memberof ToastService
           */

        }, {
          key: "showToast",
          value: function showToast(type, message, title) {
            var toast = {
              type: type,
              title: title,
              message: message
            };
            this.pushToastSubject.next(toast);
          }
          /**
           * @description it shows the Success toast
           *
           * @param {string} message
           * @param {string} [title='Success']
           * @memberof ToastService
           */

        }, {
          key: "success",
          value: function success(message) {
            var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Success';
            this.showToast(_models_toast_model__WEBPACK_IMPORTED_MODULE_3__["ToastType"].SUCCESS, message, title);
          }
          /**
           * @description it shows the Error toast
           *
           * @param {string} message
           * @param {string} [title='Error']
           * @memberof ToastService
           */

        }, {
          key: "error",
          value: function error(message) {
            var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Error';
            this.showToast(_models_toast_model__WEBPACK_IMPORTED_MODULE_3__["ToastType"].ERROR, message, title);
          }
          /**
           * @description it shows the Info toast
           *
           * @param {string} message
           * @param {string} [title='Info']
           * @memberof ToastService
           */

        }, {
          key: "info",
          value: function info(message) {
            var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Info';
            this.showToast(_models_toast_model__WEBPACK_IMPORTED_MODULE_3__["ToastType"].INFO, message, title);
          }
          /**
           * @description it shows the Warning toast.
           *
           * @param {string} message
           * @param {string} [title='Warning']
           * @memberof ToastService
           */

        }, {
          key: "warning",
          value: function warning(message) {
            var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Warning';
            this.showToast(_models_toast_model__WEBPACK_IMPORTED_MODULE_3__["ToastType"].WARNING, message, title);
          }
          /**
           * @description it clears all the toast from screen
           *
           * @memberof ToastService
           */

        }, {
          key: "removeAllToast",
          value: function removeAllToast() {
            this.pushToastSubject.next();
          }
        }]);

        return ToastService;
      }();

      ToastService.ɵfac = function ToastService_Factory(t) {
        return new (t || ToastService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      ToastService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ToastService,
        factory: ToastService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        websiteNodeHost: 'http://52.66.15.237:3000',
        //websiteNodeHost: 'http://soc-dev.myglamm.net:9057', // baseUrl for node APIs
        apiKey: 'sywSAQ85Q45vwsUcOjQw2kFm4ERpSAE7'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "H06L":
    /*!*********************************************************!*\
      !*** ./src/app/shared/interceptors/auth.interceptor.ts ***!
      \*********************************************************/

    /*! exports provided: AuthInterceptor */

    /***/
    function H06L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
        return AuthInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _const_http_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @const/http.constant */
      "aHYZ");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/auth.service */
      "IYfF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AuthInterceptor = /*#__PURE__*/function () {
        function AuthInterceptor(_auth, _router) {
          _classCallCheck(this, AuthInterceptor);

          this._auth = _auth;
          this._router = _router;
        }

        _createClass(AuthInterceptor, [{
          key: "updateRequestToken",
          value: function updateRequestToken(request) {
            return request.clone({
              setHeaders: {
                'token': this._auth.getToken()
              }
            });
          }
        }, {
          key: "intercept",
          value: function intercept(request, next) {
            var _this2 = this;

            // If token is present then set header for auth token
            if (this._auth.isUserAuthenticated()) {
              request = this.updateRequestToken(request);
            }

            return next.handle(request).pipe( // NOTE: For Token Expired we need to refresh the token
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
              switch (error.status) {
                // Handling token expiry
                case _const_http_constant__WEBPACK_IMPORTED_MODULE_4__["HttpError"].TOKEN_EXPIRED:
                  var token = error.error.newToken;

                  _this2._auth.setToken(token);

                  request = _this2.updateRequestToken(request);
                  return next.handle(request);
                  break;
                // Handling unauthorized user

                case _const_http_constant__WEBPACK_IMPORTED_MODULE_4__["HttpError"].FORBIDDEN:
                  _this2._router.navigate(['/unauthorized']);

                  return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]();
                  break;

                default:
                  throw error.error;
                  break;
              }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (event) {
              if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                var newEvent; // alter response here. maybe do the following

                newEvent = event.clone({
                  // alter event params here
                  body: event.body
                });
                return newEvent;
              }
            }));
          }
        }]);

        return AuthInterceptor;
      }();

      AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) {
        return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
      };

      AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthInterceptor,
        factory: AuthInterceptor.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "IYfF":
    /*!*************************************************!*\
      !*** ./src/app/shared/services/auth.service.ts ***!
      \*************************************************/

    /*! exports provided: AuthService */

    /***/
    function IYfF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _const_storage_key_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @const/storage-key.constant */
      "l+V9");
      /* harmony import */


      var _toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./toast.service */
      "3WbM");

      var AuthService = /*#__PURE__*/function () {
        function AuthService(_toast) {
          _classCallCheck(this, AuthService);

          this._toast = _toast;
        }
        /**
         * @description it provides the user object
         * user is saved in session storage and can be accessed directly in each component.
         * But we don't want components to directly access user's details via session storage,
         * hence we created this method
         *
         * @returns {UserI}
         * @memberof AuthService
         */


        _createClass(AuthService, [{
          key: "getCurrentUser",
          value: function getCurrentUser() {
            var currentUser = JSON.parse(localStorage.getItem(_const_storage_key_constant__WEBPACK_IMPORTED_MODULE_1__["LOCAL_STORAGE_KEY"].auth.user));

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

        }, {
          key: "setCurrentUser",
          value: function setCurrentUser(user) {
            localStorage.setItem(_const_storage_key_constant__WEBPACK_IMPORTED_MODULE_1__["LOCAL_STORAGE_KEY"].auth.user, JSON.stringify(user));
          }
          /**
           * @description it clears the user details from session storage
           *
           * @memberof AuthService
           */

        }, {
          key: "clearCurrentUser",
          value: function clearCurrentUser() {
            localStorage.removeItem(_const_storage_key_constant__WEBPACK_IMPORTED_MODULE_1__["LOCAL_STORAGE_KEY"].auth.user);
          }
          /**
           * @description it tells whether user is logged in
           *
           * @returns {boolean}
           * @memberof AuthService
           */

        }, {
          key: "isUserAuthenticated",
          value: function isUserAuthenticated() {
            return !!this.getToken();
          }
          /**
           * @description it gives access token for current user
           *
           * @returns {string}
           * @memberof AuthService
           */

        }, {
          key: "getToken",
          value: function getToken() {
            var currentUser = this.getCurrentUser();

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

        }, {
          key: "setToken",
          value: function setToken(token) {
            var user = this.getCurrentUser();
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

        }, {
          key: "getVendorCode",
          value: function getVendorCode() {
            var currentUser = this.getCurrentUser();

            if (!currentUser || !currentUser.allowedVendorCodes || !currentUser.allowedVendorCodes.length) {
              this._toast.error('Please login again', 'Invalid Vendor Code');

              return null;
            } // NOTE: @sumit has made it sure that we will get only single vendor code per user
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

        }, {
          key: "getUserAllowedCountries",
          value: function getUserAllowedCountries() {
            var currentUser = this.getCurrentUser();

            if (!currentUser.allowedCountries || !currentUser.allowedCountries.length) {
              this._toast.error('User has no access to countries. Please login again', 'No allowed countries');

              return null;
            }

            return currentUser.allowedCountries;
          }
        }]);

        return AuthService;
      }();

      AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_toast_service__WEBPACK_IMPORTED_MODULE_2__["ToastService"]));
      };

      AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthService,
        factory: AuthService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _toast_service__WEBPACK_IMPORTED_MODULE_2__["ToastService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _const_storage_key_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @const/storage-key.constant */
      "l+V9");
      /* harmony import */


      var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @shared/services/auth.service */
      "IYfF");
      /* harmony import */


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-cookie-service */
      "b6Qw");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(_auth, _cs) {
          _classCallCheck(this, AppComponent);

          this._auth = _auth;
          this._cs = _cs;
          this.title = 'plixxo-admin-panel';
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // Note: check if page is refreshed or user came from another route to handle browser/tab close
            if (window.performance) {
              if (performance.navigation.type !== 1) {
                this.clearLocalStorage();
              }
            }
          }
        }, {
          key: "clearLocalStorage",
          value: function clearLocalStorage() {
            var currentUser = JSON.parse(localStorage.getItem(_const_storage_key_constant__WEBPACK_IMPORTED_MODULE_1__["LOCAL_STORAGE_KEY"].auth.user));
            localStorage.clear();

            this._auth.setCurrentUser(currentUser);
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], function () {
          return [{
            type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
          }, {
            type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _shared_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./shared/interceptors/auth.interceptor */
      "H06L");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
          useClass: _shared_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_4__["AuthInterceptor"],
          multi: true
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
            providers: [{
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
              useClass: _shared_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_4__["AuthInterceptor"],
              multi: true
            }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "aHYZ":
    /*!********************************************!*\
      !*** ./src/app/constants/http.constant.ts ***!
      \********************************************/

    /*! exports provided: HttpError */

    /***/
    function aHYZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpError", function () {
        return HttpError;
      });

      var HttpError;

      (function (HttpError) {
        HttpError[HttpError["TOKEN_EXPIRED"] = 498] = "TOKEN_EXPIRED";
        HttpError[HttpError["VALIDATION_ERROR"] = 422] = "VALIDATION_ERROR";
        HttpError[HttpError["FORBIDDEN"] = 403] = "FORBIDDEN";
      })(HttpError || (HttpError = {}));
      /***/

    },

    /***/
    "eRTK":
    /*!********************************************!*\
      !*** ./src/app/shared/guard/auth.guard.ts ***!
      \********************************************/

    /*! exports provided: AuthGuard */

    /***/
    function eRTK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/auth.service */
      "IYfF");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(router, _auth) {
          _classCallCheck(this, AuthGuard);

          this.router = router;
          this._auth = _auth;
        }

        _createClass(AuthGuard, [{
          key: "canLoad",
          value: function canLoad() {
            if (this._auth.isUserAuthenticated()) {
              return true;
            }

            this.router.navigate(['/auth']);
            return false;
          }
        }, {
          key: "canActivateChild",
          value: function canActivateChild(childRoute, state) {
            if (this._auth.isUserAuthenticated()) {
              return true;
            }

            this.router.navigate(['/auth']);
            return false;
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
      };

      AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthGuard,
        factory: AuthGuard.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "l+V9":
    /*!***************************************************!*\
      !*** ./src/app/constants/storage-key.constant.ts ***!
      \***************************************************/

    /*! exports provided: SESSION_STORAGE_KEY, LOCAL_STORAGE_KEY */

    /***/
    function lV9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SESSION_STORAGE_KEY", function () {
        return SESSION_STORAGE_KEY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LOCAL_STORAGE_KEY", function () {
        return LOCAL_STORAGE_KEY;
      });

      var SESSION_STORAGE_KEY = {};
      var LOCAL_STORAGE_KEY = {
        auth: {
          user: 'currentUser'
        },
        navigation: {
          menuSelected: 'menuSelected',
          subMenuSelected: 'subMenuSelected'
        }
      };
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./shared/guard/auth.guard */
      "eRTK");

      var routes = [{
        path: 'auth',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | auth-auth-module */
          [__webpack_require__.e("default~auth-auth-module~layout-layout-module"), __webpack_require__.e("auth-auth-module")]).then(__webpack_require__.bind(null,
          /*! ./auth/auth.module */
          "Yj9t")).then(function (m) {
            return m.AuthModule;
          });
        }
      }, {
        path: '',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | layout-layout-module */
          [__webpack_require__.e("default~auth-auth-module~layout-layout-module"), __webpack_require__.e("layout-layout-module")]).then(__webpack_require__.bind(null,
          /*! ./layout/layout.module */
          "Tx//")).then(function (m) {
            return m.LayoutModule;
          });
        },
        canLoad: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "wQzq":
    /*!**********************************************!*\
      !*** ./src/app/shared/models/toast.model.ts ***!
      \**********************************************/

    /*! exports provided: ToastType */

    /***/
    function wQzq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastType", function () {
        return ToastType;
      });

      var ToastType;

      (function (ToastType) {
        ToastType[ToastType["SUCCESS"] = 0] = "SUCCESS";
        ToastType[ToastType["ERROR"] = 1] = "ERROR";
        ToastType[ToastType["INFO"] = 2] = "INFO";
        ToastType[ToastType["WARNING"] = 3] = "WARNING";
      })(ToastType || (ToastType = {}));
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map