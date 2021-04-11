(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "63pN":
    /*!**********************************************************************************************!*\
      !*** ./src/app/pages/user-blood-bank-donate/services/user-blood-bank-donate-http.service.ts ***!
      \**********************************************************************************************/

    /*! exports provided: UserBloodBankDonateHttpService */

    /***/
    function pN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserBloodBankDonateHttpService", function () {
        return UserBloodBankDonateHttpService;
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


      var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @env/environment */
      "AytR");
      /* harmony import */


      var _const_api_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @const/api.constant */
      "al6W");

      var UserBloodBankDonateHttpService = /*#__PURE__*/function () {
        function UserBloodBankDonateHttpService(_http) {
          _classCallCheck(this, UserBloodBankDonateHttpService);

          this._http = _http;
          this.baseUrl = _env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].websiteNodeHost;
        }
        /**
         * fetch all users as per filter
         */


        _createClass(UserBloodBankDonateHttpService, [{
          key: "fetchAlldonateUser",
          value: function fetchAlldonateUser() {
            var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _const_api_constant__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].pageSize;
            var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
            var where = arguments.length > 2 ? arguments[2] : undefined;
            var skip = (page - 1) * limit;
            var filter = {
              limit: limit,
              skip: skip,
              where: where
            };
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            httpParams = httpParams.append('filter', JSON.stringify(filter));
            return this._http.get(this.baseUrl + _const_api_constant__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINT"].donate.fetchAll, {
              params: httpParams
            });
          }
          /**
           *fetch admin user details by its {id}
           */

        }, {
          key: "fetchdonateUserById",
          value: function fetchdonateUserById(id) {
            return this._http.get(this.baseUrl + _const_api_constant__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINT"].donate.fetchById + "/".concat(id));
          }
          /**
           * creates admin user
          */

        }, {
          key: "createdonateUser",
          value: function createdonateUser(reqBody) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            return this._http.post(this.baseUrl + _const_api_constant__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINT"].donate.create, reqBody, {
              params: params
            });
          }
          /**
           *updates endpoint
          */

        }, {
          key: "updatedonateUser",
          value: function updatedonateUser(reqBody, donateUserId) {
            return this._http.put(this.baseUrl + _const_api_constant__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINT"].donate.update + "/".concat(donateUserId), reqBody);
          }
          /**
           * delete endpoint
          */

        }, {
          key: "deletedonateUser",
          value: function deletedonateUser(reqBody) {
            return this._http["delete"](this.baseUrl + _const_api_constant__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINT"].donate["delete"] + "/".concat(reqBody.id), reqBody);
          }
          /**
           * @description fetch all Member as per filter
           
           */

        }, {
          key: "fetchAllBloodBank",
          value: function fetchAllBloodBank() {
            return this._http.get(this.baseUrl + _const_api_constant__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINT"].bloodBank.fetchall);
          }
        }, {
          key: "fetchAllUser",
          value: function fetchAllUser() {
            return this._http.get(this.baseUrl + _const_api_constant__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINT"].users.fetchAll);
          }
        }]);

        return UserBloodBankDonateHttpService;
      }();

      UserBloodBankDonateHttpService.ɵfac = function UserBloodBankDonateHttpService_Factory(t) {
        return new (t || UserBloodBankDonateHttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      UserBloodBankDonateHttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: UserBloodBankDonateHttpService,
        factory: UserBloodBankDonateHttpService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserBloodBankDonateHttpService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ToGV":
    /*!*********************************************************!*\
      !*** ./src/app/pages/url/services/url-https.service.ts ***!
      \*********************************************************/

    /*! exports provided: UrlHttpsService */

    /***/
    function ToGV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UrlHttpsService", function () {
        return UrlHttpsService;
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


      var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @env/environment */
      "AytR");
      /* harmony import */


      var _const_api_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @const/api.constant */
      "al6W");

      var UrlHttpsService = /*#__PURE__*/function () {
        function UrlHttpsService(_http) {
          _classCallCheck(this, UrlHttpsService);

          this._http = _http;
          this.baseUrl = _env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].websiteNodeHost;
        }
        /**
         * fetch all users as per filter
         */


        _createClass(UrlHttpsService, [{
          key: "fetchAllUrls",
          value: function fetchAllUrls() {
            var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _const_api_constant__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].pageSize;
            var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
            var where = arguments.length > 2 ? arguments[2] : undefined;
            var skip = (page - 1) * limit;
            var filter = {
              limit: limit,
              skip: skip,
              where: where
            };
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            httpParams = httpParams.append('filter', JSON.stringify(filter));
            return this._http.get(this.baseUrl + _const_api_constant__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINT"].url.fetchAll, {
              params: httpParams
            });
          }
          /**
           *fetch endpoint details by its {id}
           */

        }, {
          key: "fetchEndpointById",
          value: function fetchEndpointById(id) {
            return this._http.get(this.baseUrl + _const_api_constant__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINT"].url.fetchById + "/".concat(id));
          }
          /**
           * creates endpoint
          */

        }, {
          key: "createEndpoint",
          value: function createEndpoint(reqBody) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            return this._http.post(this.baseUrl + _const_api_constant__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINT"].url.create, reqBody, {
              params: params
            });
          }
          /**
           *updates endpoint
          */

        }, {
          key: "updateUrl",
          value: function updateUrl(reqBody, urlId) {
            return this._http.put(this.baseUrl + _const_api_constant__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINT"].url.update + "/".concat(urlId), reqBody);
          }
          /**
           * delete endpoint
          */

        }, {
          key: "deleteEndpoint",
          value: function deleteEndpoint(reqBody) {
            return this._http["delete"](this.baseUrl + _const_api_constant__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINT"].url["delete"] + "/".concat(reqBody.id), reqBody);
          }
          /**
           * @description fetch all Role as per filter
           
           */

        }, {
          key: "fetchAllRole",
          value: function fetchAllRole() {
            return this._http.get(this.baseUrl + _const_api_constant__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINT"].role.fetchAll);
          }
        }]);

        return UrlHttpsService;
      }();

      UrlHttpsService.ɵfac = function UrlHttpsService_Factory(t) {
        return new (t || UrlHttpsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      UrlHttpsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: UrlHttpsService,
        factory: UrlHttpsService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UrlHttpsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map