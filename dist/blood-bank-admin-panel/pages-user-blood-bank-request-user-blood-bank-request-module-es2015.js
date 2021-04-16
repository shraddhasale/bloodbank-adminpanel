(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-blood-bank-request-user-blood-bank-request-module"],{

/***/ "+LuN":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/user-blood-bank-request/services/user-blood-bank-request-http.service.ts ***!
  \************************************************************************************************/
/*! exports provided: UserBloodBankRequestHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserBloodBankRequestHttpService", function() { return UserBloodBankRequestHttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment */ "AytR");
/* harmony import */ var _const_api_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @const/api.constant */ "al6W");






class UserBloodBankRequestHttpService {
    constructor(_http) {
        this._http = _http;
        this.baseUrl = _env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].websiteNodeHost;
    }
    /**
     * fetch all users as per filter
     */
    fetchAllRequestUser(limit = _const_api_constant__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].pageSize, page = 1, where) {
        const skip = (page - 1) * limit;
        let filter = {
            limit,
            skip,
            where,
        };
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        httpParams = httpParams.append('filter', JSON.stringify(filter));
        return this._http.get(this.baseUrl + _const_api_constant__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINT"].bloodRequest.fetchAll, {
            params: httpParams
        });
    }
    /**
     *fetch admin user details by its {id}
     */
    fetchRequestUserById(id) {
        return this._http.get(this.baseUrl + _const_api_constant__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINT"].bloodRequest.fetchById + `/${id}`);
    }
    /**
     * creates admin user
    */
    createRequestUser(reqBody) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        return this._http.post(this.baseUrl + _const_api_constant__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINT"].bloodRequest.create, reqBody, { params });
    }
    /**
     *updates endpoint
    */
    updatedRequestUser(reqBody, requestUserId) {
        return this._http.put(this.baseUrl + _const_api_constant__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINT"].bloodRequest.update + `/${requestUserId}`, reqBody);
    }
    /**
     * delete endpoint
    */
    deleteRequestUser(reqBody) {
        return this._http.delete(this.baseUrl + _const_api_constant__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINT"].bloodRequest.delete + `/${reqBody.id}`, reqBody);
    }
}
UserBloodBankRequestHttpService.ɵfac = function UserBloodBankRequestHttpService_Factory(t) { return new (t || UserBloodBankRequestHttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UserBloodBankRequestHttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserBloodBankRequestHttpService, factory: UserBloodBankRequestHttpService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserBloodBankRequestHttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "8Qb5":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/user-blood-bank-request/user-blood-bank-request-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: UserBloodBankRequestRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserBloodBankRequestRoutingModule", function() { return UserBloodBankRequestRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _user_blood_bank_request_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-blood-bank-request.component */ "LRoW");
/* harmony import */ var _edit_user_blood_bank_request_edit_user_blood_bank_request_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-user-blood-bank-request/edit-user-blood-bank-request.component */ "QaaB");
/* harmony import */ var _add_user_blood_bank_request_add_user_blood_bank_request_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-user-blood-bank-request/add-user-blood-bank-request.component */ "j77v");







const routes = [
    {
        path: '',
        component: _user_blood_bank_request_component__WEBPACK_IMPORTED_MODULE_2__["UserBloodBankRequestComponent"],
    },
    {
        path: 'add',
        component: _add_user_blood_bank_request_add_user_blood_bank_request_component__WEBPACK_IMPORTED_MODULE_4__["AddUserBloodBankRequestComponent"],
    },
    {
        path: 'edit/:id',
        component: _edit_user_blood_bank_request_edit_user_blood_bank_request_component__WEBPACK_IMPORTED_MODULE_3__["EditUserBloodBankRequestComponent"],
    }
];
class UserBloodBankRequestRoutingModule {
}
UserBloodBankRequestRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserBloodBankRequestRoutingModule });
UserBloodBankRequestRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserBloodBankRequestRoutingModule_Factory(t) { return new (t || UserBloodBankRequestRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserBloodBankRequestRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserBloodBankRequestRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "LRoW":
/*!************************************************************************************!*\
  !*** ./src/app/pages/user-blood-bank-request/user-blood-bank-request.component.ts ***!
  \************************************************************************************/
/*! exports provided: UserBloodBankRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserBloodBankRequestComponent", function() { return UserBloodBankRequestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _const_api_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @const/api.constant */ "al6W");
/* harmony import */ var _const_breadcrumb_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @const/breadcrumb.constant */ "LTnQ");
/* harmony import */ var _services_user_blood_bank_request_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/user-blood-bank-request-http.service */ "+LuN");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/services/toast.service */ "3WbM");
/* harmony import */ var _shared_services_spinner_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/services/spinner.service */ "ph+x");
/* harmony import */ var _shared_components_page_titlebar_page_titlebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/page-titlebar/page-titlebar.component */ "f+2y");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _shared_components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/components/search-bar/search-bar.component */ "dRJ3");
/* harmony import */ var _components_user_blood_bank_request_listing_user_blood_bank_request_listing_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/user-blood-bank-request-listing/user-blood-bank-request-listing.component */ "q+K9");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/components/pagination/pagination.component */ "NhFE");















