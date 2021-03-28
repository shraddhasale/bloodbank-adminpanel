(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-users-users-module"],{

/***/ "+P1L":
/*!*********************************************!*\
  !*** ./src/app/pages/users/users.module.ts ***!
  \*********************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users-routing.module */ "F/tM");
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./users.component */ "Ag98");
/* harmony import */ var _components_users_listing_users_listing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/users-listing/users-listing.component */ "kOKb");
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-user/add-user.component */ "mva7");
/* harmony import */ var _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./edit-user/edit-user.component */ "gip2");
/* harmony import */ var _components_users_form_users_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/users-form/users-form.component */ "6nme");
/* harmony import */ var _services_users_http_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/users-http.service */ "aJ2l");















class UsersModule {
}
UsersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UsersModule });
UsersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UsersModule_Factory(t) { return new (t || UsersModule)(); }, providers: [
        _services_users_http_service__WEBPACK_IMPORTED_MODULE_12__["UsersHttpService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbTooltipModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownModule"],
            _users_routing_module__WEBPACK_IMPORTED_MODULE_6__["UsersRoutingModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UsersModule, { declarations: [_users_component__WEBPACK_IMPORTED_MODULE_7__["UsersComponent"],
        _components_users_listing_users_listing_component__WEBPACK_IMPORTED_MODULE_8__["UsersListingComponent"], _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_9__["AddUserComponent"], _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_10__["EditUserComponent"], _components_users_form_users_form_component__WEBPACK_IMPORTED_MODULE_11__["UsersFormComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbTooltipModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownModule"],
        _users_routing_module__WEBPACK_IMPORTED_MODULE_6__["UsersRoutingModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _users_component__WEBPACK_IMPORTED_MODULE_7__["UsersComponent"],
                    _components_users_listing_users_listing_component__WEBPACK_IMPORTED_MODULE_8__["UsersListingComponent"], _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_9__["AddUserComponent"], _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_10__["EditUserComponent"], _components_users_form_users_form_component__WEBPACK_IMPORTED_MODULE_11__["UsersFormComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbTooltipModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownModule"],
                    _users_routing_module__WEBPACK_IMPORTED_MODULE_6__["UsersRoutingModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
                ],
                providers: [
                    _services_users_http_service__WEBPACK_IMPORTED_MODULE_12__["UsersHttpService"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "6nme":
/*!***************************************************************************!*\
  !*** ./src/app/pages/users/components/users-form/users-form.component.ts ***!
  \***************************************************************************/
/*! exports provided: UsersFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersFormComponent", function() { return UsersFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash.get */ "yDJ3");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash.set */ "9MQZ");
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_set__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_users_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/users-http.service */ "aJ2l");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");









const _c0 = function (a0) { return { disabled: a0 }; };
class UsersFormComponent {
    constructor(_formBuilder, _userHttp) {
        this._formBuilder = _formBuilder;
        this._userHttp = _userHttp;
        this.submit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.back = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isMobileNumberAvailable = false;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
    }
    ngOnInit() {
        this.initEndpointForm();
    }
    /**
       * @description initiate endpoint form
       * @memberof EndpointFormComponent
       */
    initEndpointForm() {
        this.userForm = this._formBuilder.group({
            name: [lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(this.userWrapper, ['name'], ''), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            endpoint: [
                lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(this.userWrapper, ['endpoint'], ''),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ],
            method: [lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(this.userWrapper, ['method'], 'GET')]
        });
    }
    /**
     * @description on submit, map to wrapper and emit submit event
     * @memberof EndpointFormComponent
     */
    onSubmit() {
        this.mapToWrapper();
        this.submit.emit();
    }
    /**
     * @description map form value to wrapper
     * @memberof EndpointFormComponent
     */
    mapToWrapper() {
        let formValue = this.userForm.getRawValue();
        lodash_set__WEBPACK_IMPORTED_MODULE_4___default()(this.userWrapper, ['name'], formValue['name']);
        lodash_set__WEBPACK_IMPORTED_MODULE_4___default()(this.userWrapper, ['endpoint'], formValue['endpoint']);
        lodash_set__WEBPACK_IMPORTED_MODULE_4___default()(this.userWrapper, ['method'], formValue['method']);
    }
}
UsersFormComponent.ɵfac = function UsersFormComponent_Factory(t) { return new (t || UsersFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_users_http_service__WEBPACK_IMPORTED_MODULE_5__["UsersHttpService"])); };
UsersFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsersFormComponent, selectors: [["app-users-form"]], inputs: { userWrapper: "userWrapper", countryList: "countryList", rolesList: "rolesList", vendorCodesList: "vendorCodesList" }, outputs: { submit: "submit", back: "back" }, decls: 16, vars: 5, consts: [[3, "formGroup"], [1, "row"], [1, "form-group", "col-lg-8", "required"], ["type", "text", "formControlName", "endpoint", 1, "form-control"], ["type", "text", "formControlName", "name", 1, "form-control"], [1, "footer", "clearfix", "mt-5"], ["type", "button", 1, "btn", "btn-outline-primary", "font-weight-bold", "float-left", "px-4"], ["type", "button", 1, "btn", "btn-primary", "font-weight-bold", "float-right", "px-4", 3, "ngClass", "disabled", "click"]], template: function UsersFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Endpoint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " BACK ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersFormComponent_Template_button_click_14_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " SAVE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.userForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.userForm.invalid))("disabled", ctx.userForm.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2Vycy1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-users-form',
                templateUrl: './users-form.component.html',
                styleUrls: ['./users-form.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_users_http_service__WEBPACK_IMPORTED_MODULE_5__["UsersHttpService"] }]; }, { userWrapper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], countryList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rolesList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], vendorCodesList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], submit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], back: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "Ag98":
/*!************************************************!*\
  !*** ./src/app/pages/users/users.component.ts ***!
  \************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _users_services_users_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../users/services/users-http.service */ "aJ2l");
/* harmony import */ var _shared_components_page_titlebar_page_titlebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/page-titlebar/page-titlebar.component */ "f+2y");
/* harmony import */ var _components_users_listing_users_listing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/users-listing/users-listing.component */ "kOKb");






