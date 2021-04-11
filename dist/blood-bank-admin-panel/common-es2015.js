(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "63pN":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/user-blood-bank-donate/services/user-blood-bank-donate-http.service.ts ***!
  \**********************************************************************************************/
/*! exports provided: UserBloodBankDonateHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserBloodBankDonateHttpService", function() { return UserBloodBankDonateHttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment */ "AytR");
/* harmony import */ var _const_api_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @const/api.constant */ "al6W");






class UserBloodBankDonateHttpService {
    constructor(_http) {
        this._http = _http;
        this.baseUrl = _env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].websiteNodeHost;
    }
    /**
     * fetch all users as per filter
     */
    fetchAlldonateUser(limit = _const_api_constant__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].pageSize, page = 1, where) {
        const skip = (page - 1) * limit;
        let filter = {
            limit,
            skip,
            where,
        };
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        httpParams = httpParams.append('filter', JSON.stringify(filter));
        return this._http.get(this.baseUrl + _const_api_constant__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINT"].donate.fetchAll, {
            params: httpParams
        });
    }
    /**
     *fetch admin user details by its {id}
     */
    fetchdonateUserById(id) {
        return this._http.get(this.baseUrl + _const_api_constant__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINT"].donate.fetchById + `/${id}`);
    }
    /**
     * creates admin user
    */
    createdonateUser(reqBody) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        return this._http.post(this.baseUrl + _const_api_constant__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINT"].donate.create, reqBody, { params });
    }
    /**
     *updates endpoint
    */
    updatedonateUser(reqBody, donateUserId) {
        return this._http.put(this.baseUrl + _const_api_constant__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINT"].donate.update + `/${donateUserId}`, reqBody);
    }
    /**
     * delete endpoint
    */
    deletedonateUser(reqBody) {
        return this._http.delete(this.baseUrl + _const_api_constant__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINT"].donate.delete + `/${reqBody.id}`, reqBody);
    }
    /**
     * @description fetch all Member as per filter
     
     */
    fetchAllBloodBank() {
        return this._http.get(this.baseUrl + _const_api_constant__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINT"].bloodBank.fetchall);
    }
    fetchAllUser() {
        return this._http.get(this.baseUrl + _const_api_constant__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINT"].users.fetchAll);
    }
}
UserBloodBankDonateHttpService.ɵfac = function UserBloodBankDonateHttpService_Factory(t) { return new (t || UserBloodBankDonateHttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UserBloodBankDonateHttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserBloodBankDonateHttpService, factory: UserBloodBankDonateHttpService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserBloodBankDonateHttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "ToGV":
/*!*********************************************************!*\
  !*** ./src/app/pages/url/services/url-https.service.ts ***!
  \*********************************************************/
/*! exports provided: UrlHttpsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlHttpsService", function() { return UrlHttpsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment */ "AytR");
/* harmony import */ var _const_api_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @const/api.constant */ "al6W");






class UrlHttpsService {
    constructor(_http) {
        this._http = _http;
        this.baseUrl = _env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].websiteNodeHost;
    }
    /**
     * fetch all users as per filter
     */
    fetchAllUrls(limit = _const_api_constant__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].pageSize, page = 1, where) {
        const skip = (page - 1) * limit;
        let filter = {
            limit,
            skip,
            where,
        };
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        httpParams = httpParams.append('filter', JSON.stringify(filter));
        return this._http.get(this.baseUrl + _const_api_constant__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINT"].url.fetchAll, {
            params: httpParams
        });
    }
    /**
     *fetch endpoint details by its {id}
     */
    fetchEndpointById(id) {
        return this._http.get(this.baseUrl + _const_api_constant__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINT"].url.fetchById + `/${id}`);
    }
    /**
     * creates endpoint
    */
    createEndpoint(reqBody) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        return this._http.post(this.baseUrl + _const_api_constant__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINT"].url.create, reqBody, { params });
    }
    /**
     *updates endpoint
    */
    updateUrl(reqBody, urlId) {
        return this._http.put(this.baseUrl + _const_api_constant__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINT"].url.update + `/${urlId}`, reqBody);
    }
    /**
     * delete endpoint
    */
    deleteEndpoint(reqBody) {
        return this._http.delete(this.baseUrl + _const_api_constant__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINT"].url.delete + `/${reqBody.id}`, reqBody);
    }
    /**
     * @description fetch all Role as per filter
     
     */
    fetchAllRole() {
        return this._http.get(this.baseUrl + _const_api_constant__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINT"].role.fetchAll);
    }
}
UrlHttpsService.ɵfac = function UrlHttpsService_Factory(t) { return new (t || UrlHttpsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UrlHttpsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UrlHttpsService, factory: UrlHttpsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UrlHttpsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map