function UserBloodBankRequestComponent_app_pagination_6_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-pagination", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function UserBloodBankRequestComponent_app_pagination_6_Template_app_pagination_pageChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.onPageChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("total", ctx_r0.userRequestCount)("currentPage", ctx_r0.currentPage);
} }
class UserBloodBankRequestComponent {
    constructor(_bloodbankRequesthttps, _toast, _spinner) {
        this._bloodbankRequesthttps = _bloodbankRequesthttps;
        this._toast = _toast;
        this._spinner = _spinner;
        this.breadcrumbList = _const_breadcrumb_constant__WEBPACK_IMPORTED_MODULE_3__["BLOOD_REQUEST_BREADCRUMSLIST"].listing;
        this.button = {
            label: 'Add User Blood Bank Request',
            routerLink: ['/user-blood-bank-request/add']
        };
        this.pageTitle = 'User Blood Bank Request';
        this.pageSize = _const_api_constant__WEBPACK_IMPORTED_MODULE_2__["API_CONFIG"].pageSize;
        this.paginationTotalCount = 0;
        this.currentPage = 1;
        this.where = {
            statusID: { inq: [_const_api_constant__WEBPACK_IMPORTED_MODULE_2__["StatusEnum"].ACTIVE, _const_api_constant__WEBPACK_IMPORTED_MODULE_2__["StatusEnum"].INACTIVE] }
        };
        this.userRequestCount = 0;
        this.userRequestList = [];
        this.userRequestFilter = {};
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
    }
    ngOnInit() {
        this.getuserRequestList();
    }
    getuserRequestList() {
        this._spinner.show("Fetching Admin Users list...");
        this.subscriptions.add(this._bloodbankRequesthttps.fetchAllRequestUser(this.pageSize, this.currentPage, this.where).subscribe(resp => {
            if (resp && resp['data'] && resp['data'].length > 0) {
                this.userRequestList = resp.data.map(user => {
                    user['bloodBankDetails'] = resp['relationData'].bloodbank[user.bloodBankID] || "";
                    return user;
                });
            }
            else {
                this.userRequestList = [];
            }
            this.userRequestCount = resp.count;
            this._spinner.hide();
        }, (err) => {
            this._toast.error(err.error.message);
            this._spinner.hide();
        }));
    }
    onPageChange(currentPage) {
        this.currentPage = currentPage;
        this.getuserRequestList();
    }
    onSearchChange(searchString) {
        this.searchString = searchString;
        if (this.searchString) {
            this.where.search = searchString;
        }
        else {
            delete this.where.search;
        }
        this.currentPage = 1;
        this.getuserRequestList();
    }
    onStatusUpdate(admin) {
        this.subscriptions.add(this._bloodbankRequesthttps.deleteRequestUser(admin).subscribe((resp) => {
            this.getuserRequestList();
            this._toast.success("Admin User Delete Sucessfully");
        }, (err) => {
            this._toast.error(err.error.message);
        }));
    }
}
UserBloodBankRequestComponent.ɵfac = function UserBloodBankRequestComponent_Factory(t) { return new (t || UserBloodBankRequestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_blood_bank_request_http_service__WEBPACK_IMPORTED_MODULE_4__["UserBloodBankRequestHttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_spinner_service__WEBPACK_IMPORTED_MODULE_6__["SpinnerService"])); };
UserBloodBankRequestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserBloodBankRequestComponent, selectors: [["app-user-blood-bank-request"]], decls: 7, vars: 7, consts: [[3, "pageTitle", "itemCount", "breadcrumbList", "button"], [1, "bg-white"], [1, "navbar", "navbar-expand-sm", "bg-white", "justify-content-between"], [1, "col-md-5", "p-0"], [3, "placeholder", "searchChange"], [3, "userRequestList", "statusUpdate"], [3, "total", "currentPage", "pageChange", 4, "ngIf"], [3, "total", "currentPage", "pageChange"]], template: function UserBloodBankRequestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-page-titlebar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-search-bar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("searchChange", function UserBloodBankRequestComponent_Template_app_search_bar_searchChange_4_listener($event) { return ctx.onSearchChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-user-blood-bank-request-listing", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("statusUpdate", function UserBloodBankRequestComponent_Template_app_user_blood_bank_request_listing_statusUpdate_5_listener($event) { return ctx.onStatusUpdate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UserBloodBankRequestComponent_app_pagination_6_Template, 1, 2, "app-pagination", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageTitle", ctx.pageTitle)("itemCount", ctx.userRequestCount)("breadcrumbList", ctx.breadcrumbList)("button", ctx.button);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", "Search by  Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("userRequestList", ctx.userRequestList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userRequestCount);
    } }, directives: [_shared_components_page_titlebar_page_titlebar_component__WEBPACK_IMPORTED_MODULE_7__["PageTitlebarComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbNavbar"], _shared_components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_9__["SearchBarComponent"], _components_user_blood_bank_request_listing_user_blood_bank_request_listing_component__WEBPACK_IMPORTED_MODULE_10__["UserBloodBankRequestListingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_12__["PaginationComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWJsb29kLWJhbmstcmVxdWVzdC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserBloodBankRequestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-blood-bank-request',
                templateUrl: './user-blood-bank-request.component.html',
                styleUrls: ['./user-blood-bank-request.component.scss']
            }]
    }], function () { return [{ type: _services_user_blood_bank_request_http_service__WEBPACK_IMPORTED_MODULE_4__["UserBloodBankRequestHttpService"] }, { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] }, { type: _shared_services_spinner_service__WEBPACK_IMPORTED_MODULE_6__["SpinnerService"] }]; }, null); })();