class UsersComponent {
    constructor(_userHttp) {
        this._userHttp = _userHttp;
        this.button = {
            label: 'Add New User',
            routerLink: ['/users/add']
        };
        this.pageTitle = 'Users';
        this.userCount = 10;
        this.usersList = [];
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
    }
    ngOnInit() {
        this.getUserList({});
    }
    /**
     * @description get list of page category based on filter
     *
     * @param {number} { currentPage = 1 }
     * @memberof AclUserComponent
     */
    getUserList({ currentPage = 1 }) {
        // this._spinner.show('Fetching Users');
        this.subscriptions.add(this._userHttp
            .fetchAllUsers()
            .subscribe((res) => {
            // this._spinner.hide();
            this.usersList = res;
            // this.fetchTotalUsersCount();
        }, (error) => {
            console.log(error);
            // this._spinner.hide();
            // this._toast.error(error.error.message, 'Something went wrong');
        }));
    }
}
UsersComponent.ɵfac = function UsersComponent_Factory(t) { return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_users_services_users_http_service__WEBPACK_IMPORTED_MODULE_2__["UsersHttpService"])); };
UsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsersComponent, selectors: [["app-users"]], decls: 3, vars: 4, consts: [[3, "pageTitle", "itemCount", "button"], [1, "bg-white"], [3, "usersList"]], template: function UsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-page-titlebar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-users-listing", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageTitle", ctx.pageTitle)("itemCount", ctx.userCount)("button", ctx.button);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("usersList", ctx.usersList);
    } }, directives: [_shared_components_page_titlebar_page_titlebar_component__WEBPACK_IMPORTED_MODULE_3__["PageTitlebarComponent"], _components_users_listing_users_listing_component__WEBPACK_IMPORTED_MODULE_4__["UsersListingComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2Vycy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-users',
                templateUrl: './users.component.html',
                styleUrls: ['./users.component.scss']
            }]
    }], function () { return [{ type: _users_services_users_http_service__WEBPACK_IMPORTED_MODULE_2__["UsersHttpService"] }]; }, null); })();


/***/ }),

/***/ "F/tM":
/*!*****************************************************!*\
  !*** ./src/app/pages/users/users-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: UsersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersRoutingModule", function() { return UsersRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users.component */ "Ag98");
/* harmony import */ var _users_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../users/add-user/add-user.component */ "mva7");






