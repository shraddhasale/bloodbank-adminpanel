(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-url-url-module"], {
    /***/
    "+pSn":
    /*!*************************************************!*\
      !*** ./src/app/pages/url/url-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: UrlRoutingModule */

    /***/
    function pSn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UrlRoutingModule", function () {
        return UrlRoutingModule;
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


      var _url_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./url.component */
      "sJVi");
      /* harmony import */


      var _add_url_add_url_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-url/add-url.component */
      "lk+N");
      /* harmony import */


      var _edit_url_edit_url_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./edit-url/edit-url.component */
      "BlKz");

      var routes = [{
        path: '',
        component: _url_component__WEBPACK_IMPORTED_MODULE_2__["UrlComponent"]
      }, {
        path: 'add',
        component: _add_url_add_url_component__WEBPACK_IMPORTED_MODULE_3__["AddUrlComponent"]
      }, {
        path: 'edit/:id',
        component: _edit_url_edit_url_component__WEBPACK_IMPORTED_MODULE_4__["EditUrlComponent"]
      }];

      var UrlRoutingModule = function UrlRoutingModule() {
        _classCallCheck(this, UrlRoutingModule);
      };

      UrlRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: UrlRoutingModule
      });
      UrlRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function UrlRoutingModule_Factory(t) {
          return new (t || UrlRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UrlRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UrlRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "BlKz":
    /*!**********************************************************!*\
      !*** ./src/app/pages/url/edit-url/edit-url.component.ts ***!
      \**********************************************************/

    /*! exports provided: EditUrlComponent */

    /***/
    function BlKz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditUrlComponent", function () {
        return EditUrlComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_services_spinner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @shared/services/spinner.service */
      "ph+x");
      /* harmony import */


      var _services_url_https_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/url-https.service */
      "ToGV");
      /* harmony import */


      var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @shared/services/toast.service */
      "3WbM");
      /* harmony import */


      var _shared_components_page_titlebar_page_titlebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../shared/components/page-titlebar/page-titlebar.component */
      "f+2y");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _components_url_form_url_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../components/url-form/url-form.component */
      "aq1G"); // Rxjs


      function EditUrlComponent_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-url-form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function EditUrlComponent_ng_container_2_Template_app_url_form_submit_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r1.onUrlSubmit();
          })("back", function EditUrlComponent_ng_container_2_Template_app_url_form_back_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.redirectToEndpointListing();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("urlWrapper", ctx_r0.urlWrapper);
        }
      }

      var EditUrlComponent = /*#__PURE__*/function () {
        function EditUrlComponent(_router, _activatedRoute, _spinner, _urltHttp, _toast) {
          _classCallCheck(this, EditUrlComponent);

          this._router = _router;
          this._activatedRoute = _activatedRoute;
          this._spinner = _spinner;
          this._urltHttp = _urltHttp;
          this._toast = _toast;
          this.pageTitle = "Edit URL";
          this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        }

        _createClass(EditUrlComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.fetchEndpointById(this._activatedRoute.snapshot.params.id);
          }
        }, {
          key: "fetchEndpointById",
          value: function fetchEndpointById(endpointId) {
            var _this = this;

            this._spinner.show('Fetching Url Detail...');

            this.subscriptions.add(this._urltHttp.fetchEndpointById(endpointId).subscribe(function (res) {
              _this.urlWrapper = res;

              _this._spinner.hide();
            }, function (err) {
              _this._toast.error(err.error.message, 'Failed to Fetch URL Details');

              _this._spinner.hide();
            }));
          }
        }, {
          key: "onUrlSubmit",
          value: function onUrlSubmit() {
            var _this2 = this;

            var urlId = this.urlWrapper.id;

            if (this.urlWrapper.statusID === false) {
              this.urlWrapper.statusID = 0;
            } else if (this.urlWrapper.statusID === true) {
              this.urlWrapper.statusID = 1;
            }

            delete this.urlWrapper.id;
            delete this.urlWrapper.createdAt;
            delete this.urlWrapper.updatedAt;

            this._spinner.show('Updating URL ...');

            var updatedEndpointWrapper = Object.assign({}, this.urlWrapper);
            this.subscriptions.add(this._urltHttp.updateUrl(updatedEndpointWrapper, urlId).subscribe(function (res) {
              _this2._toast.success("Url ".concat(updatedEndpointWrapper.name, " updated successfully."));

              _this2.redirectToEndpointListing();

              _this2._spinner.hide();
            }, function (err) {
              _this2._toast.error(err.error.message, 'URL Update Failed');
            }));
          }
        }, {
          key: "redirectToEndpointListing",
          value: function redirectToEndpointListing() {
            this._router.navigate(['/urls']);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptions.unsubscribe();

            this._spinner.hide();
          }
        }]);

        return EditUrlComponent;
      }();

      EditUrlComponent.ɵfac = function EditUrlComponent_Factory(t) {
        return new (t || EditUrlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_spinner_service__WEBPACK_IMPORTED_MODULE_3__["SpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_url_https_service__WEBPACK_IMPORTED_MODULE_4__["UrlHttpsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]));
      };

      EditUrlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EditUrlComponent,
        selectors: [["app-edit-url"]],
        decls: 3,
        vars: 2,
        consts: [[3, "pageTitle"], [1, "main-section", "bg-white", "float-left", "w-100"], [4, "ngIf"], [3, "urlWrapper", "submit", "back"]],
        template: function EditUrlComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-page-titlebar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditUrlComponent_ng_container_2_Template, 2, 1, "ng-container", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageTitle", ctx.pageTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.urlWrapper);
          }
        },
        directives: [_shared_components_page_titlebar_page_titlebar_component__WEBPACK_IMPORTED_MODULE_6__["PageTitlebarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _components_url_form_url_form_component__WEBPACK_IMPORTED_MODULE_8__["UrlFormComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXVybC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditUrlComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-edit-url',
            templateUrl: './edit-url.component.html',
            styleUrls: ['./edit-url.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }, {
            type: _shared_services_spinner_service__WEBPACK_IMPORTED_MODULE_3__["SpinnerService"]
          }, {
            type: _services_url_https_service__WEBPACK_IMPORTED_MODULE_4__["UrlHttpsService"]
          }, {
            type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "JweD":
    /*!**********************************************************!*\
      !*** ./src/app/pages/url/constants/endpoint.constant.ts ***!
      \**********************************************************/

    /*! exports provided: VERB_TYPE_LIST */

    /***/
    function JweD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VERB_TYPE_LIST", function () {
        return VERB_TYPE_LIST;
      }); // ! list of verb used in form to display all options


      var VERB_TYPE_LIST = ['GET', 'POST', 'DELETE', 'PUT'];
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

    },

    /***/
    "aq1G":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/url/components/url-form/url-form.component.ts ***!
      \*********************************************************************/

    /*! exports provided: UrlFormComponent */

    /***/
    function aq1G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UrlFormComponent", function () {
        return UrlFormComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var lodash_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! lodash.get */
      "yDJ3");
      /* harmony import */


      var lodash_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var lodash_set__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! lodash.set */
      "9MQZ");
      /* harmony import */


      var lodash_set__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_set__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _constants_endpoint_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../constants/endpoint.constant */
      "JweD");
      /* harmony import */


      var _const_api_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @const/api.constant */
      "al6W");
      /* harmony import */


      var _services_url_https_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../services/url-https.service */
      "ToGV");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "ZOsW");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = function _c0(a0) {
        return {
          disabled: a0
        };
      };

      var UrlFormComponent = /*#__PURE__*/function () {
        function UrlFormComponent(_formBuilder, _urlhttps) {
          _classCallCheck(this, UrlFormComponent);

          this._formBuilder = _formBuilder;
          this._urlhttps = _urlhttps;
          this.submit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.back = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
          this.roleList = [];
          this.roleId = [];
          this.VerbList = _constants_endpoint_constant__WEBPACK_IMPORTED_MODULE_5__["VERB_TYPE_LIST"];
        }

        _createClass(UrlFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initEndpointForm();
            this.getRoleList(); // if(this.urlWrapper.id){
            //   this._urlhttps.fetchAllRole().subscribe(resp=>{
            //     resp['data'].map(res =>{
            //      this.urlWrapper.roleID.map(resp =>{
            //         console.log(resp);
            //       })
            //     })
            //   })
            // }
          }
          /**
           * @description initiate endpoint form
           * @memberof EndpointFormComponent
           */

        }, {
          key: "initEndpointForm",
          value: function initEndpointForm() {
            this.urlForm = this._formBuilder.group({
              name: [lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(this.urlWrapper, ['name'], ''), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              endPoint: [lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(this.urlWrapper, ['endPoint'], ''), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              verb: [lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(this.urlWrapper, ['verb'], ''), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              roleID: [lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(this.urlWrapper, ['roleID'], '')],
              statusID: [lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(this.urlWrapper, ['statusID'], _const_api_constant__WEBPACK_IMPORTED_MODULE_6__["StatusEnum"].ACTIVE)]
            });
          }
          /**
           * @description on submit, map to wrapper and emit submit event
           * @memberof EndpointFormComponent
           */

        }, {
          key: "onSubmit",
          value: function onSubmit() {
            this.mapToWrapper();
            this.submit.emit();
          }
          /**
           * @description map form value to wrapper
           * @memberof EndpointFormComponent
           */

        }, {
          key: "mapToWrapper",
          value: function mapToWrapper() {
            var formValue = this.urlForm.getRawValue();
            lodash_set__WEBPACK_IMPORTED_MODULE_4___default()(this.urlWrapper, ['name'], formValue['name']);
            lodash_set__WEBPACK_IMPORTED_MODULE_4___default()(this.urlWrapper, ['endPoint'], formValue['endPoint']);
            lodash_set__WEBPACK_IMPORTED_MODULE_4___default()(this.urlWrapper, ['verb'], formValue['verb']);
            lodash_set__WEBPACK_IMPORTED_MODULE_4___default()(this.urlWrapper, ['statusID'], formValue['statusID']);
            lodash_set__WEBPACK_IMPORTED_MODULE_4___default()(this.urlWrapper, ['roleID'], this.roleId);
          }
        }, {
          key: "getRoleList",
          value: function getRoleList() {
            var _this3 = this;

            this.subscriptions.add(this._urlhttps.fetchAllRole().subscribe(function (resp) {
              _this3.roleList = resp.data;
            }));
          }
        }, {
          key: "onRoleChange",
          value: function onRoleChange(role) {
            if (role) {
              this.roleId = role.map(function (resp) {
                return resp.id;
              });
            }
          }
          /**
             * @description emit back click
             * @memberof EndpointFormComponent
             */

        }, {
          key: "onBackClick",
          value: function onBackClick() {
            this.back.emit();
          }
        }]);

        return UrlFormComponent;
      }();

      UrlFormComponent.ɵfac = function UrlFormComponent_Factory(t) {
        return new (t || UrlFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_url_https_service__WEBPACK_IMPORTED_MODULE_7__["UrlHttpsService"]));
      };

      UrlFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UrlFormComponent,
        selectors: [["app-url-form"]],
        inputs: {
          urlWrapper: "urlWrapper"
        },
        outputs: {
          submit: "submit",
          back: "back"
        },
        decls: 30,
        vars: 11,
        consts: [[1, "p-4", "pb-0", 3, "formGroup"], [1, "row"], [1, "form-group", "col-lg-8", "required"], ["type", "text", "formControlName", "endPoint", 1, "form-control"], [1, "form-group", "col-lg-4", "mt-4", "d-flex", "justify-content-end"], [1, "switchToggle"], ["type", "checkbox", "formControlName", "statusID"], [1, "switchSlider"], ["type", "text", "formControlName", "name", 1, "form-control"], [1, "col-8", "form-group", "required"], ["formControlName", "verb", 1, "w-100", "text-capitalize", 3, "multiple", "items", "searchable"], ["bindLabel", "name", "bindValue", "name", "formControlName", "roleID", 1, "w-100", "text-capitalize", 3, "multiple", "items", "searchable", "change"], [1, "footer", "clearfix", "p-4"], ["type", "button", 1, "btn", "btn-outline-primary", "font-weight-bold", "float-left", "px-4", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "font-weight-bold", "float-right", "px-4", 3, "ngClass", "disabled", "click"]],
        template: function UrlFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Endpoint");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Verb");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "ng-select", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Role");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ng-select", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UrlFormComponent_Template_ng_select_change_24_listener($event) {
              return ctx.onRoleChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UrlFormComponent_Template_button_click_26_listener() {
              return ctx.onBackClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " BACK ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UrlFormComponent_Template_button_click_28_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " SAVE ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.urlForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multiple", false)("items", ctx.VerbList)("searchable", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multiple", true)("items", ctx.roleList)("searchable", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.urlForm.invalid))("disabled", ctx.urlForm.invalid || ctx.roleId.length === 0);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cmwtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UrlFormComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-url-form',
            templateUrl: './url-form.component.html',
            styleUrls: ['./url-form.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _services_url_https_service__WEBPACK_IMPORTED_MODULE_7__["UrlHttpsService"]
          }];
        }, {
          urlWrapper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          submit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          back: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "l1zM":
    /*!*****************************************!*\
      !*** ./src/app/pages/url/url.module.ts ***!
      \*****************************************/

    /*! exports provided: UrlModule */

    /***/
    function l1zM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UrlModule", function () {
        return UrlModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      "PCNd");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "ZOsW");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _url_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./url-routing.module */
      "+pSn");
      /* harmony import */


      var _url_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./url.component */
      "sJVi");
      /* harmony import */


      var _components_url_listing_url_listing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/url-listing/url-listing.component */
      "ncR7");
      /* harmony import */


      var _edit_url_edit_url_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./edit-url/edit-url.component */
      "BlKz");
      /* harmony import */


      var _add_url_add_url_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./add-url/add-url.component */
      "lk+N");
      /* harmony import */


      var _components_url_form_url_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/url-form/url-form.component */
      "aq1G");
      /* harmony import */


      var _services_url_https_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./services/url-https.service */
      "ToGV");

      var UrlModule = function UrlModule() {
        _classCallCheck(this, UrlModule);
      };

      UrlModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: UrlModule
      });
      UrlModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function UrlModule_Factory(t) {
          return new (t || UrlModule)();
        },
        providers: [_services_url_https_service__WEBPACK_IMPORTED_MODULE_12__["UrlHttpsService"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbTooltipModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownModule"], _url_routing_module__WEBPACK_IMPORTED_MODULE_6__["UrlRoutingModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UrlModule, {
          declarations: [_edit_url_edit_url_component__WEBPACK_IMPORTED_MODULE_9__["EditUrlComponent"], _add_url_add_url_component__WEBPACK_IMPORTED_MODULE_10__["AddUrlComponent"], _components_url_form_url_form_component__WEBPACK_IMPORTED_MODULE_11__["UrlFormComponent"], _components_url_listing_url_listing_component__WEBPACK_IMPORTED_MODULE_8__["UrlListingComponent"], _url_component__WEBPACK_IMPORTED_MODULE_7__["UrlComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbTooltipModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownModule"], _url_routing_module__WEBPACK_IMPORTED_MODULE_6__["UrlRoutingModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UrlModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_edit_url_edit_url_component__WEBPACK_IMPORTED_MODULE_9__["EditUrlComponent"], _add_url_add_url_component__WEBPACK_IMPORTED_MODULE_10__["AddUrlComponent"], _components_url_form_url_form_component__WEBPACK_IMPORTED_MODULE_11__["UrlFormComponent"], _components_url_listing_url_listing_component__WEBPACK_IMPORTED_MODULE_8__["UrlListingComponent"], _url_component__WEBPACK_IMPORTED_MODULE_7__["UrlComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbTooltipModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownModule"], _url_routing_module__WEBPACK_IMPORTED_MODULE_6__["UrlRoutingModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]],
            providers: [_services_url_https_service__WEBPACK_IMPORTED_MODULE_12__["UrlHttpsService"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "lk+N":
    /*!********************************************************!*\
      !*** ./src/app/pages/url/add-url/add-url.component.ts ***!
      \********************************************************/

    /*! exports provided: AddUrlComponent */

    /***/
    function lkN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddUrlComponent", function () {
        return AddUrlComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _const_api_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @const/api.constant */
      "al6W");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_url_https_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/url-https.service */
      "ToGV");
      /* harmony import */


      var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @shared/services/toast.service */
      "3WbM");
      /* harmony import */


      var _shared_services_spinner_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @shared/services/spinner.service */
      "ph+x");
      /* harmony import */


      var _components_url_form_url_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../components/url-form/url-form.component */
      "aq1G"); // Rxjs


      var AddUrlComponent = /*#__PURE__*/function () {
        function AddUrlComponent(_router, _urlHttp, _toast, _spinner) {
          _classCallCheck(this, AddUrlComponent);

          this._router = _router;
          this._urlHttp = _urlHttp;
          this._toast = _toast;
          this._spinner = _spinner;
          this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        }

        _createClass(AddUrlComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initiateUrlForm();
          }
        }, {
          key: "initiateUrlForm",
          value: function initiateUrlForm() {
            this.urlWrapper = {
              name: '',
              endPoint: '',
              verb: '',
              roleID: [],
              statusID: _const_api_constant__WEBPACK_IMPORTED_MODULE_2__["StatusEnum"].ACTIVE
            };
          }
        }, {
          key: "onUrlSubmit",
          value: function onUrlSubmit() {
            var _this4 = this;

            this._spinner.show("Saving url ".concat(this.urlWrapper.name, "...")); // console.log(this.urlWrapper);


            if (this.urlWrapper.statusID === false) {
              this.urlWrapper.statusID = 0;
            } else if (this.urlWrapper.statusID === true) {
              this.urlWrapper.statusID = 1;
            }

            this.subscriptions.add(this._urlHttp.createEndpoint(this.urlWrapper).subscribe(function (res) {
              _this4.redirectToEndpointListing();

              _this4._toast.success("".concat(_this4.urlWrapper.name, " Added Sucessfully"));
            }, function (err) {
              _this4._toast.error(err.error.message);
            })); //   // this._spinner.hide();
          }
        }, {
          key: "redirectToEndpointListing",
          value: function redirectToEndpointListing() {
            this._router.navigate(['/urls']);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptions.unsubscribe(); // this._spinner.hide();
          }
        }]);

        return AddUrlComponent;
      }();

      AddUrlComponent.ɵfac = function AddUrlComponent_Factory(t) {
        return new (t || AddUrlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_url_https_service__WEBPACK_IMPORTED_MODULE_4__["UrlHttpsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_spinner_service__WEBPACK_IMPORTED_MODULE_6__["SpinnerService"]));
      };

      AddUrlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddUrlComponent,
        selectors: [["app-add-url"]],
        decls: 2,
        vars: 1,
        consts: [[1, "main-section", "bg-white", "float-left", "w-100"], [3, "urlWrapper", "submit", "back"]],
        template: function AddUrlComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-url-form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function AddUrlComponent_Template_app_url_form_submit_1_listener() {
              return ctx.onUrlSubmit();
            })("back", function AddUrlComponent_Template_app_url_form_back_1_listener() {
              return ctx.redirectToEndpointListing();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("urlWrapper", ctx.urlWrapper);
          }
        },
        directives: [_components_url_form_url_form_component__WEBPACK_IMPORTED_MODULE_7__["UrlFormComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtdXJsLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddUrlComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-add-url',
            templateUrl: './add-url.component.html',
            styleUrls: ['./add-url.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _services_url_https_service__WEBPACK_IMPORTED_MODULE_4__["UrlHttpsService"]
          }, {
            type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]
          }, {
            type: _shared_services_spinner_service__WEBPACK_IMPORTED_MODULE_6__["SpinnerService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ncR7":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/url/components/url-listing/url-listing.component.ts ***!
      \***************************************************************************/

    /*! exports provided: UrlListingComponent */

    /***/
    function ncR7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UrlListingComponent", function () {
        return UrlListingComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _shared_components_action_bar_action_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../shared/components/action-bar/action-bar.component */
      "mLoM");

      function UrlListingComponent_tr_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "app-action-bar", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onItemUpdate", function UrlListingComponent_tr_17_Template_app_action_bar_onItemUpdate_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.onUpdate($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var user_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 9, user_r1 == null ? null : user_r1.createdAt, "dd/MM/yyyy"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r1 == null ? null : user_r1.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r1 == null ? null : user_r1.endPoint, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r1 == null ? null : user_r1.verb, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r1 == null ? null : user_r1.roleID, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", user_r1)("showStatus", false)("showClone", false)("editPageUrl", ctx_r0.userUrl + user_r1.id);
        }
      }

      var UrlListingComponent = /*#__PURE__*/function () {
        function UrlListingComponent() {
          _classCallCheck(this, UrlListingComponent);

          this.statusUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.userUrl = 'edit/';
        }

        _createClass(UrlListingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onUpdate",
          value: function onUpdate(updatedUserData) {
            this.statusUpdate.emit(updatedUserData);
          }
        }]);

        return UrlListingComponent;
      }();

      UrlListingComponent.ɵfac = function UrlListingComponent_Factory(t) {
        return new (t || UrlListingComponent)();
      };

      UrlListingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UrlListingComponent,
        selectors: [["app-url-listing"]],
        inputs: {
          urlList: "urlList"
        },
        outputs: {
          statusUpdate: "statusUpdate"
        },
        decls: 18,
        vars: 1,
        consts: [[1, "acl-user-container"], [1, "table", "user-table"], [1, "border-top", "border-bottom"], [1, "font-weight-normal", "align-middle", "pl-3"], [1, "font-weight-normal", "align-middle"], [1, "font-weight-normal", "align-middle", "px-3"], [1, "font-weight-normal", "align-middle", "px-3", 2, "width", "120px"], ["class", "border-bottom", 4, "ngFor", "ngForOf"], [1, "border-bottom"], [1, "align-middle", "pl-3"], [1, "align-middle", "text-primary"], [1, "align-middle"], [3, "item", "showStatus", "showClone", "editPageUrl", "onItemUpdate"]],
        template: function UrlListingComponent_Template(rf, ctx) {
          if (rf & 1) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "End Point");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Verb");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "roleID");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, UrlListingComponent_tr_17_Template, 14, 12, "tr", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.urlList);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _shared_components_action_bar_action_bar_component__WEBPACK_IMPORTED_MODULE_2__["ActionBarComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cmwtbGlzdGluZy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UrlListingComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-url-listing',
            templateUrl: './url-listing.component.html',
            styleUrls: ['./url-listing.component.scss']
          }]
        }], function () {
          return [];
        }, {
          urlList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          statusUpdate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "sJVi":
    /*!********************************************!*\
      !*** ./src/app/pages/url/url.component.ts ***!
      \********************************************/

    /*! exports provided: UrlComponent */

    /***/
    function sJVi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UrlComponent", function () {
        return UrlComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _const_api_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @const/api.constant */
      "al6W");
      /* harmony import */


      var _services_url_https_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./services/url-https.service */
      "ToGV");
      /* harmony import */


      var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @shared/services/toast.service */
      "3WbM");
      /* harmony import */


      var _shared_services_spinner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @shared/services/spinner.service */
      "ph+x");
      /* harmony import */


      var _shared_components_page_titlebar_page_titlebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../shared/components/page-titlebar/page-titlebar.component */
      "f+2y");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _shared_components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../shared/components/search-bar/search-bar.component */
      "dRJ3");
      /* harmony import */


      var _components_url_listing_url_listing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/url-listing/url-listing.component */
      "ncR7");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../shared/components/pagination/pagination.component */
      "NhFE");

      function UrlComponent_app_pagination_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-pagination", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function UrlComponent_app_pagination_6_Template_app_pagination_pageChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r1.onPageChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("total", ctx_r0.urlCount)("currentPage", ctx_r0.currentPage);
        }
      }

      var UrlComponent = /*#__PURE__*/function () {
        function UrlComponent(_urlhttps, _toast, _spinner) {
          _classCallCheck(this, UrlComponent);

          this._urlhttps = _urlhttps;
          this._toast = _toast;
          this._spinner = _spinner;
          this.button = {
            label: 'Add New URL',
            routerLink: ['/urls/add']
          };
          this.pageTitle = 'URL';
          this.pageSize = _const_api_constant__WEBPACK_IMPORTED_MODULE_2__["API_CONFIG"].pageSize;
          this.paginationTotalCount = 0;
          this.currentPage = 1;
          this.where = {
            statusID: {
              inq: [_const_api_constant__WEBPACK_IMPORTED_MODULE_2__["StatusEnum"].ACTIVE, _const_api_constant__WEBPACK_IMPORTED_MODULE_2__["StatusEnum"].INACTIVE]
            }
          };
          this.urlCount = 0;
          this.urlList = [];
          this.urlFilter = {};
          this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        }

        _createClass(UrlComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getUrlList();
          }
        }, {
          key: "getUrlList",
          value: function getUrlList() {
            var _this5 = this;

            this._spinner.show("Fetching URL list...");

            this.subscriptions.add(this._urlhttps.fetchAllUrls(this.pageSize, this.currentPage, this.where).subscribe(function (resp) {
              if (resp && resp['data'] && resp['data'].length > 0) {
                _this5.urlList = resp['data'].map(function (url) {
                  if (url.roleID && resp['relationData'] && resp['relationData'].role) {
                    url.roleID = url.roleID.map(function (urlId) {
                      var roleData = resp['relationData'].role[urlId] || "";
                      return roleData;
                    });
                  }

                  return url;
                });
              } else {
                _this5.urlList = [];
              }

              _this5.urlCount = resp.count;

              _this5._spinner.hide();
            }, function (err) {
              _this5._toast.error(err.error.message);

              _this5._spinner.hide();
            }));
          }
        }, {
          key: "onPageChange",
          value: function onPageChange(currentPage) {
            this.currentPage = currentPage;
            this.getUrlList();
          }
        }, {
          key: "onSearchChange",
          value: function onSearchChange(searchString) {
            this.searchString = searchString;

            if (this.searchString) {
              this.where.search = searchString;
            } else {
              delete this.where.search;
            }

            this.currentPage = 1;
            this.getUrlList();
          }
        }, {
          key: "onStatusUpdate",
          value: function onStatusUpdate(url) {
            var _this6 = this;

            this.subscriptions.add(this._urlhttps.deleteEndpoint(url).subscribe(function (resp) {
              _this6.getUrlList();

              _this6._toast.success("Url Delete Sucessfully");
            }, function (err) {
              _this6._toast.error(err.error.message);
            }));
          }
        }]);

        return UrlComponent;
      }();

      UrlComponent.ɵfac = function UrlComponent_Factory(t) {
        return new (t || UrlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_url_https_service__WEBPACK_IMPORTED_MODULE_3__["UrlHttpsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_spinner_service__WEBPACK_IMPORTED_MODULE_5__["SpinnerService"]));
      };

      UrlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UrlComponent,
        selectors: [["app-url"]],
        decls: 7,
        vars: 6,
        consts: [[3, "pageTitle", "itemCount", "button"], [1, "bg-white"], [1, "navbar", "navbar-expand-sm", "bg-white", "justify-content-between"], [1, "col-md-5", "p-0"], [3, "placeholder", "searchChange"], [3, "urlList", "statusUpdate"], [3, "total", "currentPage", "pageChange", 4, "ngIf"], [3, "total", "currentPage", "pageChange"]],
        template: function UrlComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-page-titlebar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-search-bar", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("searchChange", function UrlComponent_Template_app_search_bar_searchChange_4_listener($event) {
              return ctx.onSearchChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-url-listing", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("statusUpdate", function UrlComponent_Template_app_url_listing_statusUpdate_5_listener($event) {
              return ctx.onStatusUpdate($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UrlComponent_app_pagination_6_Template, 1, 2, "app-pagination", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageTitle", ctx.pageTitle)("itemCount", ctx.urlCount)("button", ctx.button);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", "Search by  Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("urlList", ctx.urlList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.urlCount);
          }
        },
        directives: [_shared_components_page_titlebar_page_titlebar_component__WEBPACK_IMPORTED_MODULE_6__["PageTitlebarComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbNavbar"], _shared_components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_8__["SearchBarComponent"], _components_url_listing_url_listing_component__WEBPACK_IMPORTED_MODULE_9__["UrlListingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_11__["PaginationComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cmwuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UrlComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-url',
            templateUrl: './url.component.html',
            styleUrls: ['./url.component.scss']
          }]
        }], function () {
          return [{
            type: _services_url_https_service__WEBPACK_IMPORTED_MODULE_3__["UrlHttpsService"]
          }, {
            type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]
          }, {
            type: _shared_services_spinner_service__WEBPACK_IMPORTED_MODULE_5__["SpinnerService"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-url-url-module-es5.js.map