/***/ }),

/***/ "PeGM":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/user-blood-bank-request/user-blood-bank-request.module.ts ***!
  \*********************************************************************************/
/*! exports provided: UserBloodBankRequestModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserBloodBankRequestModule", function() { return UserBloodBankRequestModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _user_blood_bank_request_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-blood-bank-request-routing.module */ "8Qb5");
/* harmony import */ var _user_blood_bank_request_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-blood-bank-request.component */ "LRoW");
/* harmony import */ var _components_user_blood_bank_request_form_user_blood_bank_request_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/user-blood-bank-request-form/user-blood-bank-request-form.component */ "Tbpt");
/* harmony import */ var _components_user_blood_bank_request_listing_user_blood_bank_request_listing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/user-blood-bank-request-listing/user-blood-bank-request-listing.component */ "q+K9");
/* harmony import */ var _edit_user_blood_bank_request_edit_user_blood_bank_request_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./edit-user-blood-bank-request/edit-user-blood-bank-request.component */ "QaaB");
/* harmony import */ var _add_user_blood_bank_request_add_user_blood_bank_request_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./add-user-blood-bank-request/add-user-blood-bank-request.component */ "j77v");
/* harmony import */ var _user_blood_bank_request_services_user_blood_bank_request_http_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../user-blood-bank-request/services/user-blood-bank-request-http.service */ "+LuN");