const routes = [
    {
        path: '',
        component: _users_component__WEBPACK_IMPORTED_MODULE_2__["UsersComponent"]
    },
    {
        path: 'add',
        component: _users_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_3__["AddUserComponent"]
    },
];
class UsersRoutingModule {
}
UsersRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UsersRoutingModule });
UsersRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UsersRoutingModule_Factory(t) { return new (t || UsersRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UsersRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "aJ2l":
/*!************************************************************!*\
  !*** ./src/app/pages/users/services/users-http.service.ts ***!
  \************************************************************/
/*! exports provided: UsersHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersHttpService", function() { return UsersHttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @env/environment */ "AytR");
/* harmony import */ var _const_api_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @const/api.constant */ "al6W");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class UsersHttpService {
    constructor(_http) {
        this._http = _http;
        this.baseUrl = _env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].websiteNodeHost;
    }
    /**
     * @description fetch all users as per filter
     * @param {number} [pageSize=API_CONFIG.pageSize]
     * @param {number} [currentPage=1]
     * @param {object} [where={}]
     * @returns {Observable<any>}
     * @memberof UsersHttpService
     */
    fetchAllUsers() {
        return this._http.get(this.baseUrl + _const_api_constant__WEBPACK_IMPORTED_MODULE_2__["API_ENDPOINT"].users.fetchAll);
    }
}
UsersHttpService.ɵfac = function UsersHttpService_Factory(t) { return new (t || UsersHttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
UsersHttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UsersHttpService, factory: UsersHttpService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersHttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "gip2":
/*!**************************************************************!*\
  !*** ./src/app/pages/users/edit-user/edit-user.component.ts ***!
  \**************************************************************/
/*! exports provided: EditUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserComponent", function() { return EditUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class EditUserComponent {
    constructor() { }
    ngOnInit() {
    }
}
EditUserComponent.ɵfac = function EditUserComponent_Factory(t) { return new (t || EditUserComponent)(); };
EditUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditUserComponent, selectors: [["app-edit-user"]], decls: 2, vars: 0, template: function EditUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "edit-user works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXVzZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-user',
                templateUrl: './edit-user.component.html',
                styleUrls: ['./edit-user.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "kOKb":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/users/components/users-listing/users-listing.component.ts ***!
  \*********************************************************************************/
/*! exports provided: UsersListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersListingComponent", function() { return UsersListingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function UsersListingComponent_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class UsersListingComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
UsersListingComponent.ɵfac = function UsersListingComponent_Factory(t) { return new (t || UsersListingComponent)(); };
UsersListingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsersListingComponent, selectors: [["app-users-listing"]], inputs: { usersList: "usersList" }, decls: 18, vars: 1, consts: [[1, "acl-user-container"], [1, "table", "user-table"], [1, "border-top", "border-bottom"], [1, "font-weight-normal", "align-middle", "pl-3"], [1, "font-weight-normal", "align-middle"], [1, "font-weight-normal", "align-middle", "px-3"], [1, "font-weight-normal", "align-middle", "px-3", "mw-150"], ["class", "border-bottom", 4, "ngFor", "ngForOf"], [1, "border-bottom"], [1, "align-middle", "pl-3"], [1, "align-middle", "text-primary"], [1, "align-middle"], [1, "align-middle", "px-0"], [1, "align-middle", "px-0", "word-break"], [1, "align-middle", "px-0", "text-truncate", "mw-150"]], template: function UsersListingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Email id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Mobile No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Vendor Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, UsersListingComponent_tr_17_Template, 10, 0, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.usersList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".btn-primary-light.platform[_ngcontent-%COMP%] {\n  height: 30px;\n}\n.influencerDetailListing[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n  left: 0;\n  top: 0;\n  width: 48px;\n  height: 48px;\n  float: left;\n  overflow: hidden;\n  border-radius: 50%;\n}\n.influencerDetailListing[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 48px;\n}\n.status[_ngcontent-%COMP%] {\n  padding: 0 7px;\n  border-radius: 2px;\n  height: 20px;\n}\n\n.status-11[_ngcontent-%COMP%], .status-78[_ngcontent-%COMP%] {\n  color: #ffc021;\n  background-color: rgba(255, 192, 33, 0.15);\n}\n.blogger[_ngcontent-%COMP%] {\n  color: #ff9800;\n  background-color: rgba(255, 152, 0, 0.15);\n}\n.status-13[_ngcontent-%COMP%], .status-16[_ngcontent-%COMP%], .status-81[_ngcontent-%COMP%] {\n  color: #ff5722;\n  background-color: rgba(255, 87, 34, 0.15);\n}\n.status-14[_ngcontent-%COMP%], .status-73[_ngcontent-%COMP%] {\n  color: #2f86eb;\n  background-color: rgba(47, 134, 235, 0.15);\n}\n.status-15[_ngcontent-%COMP%], .status-74[_ngcontent-%COMP%] {\n  color: #4caf50;\n  background-color: rgba(76, 175, 80, 0.15);\n}\n.status-18[_ngcontent-%COMP%], .status-82[_ngcontent-%COMP%] {\n  color: #ff9800;\n  background-color: rgba(255, 152, 0, 0.15);\n}\n.influencer-table[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]   .icon-brand-youtube[_ngcontent-%COMP%]:before {\n  color: #808593;\n}\n.text-red[_ngcontent-%COMP%] {\n  color: #e2302f;\n}\n.text-fb[_ngcontent-%COMP%] {\n  color: #3c5a96;\n}\n.text-twt[_ngcontent-%COMP%] {\n  color: #59adeb;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi91c2Vycy1saXN0aW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStDQTs7O0VBQUE7QUM3Q0E7RUFDSSxZQUFBO0FBR0o7QUFBSTtFQUNFLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUdOO0FBRlE7RUFDSSxnQkFBQTtBQUlaO0FBQ0E7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBRUo7QUFBQTs7OztJQUFBO0FBTUE7O0VBRUUsY0FBQTtFQUNBLDBDQUFBO0FBRUY7QUFDQTtFQUNFLGNBQUE7RUFDQSx5Q0FBQTtBQUVGO0FBQ0E7OztFQUdFLGNBQUE7RUFDQSx5Q0FBQTtBQUVGO0FBQ0E7O0VBRUksY0FBQTtFQUNBLDBDQUFBO0FBRUo7QUFDQTs7RUFFRSxjQUFBO0VBQ0EseUNBQUE7QUFFRjtBQUNBOztFQUVFLGNBQUE7RUFDQSx5Q0FBQTtBQUVGO0FBQUE7RUFDSSxjQUFBO0FBR0o7QUFEQTtFQUNFLGNBQUE7QUFJRjtBQUZBO0VBQ0UsY0FBQTtBQUtGO0FBSEE7RUFDRSxjQUFBO0FBTUYiLCJmaWxlIjoidXNlcnMtbGlzdGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvbG9yIFZhcmlhYmxlc1xuJHByaW1hcnk6ICNlZjFjMjM7XG4kcHJpbWFyeS1saWdodDogcmdiYSgyNTUsIDE1MywgMTUzLCAwLjIpO1xuJHN1Y2Nlc3M6ICM4YmMzNGE7XG4kaW5mbzogIzJmODZlYjtcbiR3YXJuaW5nOiAjZmZjMDIxO1xuJGRhbmdlcjogI2ZmNTcyMTtcblxuLy8gVE9ETzogcmVtb3ZlXG4kbWVkaXVtOiAjNWY2MzY4O1xuXG4kbGlnaHRlc3Q6ICNmMmYzZjg7XG4kbGlnaHRlcjogI2U4ZTllYztcbiRsaWdodDogI2FhYWRiNztcbiRkYXJrOiAjODA4NTkzO1xuJGRhcmtlcjogIzY5NmY4MDtcbiRkYXJrZXN0OiAjM2Q0NDVhO1xuXG4kd2hpdGU6ICNmZmZmZmY7XG4kYmxhY2s6ICMyMDI4NDE7XG5cbiRyYXRpbmctNTogIzRjYWY1MDtcbiRyYXRpbmctNDogJHN1Y2Nlc3M7XG4kcmF0aW5nLTM6ICNmZmMwMjE7XG4kcmF0aW5nLTI6ICNmZjk4MDA7XG4kcmF0aW5nLTE6ICNmZjU3MjI7XG5cblxuLy8gRm9udCB3ZWlnaHRzXG4kZm9udC13ZWlnaHQtbGlnaHRlcjogbGlnaHRlciAhZGVmYXVsdDtcbiRmb250LXdlaWdodC1saWdodDogMzAwICFkZWZhdWx0O1xuJGZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwICFkZWZhdWx0O1xuJGZvbnQtd2VpZ2h0LWJvbGQ6IDYwMCAhZGVmYXVsdDtcbiRmb250LXdlaWdodC1ib2xkZXI6IGJvbGRlciAhZGVmYXVsdDtcblxuLy8gRm9udCBzaXplc1xuJGZvbnQteHh4bDogMjRweCAhaW1wb3J0YW50O1xuJGZvbnQteHhsOiAyMXB4ICFpbXBvcnRhbnQ7XG4kZm9udC14bDogMThweCAhaW1wb3J0YW50O1xuJGZvbnQtbDogMTZweCAhaW1wb3J0YW50O1xuJGZvbnQtbTogMTRweCAhaW1wb3J0YW50O1xuJGZvbnQtczogMTJweCAhaW1wb3J0YW50O1xuJGZvbnQteHM6IDEwcHggIWltcG9ydGFudDtcblxuLy8gQ29udGFpbmVyIHdpZHRoIGZvciBwcmV2aWV3IHNlY3Rpb25cbiRwcmV2aWV3LWNvbnRhaW5lci13aWR0aDogMzMwcHg7XG5cbi8qIHotaW5kZXggdmFsdWUgZm9yIG92ZXJsYXksXG4gKiBOT1RFOiBpdCBzaG91bGQgYmUgZ3JlYXRlciB0aGFuIDEwMzAgYmVjYXVzZVxuICogMTAzMCBpcyB6LWluZGV4IGZvciBoZWFkZXIgY29tcG9uZW50IGluIGxheW91dCBtb2R1bGVcbiAqL1xuJG92ZXJsYXktei1pbmRleDogMTAzMTtcbiRvdmVybGF5LWJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcblxuLy8gKioqKioqKioqKioqKioqKiogVGhlbWUgQ29sb3JzICoqKioqKioqKioqKioqKipcblxuJHRoZW1lLWJhY2tncm91bmQ6ICRsaWdodGVzdDtcbiR0aGVtZS1mb250OiAkYmxhY2s7XG4vLyBCb3JkZXJcbiR0aGVtZS1ib3JkZXI6ICRsaWdodGVyO1xuJHRoZW1lLXNlcGVyYXRvcjogJGxpZ2h0ZXI7XG4vLyBJbnB1dFxuJHRoZW1lLWlucHV0LWxhYmVsOiAkZGFyaztcbiR0aGVtZS1pbnB1dC1wbGFjZWhvbGRlcjogJGxpZ2h0O1xuJHRoZW1lLWlucHV0LXRleHQ6ICRibGFjaztcbi8vIFRhYlxuJHRoZW1lLXRhYi10ZXh0OiAkZGFya2VyO1xuLy8gQnV0dG9uXG4kdGhlbWUtYnRuLXRleHQ6ICRibGFjaztcbiR0aGVtZS1idG4tYm9yZGVyOiAkdGhlbWUtYm9yZGVyO1xuLy8gVGFibGVcbiR0aGVtZS10YWJsZS10aDogJGRhcms7XG4kdGhlbWUtdGFibGUtcm93LWhvdmVyOiAkbGlnaHRlc3Q7XG4vLyBJY29uXG4kdGhlbWUtaWNvbjogJGJsYWNrO1xuIiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXNcIjtcblxuLmJ0bi1wcmltYXJ5LWxpZ2h0LnBsYXRmb3Jte1xuICAgIGhlaWdodDogMzBweDtcbn1cbi5pbmZsdWVuY2VyRGV0YWlsTGlzdGluZ3tcbiAgICBmaWd1cmV7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgdG9wOiAwO1xuICAgICAgd2lkdGg6IDQ4cHg7XG4gICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDQ4cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5zdGF0dXN7XG4gICAgcGFkZGluZzogMCA3cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGhlaWdodDogMjBweDtcbn1cbi8qKiogXG4gKiBDbGFzc2VzIGZvciBPcmRlciBTdGF0dXMgXG4gKiBjbGFzcyBzeW50YXggPT4gc3RhdHVzLTxzdGF0dXNJZD5cbiAqIEVnOiBGb3IgRGVsaXZlcmVkID0+IHN0YXR1cy0xNVxuICoqKi9cbi8vIFBlbmRpbmcgT3IgSG9sZFxuLnN0YXR1cy0xMSxcbi5zdGF0dXMtNzgge1xuICBjb2xvcjogcmdiKDI1NSwgMTkyLCAzMyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxOTIsIDMzLCAwLjE1KTtcbn1cbi8vIENvbmZpcm1lZFxuLmJsb2dnZXIge1xuICBjb2xvcjogcmdiKDI1NSwgMTUyLCAwKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE1MiwgMCwgMC4xNSk7XG59XG4vLyBDYW5jZWxsZWQgT3IgRXhwaXJlZFxuLnN0YXR1cy0xMyxcbi5zdGF0dXMtMTYsXG4uc3RhdHVzLTgxe1xuICBjb2xvcjogcmdiKDI1NSwgODcsIDM0KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgODcsIDM0LCAwLjE1KTtcbn1cbi8vIFNoaXBwZWRcbi5zdGF0dXMtMTQsXG4uc3RhdHVzLTczIHtcbiAgICBjb2xvcjogcmdiKDQ3LCAxMzQsIDIzNSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NywgMTM0LCAyMzUsIDAuMTUpO1xufVxuLy8gRGVsaXZlcmVkIG9yIFJlYWR5IHRvIFNoaXBcbi5zdGF0dXMtMTUsXG4uc3RhdHVzLTc0IHtcbiAgY29sb3I6IHJnYig3NiwgMTc1LCA4MCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzYsIDE3NSwgODAsIDAuMTUpO1xufVxuLy8gUmV0dXJuIENvbXBsZXRlXG4uc3RhdHVzLTE4LFxuLnN0YXR1cy04MiB7XG4gIGNvbG9yOiByZ2IoMjU1LCAxNTIsIDApO1xuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDE1MiwwLC4xNSk7XG59XG4uaW5mbHVlbmNlci10YWJsZSA+dGggLmljb24tYnJhbmQteW91dHViZTpiZWZvcmV7XG4gICAgY29sb3I6IzgwODU5MztcbiAgfVxuLnRleHQtcmVke1xuICBjb2xvcjojZTIzMDJmXG59XG4udGV4dC1mYntcbiAgY29sb3I6IzNjNWE5NlxufVxuLnRleHQtdHd0e1xuICBjb2xvcjojNTlhZGViXG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersListingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-users-listing',
                templateUrl: './users-listing.component.html',
                styleUrls: ['./users-listing.component.scss']
            }]
    }], function () { return []; }, { usersList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "mva7":
/*!************************************************************!*\
  !*** ./src/app/pages/users/add-user/add-user.component.ts ***!
  \************************************************************/
/*! exports provided: AddUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserComponent", function() { return AddUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _const_api_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @const/api.constant */ "al6W");
/* harmony import */ var _components_users_form_users_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/users-form/users-form.component */ "6nme");

// import { UrlHttpsService } from '../services/url-https.service'



class AddUserComponent {
    constructor() { }
    ngOnInit() {
        this.initiateUrlForm();
    }
    /**
      * @description initiate endpoint wrapper
      * @memberof AddEndpointComponent
      */
    initiateUrlForm() {
        this.userWrapper = {
            name: '',
            endpoint: '',
            method: '',
            role: [],
            statusID: _const_api_constant__WEBPACK_IMPORTED_MODULE_1__["StatusEnum"].ACTIVE
        };
    }
}
AddUserComponent.ɵfac = function AddUserComponent_Factory(t) { return new (t || AddUserComponent)(); };
AddUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddUserComponent, selectors: [["app-add-user"]], decls: 2, vars: 1, consts: [[1, "main-section", "bg-white", "float-left", "w-100"], [3, "userWrapper"]], template: function AddUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-users-form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("userWrapper", ctx.userWrapper);
    } }, directives: [_components_users_form_users_form_component__WEBPACK_IMPORTED_MODULE_2__["UsersFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtdXNlci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-user',
                templateUrl: './add-user.component.html',
                styleUrls: ['./add-user.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-users-users-module-es2015.js.map