class UserBloodBankRequestModule {
}
UserBloodBankRequestModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserBloodBankRequestModule });
UserBloodBankRequestModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserBloodBankRequestModule_Factory(t) { return new (t || UserBloodBankRequestModule)(); }, providers: [
        _user_blood_bank_request_services_user_blood_bank_request_http_service__WEBPACK_IMPORTED_MODULE_12__["UserBloodBankRequestHttpService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbTooltipModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownModule"],
            _user_blood_bank_request_routing_module__WEBPACK_IMPORTED_MODULE_6__["UserBloodBankRequestRoutingModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserBloodBankRequestModule, { declarations: [_user_blood_bank_request_component__WEBPACK_IMPORTED_MODULE_7__["UserBloodBankRequestComponent"],
        _components_user_blood_bank_request_form_user_blood_bank_request_form_component__WEBPACK_IMPORTED_MODULE_8__["UserBloodBankRequestFormComponent"],
        _components_user_blood_bank_request_listing_user_blood_bank_request_listing_component__WEBPACK_IMPORTED_MODULE_9__["UserBloodBankRequestListingComponent"],
        _edit_user_blood_bank_request_edit_user_blood_bank_request_component__WEBPACK_IMPORTED_MODULE_10__["EditUserBloodBankRequestComponent"],
        _add_user_blood_bank_request_add_user_blood_bank_request_component__WEBPACK_IMPORTED_MODULE_11__["AddUserBloodBankRequestComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbTooltipModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownModule"],
        _user_blood_bank_request_routing_module__WEBPACK_IMPORTED_MODULE_6__["UserBloodBankRequestRoutingModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserBloodBankRequestModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _user_blood_bank_request_component__WEBPACK_IMPORTED_MODULE_7__["UserBloodBankRequestComponent"],
                    _components_user_blood_bank_request_form_user_blood_bank_request_form_component__WEBPACK_IMPORTED_MODULE_8__["UserBloodBankRequestFormComponent"],
                    _components_user_blood_bank_request_listing_user_blood_bank_request_listing_component__WEBPACK_IMPORTED_MODULE_9__["UserBloodBankRequestListingComponent"],
                    _edit_user_blood_bank_request_edit_user_blood_bank_request_component__WEBPACK_IMPORTED_MODULE_10__["EditUserBloodBankRequestComponent"],
                    _add_user_blood_bank_request_add_user_blood_bank_request_component__WEBPACK_IMPORTED_MODULE_11__["AddUserBloodBankRequestComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbTooltipModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownModule"],
                    _user_blood_bank_request_routing_module__WEBPACK_IMPORTED_MODULE_6__["UserBloodBankRequestRoutingModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
                ],
                providers: [
                    _user_blood_bank_request_services_user_blood_bank_request_http_service__WEBPACK_IMPORTED_MODULE_12__["UserBloodBankRequestHttpService"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "QaaB":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/pages/user-blood-bank-request/edit-user-blood-bank-request/edit-user-blood-bank-request.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: EditUserBloodBankRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserBloodBankRequestComponent", function() { return EditUserBloodBankRequestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _const_breadcrumb_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @const/breadcrumb.constant */ "LTnQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_services_spinner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/services/spinner.service */ "ph+x");
/* harmony import */ var _services_user_blood_bank_request_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user-blood-bank-request-http.service */ "+LuN");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/services/toast.service */ "3WbM");
/* harmony import */ var _shared_components_page_titlebar_page_titlebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/page-titlebar/page-titlebar.component */ "f+2y");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_user_blood_bank_request_form_user_blood_bank_request_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/user-blood-bank-request-form/user-blood-bank-request-form.component */ "Tbpt");

// Rxjs










function EditUserBloodBankRequestComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-user-blood-bank-request-form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function EditUserBloodBankRequestComponent_ng_container_2_Template_app_user_blood_bank_request_form_submit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.onUserBloodRequestSubmit(); })("back", function EditUserBloodBankRequestComponent_ng_container_2_Template_app_user_blood_bank_request_form_back_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.redirectToAdminListing(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bloodRequestWrapper", ctx_r0.bloodRequestWrapper);
} }
class EditUserBloodBankRequestComponent {
    constructor(_router, _activatedRoute, _spinner, _bloodRequesttHttp, _toast) {
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this._spinner = _spinner;
        this._bloodRequesttHttp = _bloodRequesttHttp;
        this._toast = _toast;
        this.breadcrumbList = _const_breadcrumb_constant__WEBPACK_IMPORTED_MODULE_2__["BLOOD_REQUEST_BREADCRUMSLIST"].edit;
        this.pageTitle = 'Edit User Blood Bank Request';
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
    }
    ngOnInit() {
        this.fetchEndpointById(this._activatedRoute.snapshot.params.id);
    }
    fetchEndpointById(UserBloodBankRequestId) {
        this._spinner.show('User Blood Request Detail...');
        this.subscriptions.add(this._bloodRequesttHttp.fetchRequestUserById(UserBloodBankRequestId).subscribe((res) => {
            this.bloodRequestWrapper = res;
            this._spinner.hide();
        }, (err) => {
            this._toast.error(err.error.message, 'Failed to Fetch User Blood Request Details');
            this._spinner.hide();
        }));
    }
    onUserBloodRequestSubmit() {
        let urlId = this.bloodRequestWrapper.id;
        if (this.bloodRequestWrapper.statusID === false) {
            this.bloodRequestWrapper.statusID = 0;
        }
        else if (this.bloodRequestWrapper.statusID === true) {
            this.bloodRequestWrapper.statusID = 1;
        }
        delete this.bloodRequestWrapper.id;
        delete this.bloodRequestWrapper.createdAt;
        delete this.bloodRequestWrapper.updatedAt;
        // delete this.bloodRequestWrapper.updatedAt;
        this._spinner.show('Updating URL ...');
        let updatedEndpointWrapper = Object.assign({}, this.bloodRequestWrapper);
        this.subscriptions.add(this._bloodRequesttHttp.updatedRequestUser(updatedEndpointWrapper, urlId).subscribe((res) => {
            this._toast.success(`User Blood Request updated successfully.`);
            this.redirectToUserRequestListing();
            this._spinner.hide();
        }, (err) => {
            this._toast.error(err.error.message, 'User Blood Request Update Failed');
        }));
    }
    redirectToUserRequestListing() {
        this._router.navigate(['/user-blood-bank-request']);
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
        this._spinner.hide();
    }
}
EditUserBloodBankRequestComponent.ɵfac = function EditUserBloodBankRequestComponent_Factory(t) { return new (t || EditUserBloodBankRequestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_spinner_service__WEBPACK_IMPORTED_MODULE_4__["SpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_blood_bank_request_http_service__WEBPACK_IMPORTED_MODULE_5__["UserBloodBankRequestHttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"])); };
EditUserBloodBankRequestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditUserBloodBankRequestComponent, selectors: [["app-edit-user-blood-bank-request"]], decls: 3, vars: 3, consts: [[3, "pageTitle", "breadcrumbList"], [1, "main-section", "bg-white", "float-left", "w-100"], [4, "ngIf"], [3, "bloodRequestWrapper", "submit", "back"]], template: function EditUserBloodBankRequestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-page-titlebar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditUserBloodBankRequestComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageTitle", ctx.pageTitle)("breadcrumbList", ctx.breadcrumbList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bloodRequestWrapper);
    } }, directives: [_shared_components_page_titlebar_page_titlebar_component__WEBPACK_IMPORTED_MODULE_7__["PageTitlebarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _components_user_blood_bank_request_form_user_blood_bank_request_form_component__WEBPACK_IMPORTED_MODULE_9__["UserBloodBankRequestFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXVzZXItYmxvb2QtYmFuay1yZXF1ZXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditUserBloodBankRequestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-user-blood-bank-request',
                templateUrl: './edit-user-blood-bank-request.component.html',
                styleUrls: ['./edit-user-blood-bank-request.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _shared_services_spinner_service__WEBPACK_IMPORTED_MODULE_4__["SpinnerService"] }, { type: _services_user_blood_bank_request_http_service__WEBPACK_IMPORTED_MODULE_5__["UserBloodBankRequestHttpService"] }, { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] }]; }, null); })();


/***/ }),

/***/ "Tbpt":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/pages/user-blood-bank-request/components/user-blood-bank-request-form/user-blood-bank-request-form.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: UserBloodBankRequestFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserBloodBankRequestFormComponent", function() { return UserBloodBankRequestFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash.get */ "yDJ3");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash.set */ "9MQZ");
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_set__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _const_api_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @const/api.constant */ "al6W");
/* harmony import */ var _user_blood_bank_donate_services_user_blood_bank_donate_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../user-blood-bank-donate/services/user-blood-bank-donate-http.service */ "63pN");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");











const _c0 = function (a0) { return { disabled: a0 }; };
class UserBloodBankRequestFormComponent {
    constructor(_formBuilder, _bloodBankDonate) {
        this._formBuilder = _formBuilder;
        this._bloodBankDonate = _bloodBankDonate;
        this.submit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.back = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        this.bloodBankList = [];
        this.bloodUserList = [];
    }
    ngOnInit() {
        this.initbloodRequestForm();
        this.getBloodBankList();
        this.getUserList();
    }
    /**
     * @description initiate endpoint form
     * @memberof EndpointFormComponent
     */
    initbloodRequestForm() {
        this.bloodRequestForm = this._formBuilder.group({
            userID: [lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(this.bloodRequestWrapper, ['userID'], ''), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            bloodBankID: [lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(this.bloodRequestWrapper, ['bloodBankID'], ''), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            requestFor: [lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(this.bloodRequestWrapper, ['requestFor'], ''), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            isHospitalize: [lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(this.bloodRequestWrapper, ['isHospitalize'], ''), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            statusID: [
                lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(this.bloodRequestWrapper, ['statusID'], _const_api_constant__WEBPACK_IMPORTED_MODULE_5__["StatusEnum"].ACTIVE)
            ],
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
        let formValue = this.bloodRequestForm.getRawValue();
        lodash_set__WEBPACK_IMPORTED_MODULE_4___default()(this.bloodRequestWrapper, ['userID'], formValue['userID']);
        lodash_set__WEBPACK_IMPORTED_MODULE_4___default()(this.bloodRequestWrapper, ['bloodBankID'], formValue['bloodBankID']);
        lodash_set__WEBPACK_IMPORTED_MODULE_4___default()(this.bloodRequestWrapper, ['requestFor'], formValue['requestFor']);
        lodash_set__WEBPACK_IMPORTED_MODULE_4___default()(this.bloodRequestWrapper, ['isHospitalize'], formValue['isHospitalize'].toString());
        lodash_set__WEBPACK_IMPORTED_MODULE_4___default()(this.bloodRequestWrapper, ['statusID'], formValue['statusID']);
    }
    getBloodBankList() {
        this.subscriptions.add(this._bloodBankDonate.fetchAllBloodBank().subscribe(resp => {
            this.bloodBankList = resp.data;
        }));
    }
    getUserList() {
        this.subscriptions.add(this._bloodBankDonate.fetchAllUser().subscribe(resp => {
            this.bloodUserList = resp.data;
        }));
    }
    /**
       * @description emit back click
       * @memberof EndpointFormComponent
       */
    onBackClick() {
        this.back.emit();
    }
}
UserBloodBankRequestFormComponent.ɵfac = function UserBloodBankRequestFormComponent_Factory(t) { return new (t || UserBloodBankRequestFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_blood_bank_donate_services_user_blood_bank_donate_http_service__WEBPACK_IMPORTED_MODULE_6__["UserBloodBankDonateHttpService"])); };
UserBloodBankRequestFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserBloodBankRequestFormComponent, selectors: [["app-user-blood-bank-request-form"]], inputs: { bloodRequestWrapper: "bloodRequestWrapper" }, outputs: { submit: "submit", back: "back" }, decls: 31, vars: 11, consts: [[1, "p-4", "pb-0", 3, "formGroup"], [1, "row"], [1, "form-group", "col-lg-6", "required"], ["bindLabel", "firstName", "bindValue", "id", "formControlName", "userID", 1, "w-100", "text-capitalize", 3, "multiple", "items", "searchable"], [1, "form-group", "col-lg-6", "mt-4", "d-flex", "justify-content-end"], [1, "switchToggle"], ["type", "checkbox", "formControlName", "statusID"], [1, "switchSlider"], ["bindLabel", "firstName", "bindValue", "id", "formControlName", "bloodBankID", 1, "w-100", "text-capitalize", 3, "multiple", "items", "searchable"], ["type", "text", "formControlName", "requestFor", 1, "form-control"], [1, "custom-control", "custom-checkbox", "custom-control-inline", "pt-2"], ["type", "checkbox", "id", "isHospitalize", "name", "isHospitalize", "formControlName", "isHospitalize", 1, "custom-control-input"], ["for", "isHospitalize", 1, "custom-control-label", "pl-2"], [1, "footer", "clearfix", "p-4"], ["type", "button", 1, "btn", "btn-outline-primary", "font-weight-bold", "float-left", "px-4", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "font-weight-bold", "float-right", "px-4", 3, "ngClass", "disabled", "click"]], template: function UserBloodBankRequestFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "User ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ng-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Blood Bank ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "ng-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Request For");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "isHospitalize");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserBloodBankRequestFormComponent_Template_button_click_27_listener() { return ctx.onBackClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " BACK ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserBloodBankRequestFormComponent_Template_button_click_29_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " SAVE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.bloodRequestForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multiple", false)("items", ctx.bloodUserList)("searchable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multiple", false)("items", ctx.bloodBankList)("searchable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.bloodRequestForm.invalid))("disabled", ctx.bloodRequestForm.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWJsb29kLWJhbmstcmVxdWVzdC1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserBloodBankRequestFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-blood-bank-request-form',
                templateUrl: './user-blood-bank-request-form.component.html',
                styleUrls: ['./user-blood-bank-request-form.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _user_blood_bank_donate_services_user_blood_bank_donate_http_service__WEBPACK_IMPORTED_MODULE_6__["UserBloodBankDonateHttpService"] }]; }, { bloodRequestWrapper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], submit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], back: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "j77v":
/*!********************************************************************************************************************!*\
  !*** ./src/app/pages/user-blood-bank-request/add-user-blood-bank-request/add-user-blood-bank-request.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: AddUserBloodBankRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserBloodBankRequestComponent", function() { return AddUserBloodBankRequestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _const_api_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @const/api.constant */ "al6W");
/* harmony import */ var _const_breadcrumb_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @const/breadcrumb.constant */ "LTnQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_user_blood_bank_request_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user-blood-bank-request-http.service */ "+LuN");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/services/toast.service */ "3WbM");
/* harmony import */ var _shared_components_page_titlebar_page_titlebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/page-titlebar/page-titlebar.component */ "f+2y");
/* harmony import */ var _components_user_blood_bank_request_form_user_blood_bank_request_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/user-blood-bank-request-form/user-blood-bank-request-form.component */ "Tbpt");










class AddUserBloodBankRequestComponent {
    constructor(_router, _bloodRequestHttp, _toast) {
        this._router = _router;
        this._bloodRequestHttp = _bloodRequestHttp;
        this._toast = _toast;
        this.breadcrumbList = _const_breadcrumb_constant__WEBPACK_IMPORTED_MODULE_3__["BLOOD_REQUEST_BREADCRUMSLIST"].add;
        this.pageTitle = 'Add User Blood Bank Request';
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
    }
    ngOnInit() {
        this.initiateUrlForm();
    }
    initiateUrlForm() {
        this.bloodRequestWrapper = {
            userID: "",
            bloodBankID: "",
            requestFor: "",
            isHospitalize: "",
            statusID: _const_api_constant__WEBPACK_IMPORTED_MODULE_2__["StatusEnum"].ACTIVE
        };
    }
    onRequestSubmit() {
        if (this.bloodRequestWrapper.statusID === false) {
            this.bloodRequestWrapper.statusID = 0;
        }
        else if (this.bloodRequestWrapper.statusID === true) {
            this.bloodRequestWrapper.statusID = 1;
        }
        this.subscriptions.add(this._bloodRequestHttp.createRequestUser(this.bloodRequestWrapper).subscribe((res) => {
            this.redirectToBloodRequestListing();
            this._toast.success(`Blood Request Created successfully.`);
        }, (err) => {
            this._toast.error(err.error.message);
        }));
    }
    redirectToBloodRequestListing() {
        this._router.navigate(['/user-blood-bank-request']);
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
}
AddUserBloodBankRequestComponent.ɵfac = function AddUserBloodBankRequestComponent_Factory(t) { return new (t || AddUserBloodBankRequestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_blood_bank_request_http_service__WEBPACK_IMPORTED_MODULE_5__["UserBloodBankRequestHttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"])); };
AddUserBloodBankRequestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddUserBloodBankRequestComponent, selectors: [["app-add-user-blood-bank-request"]], decls: 3, vars: 3, consts: [[3, "breadcrumbList", "pageTitle"], [1, "main-section", "bg-white", "float-left", "w-100"], [3, "bloodRequestWrapper", "submit", "back"]], template: function AddUserBloodBankRequestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-page-titlebar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-user-blood-bank-request-form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function AddUserBloodBankRequestComponent_Template_app_user_blood_bank_request_form_submit_2_listener() { return ctx.onRequestSubmit(); })("back", function AddUserBloodBankRequestComponent_Template_app_user_blood_bank_request_form_back_2_listener() { return ctx.redirectToBloodRequestListing(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("breadcrumbList", ctx.breadcrumbList)("pageTitle", ctx.pageTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bloodRequestWrapper", ctx.bloodRequestWrapper);
    } }, directives: [_shared_components_page_titlebar_page_titlebar_component__WEBPACK_IMPORTED_MODULE_7__["PageTitlebarComponent"], _components_user_blood_bank_request_form_user_blood_bank_request_form_component__WEBPACK_IMPORTED_MODULE_8__["UserBloodBankRequestFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtdXNlci1ibG9vZC1iYW5rLXJlcXVlc3QuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddUserBloodBankRequestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-user-blood-bank-request',
                templateUrl: './add-user-blood-bank-request.component.html',
                styleUrls: ['./add-user-blood-bank-request.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _services_user_blood_bank_request_http_service__WEBPACK_IMPORTED_MODULE_5__["UserBloodBankRequestHttpService"] }, { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] }]; }, null); })();


/***/ }),

/***/ "q+K9":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/pages/user-blood-bank-request/components/user-blood-bank-request-listing/user-blood-bank-request-listing.component.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: UserBloodBankRequestListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserBloodBankRequestListingComponent", function() { return UserBloodBankRequestListingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_action_bar_action_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/action-bar/action-bar.component */ "mLoM");





const _c0 = function (a1) { return ["/blood-bank/edit/", a1]; };
function UserBloodBankRequestListingComponent_tr_15_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "app-action-bar", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onItemUpdate", function UserBloodBankRequestListingComponent_tr_15_Template_app_action_bar_onItemUpdate_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onUpdate($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const admin_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 10, admin_r1 == null ? null : admin_r1.createdAt, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, admin_r1 == null ? null : admin_r1.bloodBankID));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", admin_r1 == null ? null : admin_r1.bloodBankDetails == null ? null : admin_r1.bloodBankDetails.firstName, " ", admin_r1 == null ? null : admin_r1.bloodBankDetails == null ? null : admin_r1.bloodBankDetails.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", admin_r1 == null ? null : admin_r1.isHospitalize, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", admin_r1 == null ? null : admin_r1.requestFor, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", admin_r1)("showStatus", false)("showClone", false)("editPageUrl", ctx_r0.adminUrl + admin_r1.id);
} }
class UserBloodBankRequestListingComponent {
    constructor() {
        this.statusUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.adminUrl = 'edit/';
    }
    ngOnInit() {
    }
    onUpdate(updatedUserData) {
        this.statusUpdate.emit(updatedUserData);
    }
}
UserBloodBankRequestListingComponent.ɵfac = function UserBloodBankRequestListingComponent_Factory(t) { return new (t || UserBloodBankRequestListingComponent)(); };
UserBloodBankRequestListingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserBloodBankRequestListingComponent, selectors: [["app-user-blood-bank-request-listing"]], inputs: { userRequestList: "userRequestList" }, outputs: { statusUpdate: "statusUpdate" }, decls: 16, vars: 1, consts: [[1, "acl-user-container"], [1, "table", "user-table"], [1, "border-top", "border-bottom"], [1, "font-weight-normal", "align-middle", "pl-3"], [1, "font-weight-normal", "align-middle", "px-3", 2, "width", "120px"], ["class", "border-bottom", 4, "ngFor", "ngForOf"], [1, "border-bottom"], [1, "align-middle", "pl-3"], ["target", "_blank", 3, "routerLink"], [1, "align-middle"], [3, "item", "showStatus", "showClone", "editPageUrl", "onItemUpdate"]], template: function UserBloodBankRequestListingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Is Hospitalize");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "RequestFor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, UserBloodBankRequestListingComponent_tr_15_Template, 13, 15, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.userRequestList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _shared_components_action_bar_action_bar_component__WEBPACK_IMPORTED_MODULE_3__["ActionBarComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWJsb29kLWJhbmstcmVxdWVzdC1saXN0aW5nLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserBloodBankRequestListingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-blood-bank-request-listing',
                templateUrl: './user-blood-bank-request-listing.component.html',
                styleUrls: ['./user-blood-bank-request-listing.component.scss']
            }]
    }], function () { return []; }, { userRequestList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], statusUpdate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-user-blood-bank-request-user-blood-bank-request-module-es2015.js.map