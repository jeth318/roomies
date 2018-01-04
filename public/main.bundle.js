webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face {\n    font-family: 'KraftNine';\n    src: url('/assets/fonts/KraftNine.ttf') format('truetype');\n}\n\nhtml {\n    background-color: darkslategrey;\n}\n\n/* ----- BODY ------*/\nbody {\n    font-family: 'Indie Flower', cursive;\n    background-repeat: no-repeat;\n    background-size: cover;\n    padding-top: 40px;\n}\n\nbody ::-webkit-scrollbar-track {\n    background: transparent;\n} \n\nbody ::-webkit-scrollbar { \n    display: none; \n} ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-schedule></app-schedule>\n<app-member></app-member>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_schedule_schedule_component__ = __webpack_require__("../../../../../src/app/components/schedule/schedule.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_header_header_component__ = __webpack_require__("../../../../../src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_member_service__ = __webpack_require__("../../../../../src/app/services/member.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_task_service__ = __webpack_require__("../../../../../src/app/services/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_admin_admin_component__ = __webpack_require__("../../../../../src/app/components/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_member_member_component__ = __webpack_require__("../../../../../src/app/components/member/member.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_schedule_schedule_component__["a" /* ScheduleComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_admin_admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_member_member_component__["a" /* MemberComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__services_member_service__["a" /* MemberService */], __WEBPACK_IMPORTED_MODULE_7__services_task_service__["a" /* TaskService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin/admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div style=\"margin-bottom: 20px;\">\n      <input type=\"text\" #firstname>\n      <input type=\"text\" #lastname>\n      <button type=\"button\" (click) = 'doCreate(firstname.value, lastname.value)'>Add</button>\n  </div>\n\n  "

/***/ }),

/***/ "../../../../../src/app/components/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_member_service__ = __webpack_require__("../../../../../src/app/services/member.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminComponent = (function () {
    function AdminComponent(_memberService) {
        this._memberService = _memberService;
        this.members = [];
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._memberService.getAllMembers()
            .subscribe(function (data) {
            if (data.success) {
                data.members.forEach(function (m) {
                    _this.members.push(m);
                });
            }
            else {
                console.log('shit');
            }
        });
    };
    AdminComponent.prototype.doCreate = function (fn, ln) {
        if (fn && ln) {
            this._memberService.createMember({ priority: this.members.length + 1, firstName: fn, lastName: ln })
                .subscribe(function (data) {
                data.success && console.log('YEAH');
                !data.success && console.log('fail');
            });
        }
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-admin',
            template: __webpack_require__("../../../../../src/app/components/admin/admin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_member_service__["a" /* MemberService */]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.header {\n    font-family: 'KraftNine', sans-serif; \n    text-align: left;\n    padding: 1rem 1rem 3rem;\n    font-size: 4rem;\n    color: purple;\n}\n\n@media screen and (max-width: 525px) {\n\n    .header {\n        font-size: 3rem;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">{{headerText}}</div>"

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
        this.headerText = "Roomies!";
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/components/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/member/member.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".member-area{\n    font-size: 1.5rem;\n    margin-top: 40px;\n}\n.member-area form{\n    font-size: 1.5rem;\n}\n\n.flash {\n    font-family: 'Indie Flower', cursive;\n}\n\nh3 {\n    font-size: 2rem !important;\n    font-family: 'Indie Flower', cursive !important;\n}\n\n.modal-invisible {\n    display: none;\n}\n.modal-invisible {\n    display: all;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/member/member.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui container member-area\">\n  <div class=\"ui one columns grid centered stackable\">\n    <div class=\"column\">\n        <button type=\"button\" class=\"ui button primary \"(click)=\"toggleCrudView()\">{{settingsText}}</button>\n    </div>\n  </div>\n</div>\n<div class=\"ui container member-area\" *ngIf=\"showMembersArea==true\">\n    <div class=\"ui two columns grid centered stackable\">\n      <div class=\"column\">\n          <table class=\"ui striped table unstackable\">\n              <thead>\n                <tr>\n                  <th>#</th>\n                  <th>Förnamn</th>\n                  <th>Efternamn</th>\n                  <th>Välj</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let member of members; let i = index;\">\n                  <td>{{i+1}}</td>\n                  <td>{{member.firstName}}</td>\n                  <td>{{member.lastName}}</td>\n                  <td>\n                    <input class=\"ui radio\" type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios1\" value=\"case\" (click)=\"selectedMember(member._id)\">\n                  </td>\n                </tr>\n              </tbody>\n                <tfoot class=\"full-width\">\n                <tr>\n                  <th></th>\n                  <th colspan=\"4\">\n                    <div class=\"ui right floated small primary labeled icon button\" (click)=\"initializeNew()\">\n                      <i class=\"laptop icon\"></i> Lägg till ny roomie\n                    </div>\n                  </th>\n                </tr>\n              </tfoot>\n            </table>\n      </div>\n      <div class=\"column\" *ngIf=\"modalVisible==true\">\n          <div class=\"ui segments\">\n              <div class=\"ui segment\">\n                <h3 class=\"ui green header\" *ngIf=\"addMember==true\" >Lägg till roomie</h3>\n                <h3 class=\"ui green header\" *ngIf=\"addMember==false\" >Uppdatera roomie</h3>\n                \n              </div>\n              <div class=\"ui segment padded left aligned\">\n                <form class=\"ui form\">\n                  <div class=\"field required\">\n                    <label for=\"name\">Förnamn</label>\n                    <input type=\"text\" class=\"form-control\" id=\"forname\" [(ngModel)]=\"memberModel.firstName\" name=\"firstname\">\n                  </div>\n                  <div class=\"field required\">\n                    <label for=\"id\">Efternamn</label>\n                    <input type=\"text\" class=\"form-control\" id=\"lastname\" [(ngModel)]=\"memberModel.lastName\" name=\"lastname\">\n                  </div>\n                  <!-- <div class=\"field required\">\n                    <label for=\"id\">Om gängmedlemmen</label>\n                    <textarea rows=\"2\" [(ngModel)]=\"description\" name=\"description\"></textarea>\n                  </div>    -->         \n                  <div *ngIf=\"addMember==false\">\n                    <button type=\"submit\" [ngClass]=\"isLoading==true ? 'ui button primary disabled' : 'ui button primary'\" (click)=\"updateMember()\">Uppdatera</button>\n                    <button type=\"submit\" [ngClass]=\"isLoading==true ? 'ui button red disabled' : 'ui button red'\" (click)=\"deleteMember()\">Ta bort</button>\n                    <span *ngIf=\"isLoading==true\" class=\"flash flash-loading\" >Laddar...</span>         \n                    <span *ngIf=\"successMessage\" class=\"ui header green flash flash-success\">{{successMessage}}</span>\n                                        \n                  </div>\n                  <div *ngIf=\"addMember==true\">\n                    <button type=\"button\" [ngClass]=\"isLoading==true ? 'ui button primary disabled' : 'ui button primary'\" (click)=\"addNew()\">Spara</button>\n                    <span *ngIf=\"isLoading==true\" class=\"flash flash-loading\" >Laddar...</span>\n                    <span *ngIf=\"successMessage\" class=\"ui header green flash flash-success\">{{successMessage}}</span>\n                    <span *ngIf=\"errorMessage\" class=\"ui header red flash flash-fail\">{{errorMessage}}</span >\n                  </div>\n                </form>\n              </div>\n            </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/member/member.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_member_service__ = __webpack_require__("../../../../../src/app/services/member.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MemberComponent = (function () {
    function MemberComponent(_memberService) {
        this._memberService = _memberService;
        this.members = [];
        this.firstName = '';
        this.lastName = '';
        this.description = '';
        this.addMember = true;
        this.memberModel = {};
        this.isLoading = false;
        this.modalVisible = false;
        this.showMembersArea = false;
        this.settingsText = 'Visa inställningar';
        this.showMembersArea ? this.settingsText == 'Göm inställningar' : 'Visa inställningar';
    }
    MemberComponent.prototype.ngOnInit = function () {
        this.getAllMembers();
    };
    MemberComponent.prototype.toggleCrudView = function () {
        this.showMembersArea = !this.showMembersArea;
        if (this.showMembersArea) {
            this.settingsText = 'Göm inställningar';
        }
        else {
            this.settingsText = 'Visa inställningar';
        }
    };
    MemberComponent.prototype.getAllMembers = function () {
        var _this = this;
        console.log(this.memberModel);
        this._memberService.getAllMembers().subscribe(function (data) {
            if (data.success) {
                _this.members = data.members;
            }
        });
    };
    MemberComponent.prototype.selectedMember = function (id) {
        var _this = this;
        this.modalVisible = true;
        this.addMember = false;
        this._memberService.getMemberById(id).subscribe(function (data) {
            _this.memberModel = data.member;
        });
    };
    MemberComponent.prototype.updateMember = function () {
        var _this = this;
        this.isLoading = true;
        this._memberService.updateMemberName(this.memberModel).subscribe(function (data) { }, function (error) { }, function () {
            _this.getAllMembers();
            _this.isLoading = false;
            _this.memberModel = {};
            _this.modalVisible = false;
        });
    };
    MemberComponent.prototype.deleteMember = function () {
        var _this = this;
        this.isLoading = true;
        var txt;
        var r = confirm("S\u00E4ker p\u00E5 att du vill ta bort " + this.memberModel.firstName + "?");
        if (r == true) {
            txt = "You pressed OK!";
            this._memberService.deleteMember(this.memberModel._id).subscribe(function (data) { console.log('Tjena'); }, function (error) { }, function () {
                _this.getAllMembers();
                _this.isLoading = false;
                _this.memberModel = {};
                _this.addMember = true;
                _this.modalVisible = false;
            });
        }
        else {
            txt = "You pressed Cancel!";
        }
    };
    MemberComponent.prototype.initializeNew = function () {
        this.addMember = true;
        this.modalVisible = true;
        this.getAllMembers();
        this.memberModel = {};
    };
    MemberComponent.prototype.addNew = function () {
        var _this = this;
        this.isLoading = true;
        this.memberModel.priority = this.members.length + 1;
        this._memberService.createMember(this.memberModel).subscribe(function (data) { console.log('Tjena'); }, function (error) { }, function () {
            _this.getAllMembers();
            _this.isLoading = false;
            _this.memberModel = {};
            _this.modalVisible = false;
        });
    };
    MemberComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-member',
            template: __webpack_require__("../../../../../src/app/components/member/member.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/member/member.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_member_service__["a" /* MemberService */]])
    ], MemberComponent);
    return MemberComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/schedule/schedule.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n/* ----- TABLE ------*/\ntable {\n    max-width: 700px;\n    padding: 0px !important;\n    width: 100%;\n    background: #fff;\n    box-shadow: none;\n    border-radius: .28571429rem;\n    border-spacing: 0;\n}\n\ntr.month-mobile {\n    background-color: lightgrey;\n    font-size: 1.7rem;\n    display:all;\n    text-align: center;\n}\n\nth {\n    font-size: 1.4rem;\n    font-weight: 300; \n    color:white;\n    background-color:rgba(0, 0, 0, 0.659);\n    border: 1px solid lightgrey;\n    height: 40px;\n}\n\nth.member {\n    display: all;\n    min-width: 80px;\n    font-size: 1.7rem;\n}\nth.member-mobile {\n    display: all;\n    width: 74px;\n    border-radius: 3px;\n}\n\nth.month {\n    width: 90px;\n    font-size: 2rem;\n    background-color: #7a2e85;\n    color: white;\n    display: all;    \n}\n\n.thead-table {\n    margin-bottom: 0;\n    border-spacing: 1px;\n    border-radius: 3px, 3px, 0px, 0px;\n}\n\n.task-table {\n    border-top: none;\n    border-bottom: 1px solid grey;\n    border-radius: 3px, 3px;\n}\n\n.table-wrapper {\n    margin-left: 0 !important;\n    margin-right: 0 !important;\n}\n\n.table-wrapper-inner {\n    max-height: 80vh;\n    -webkit-overflow-scrolling: touch;\n    overflow-y: scroll;\n}\n\ntr.current td{\n    background-color: lightgreen;\n}\n\ntd.month {\n    width: 90px;\n    text-align: center;\n    border-bottom: 1px solid darkgrey;\n    font-weight: 500;\n    background-color: lightgrey;\n    font-size: 1.3rem;\n    padding: 0;\n    display: all;\n}\n\ntd.month-mobile{\n    padding: 0.3rem;\n}\n\ntd.icon{\n    height: 75px;\n    text-align: center;\n    border-left: 1px solid rgba(34,36,38,.1);\n    border-bottom: 1px solid lightgrey;\n}\n\n/* td.köket {\n    background-image: url('../../../images/kitchen-spoons-set.png');\n}\ntd.damsuga {\n    background-image: url('../../../images/vacuum.png');\n}\ntd.tvätt {\n    background-image: url('../../../images/washing-machine.png');\n}\ntd.stora-badrummet {\n    background-image: url('../../../images/water-closet.png');\n}\ntd.lilla-badrummen {\n    background-image: url('../../../images/water-closet-small.png');\n} */\n\n.icon-img {\n    max-width:100%;\n    max-height:100%;\n    text-align: center;\n    padding: 10px;\n}\n\n/* ----- MEDIA QUERIES ------*/\n\n@media screen and (min-width: 525px) {\n    tr.month-mobile {\n        display: none;\n    }\n    th.member-mobile {\n        display: none;\n    }\n}\n\n@media screen and (max-width: 525px) {\n    td.month, th.month, th.member {\n        display: none;\n    }\n    td.icon {\n        height: 65px;\n    }\n    header {\n        font-size: 3rem;\n    }\n    .table-wrapper-inner {\n        max-height: 80vh;\n    }\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/schedule/schedule.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui centered grid table-wrapper\">\n  <table class=\"thead-table\">\n    <thead>\n      <tr>\n        <th class=\"month\">{{year}}</th>\n        <th *ngFor=\"let member of members; let i = index; let even = even;\" attr.data-memberid=\"{{member._id}}\" class=\"member-mobile\">{{getInitials(i)}}</th>\n        <th *ngFor=\"let member of members; let i = index; let even = even;\" attr.data-memberid=\"{{member._id}}\" class=\"member\">{{member.firstName}}</th>\n      </tr>\n    </thead>\n  </table>\n</div>\n<div class=\"ui centered grid table-wrapper table-wrapper-inner\">\n  <table class=\"task-table\">\n    <tbody *ngFor=\"let month of months; let monthIndex = index; let even = even;\">\n      <tr class=\"month-mobile\">\n        <td colSpan=\"{{getMembersLength()}}\" class=\"month-mobile\">{{month}}</td>\n      </tr>\n      <tr class=\"{{currentMonth(monthIndex)? 'current' : ''}}\">\n        <td class=\"month\">{{month}}</td>\n        <td class=\"icon\" *ngFor=\"let member of members; let i = index; let even = even;\">\n          <img class=\"icon-img\" *ngFor=\"let task of renderTaskList(i, monthIndex)\" src=\"assets/images/{{task}}.png\" />\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/schedule/schedule.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_member_service__ = __webpack_require__("../../../../../src/app/services/member.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_task_service__ = __webpack_require__("../../../../../src/app/services/task.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScheduleComponent = (function () {
    function ScheduleComponent(_memberService, _taskService) {
        this._memberService = _memberService;
        this._taskService = _taskService;
        this.members = [];
        this.tasks = [];
        this.year = new Date().getFullYear().toString();
        this.month = new Date().getMonth().toString();
        this.months = [
            'Januari',
            'Februari',
            'Mars',
            'Aprli',
            'Maj',
            'Juni',
            'Juli',
            'Augusti',
            'September',
            'Oktober',
            'November',
            'December',
        ];
    }
    ScheduleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._memberService.getAllMembers().subscribe(function (data) {
            if (data.success) {
                for (var i = 0; i < data.members.length; i++) {
                    var member = data.members[i];
                    _this.members.push(member);
                }
            }
        });
        this._taskService.getAllTasks().subscribe(function (data) {
            if (data.success) {
                for (var i = 0; i < data.tasks.length; i++) {
                    var task = data.tasks[i].name;
                    _this.tasks.push(task);
                }
            }
        });
    };
    ScheduleComponent.prototype.genereteTaskList = function () {
        var taskListRet = this.tasks;
        var taskReturn = [];
        switch (this.members.length) {
            case 5:
                taskReturn = this.tasks;
                break;
            case 4:
                taskReturn.push(taskListRet.slice(0, 2));
                taskReturn.push(taskListRet[2]);
                taskReturn.push(taskListRet[3]);
                taskReturn.push(taskListRet[4]);
                break;
            case 3:
                taskReturn.push(taskListRet.slice(0, 2));
                taskReturn.push(taskListRet.slice(2, 4));
                taskReturn.push(taskListRet[this.tasks.length - 1]);
                break;
            case 2:
                taskReturn.push(taskListRet.slice(0, 2));
                taskReturn.push(taskListRet.slice(2, 5));
                break;
            case 1:
                taskReturn.push(taskListRet.slice(0, 5));
                break;
            default:
                taskReturn = this.tasks;
                break;
        }
        return taskReturn;
    };
    ScheduleComponent.prototype.renderTaskList = function (taskIndex, monthIndex) {
        var newArr = [];
        var taskList = this.genereteTaskList();
        for (var i = 0; i < 12; i++) {
            var pointer = (i + taskIndex) % taskList.length;
            if (Array.isArray(taskList[pointer])) {
                newArr.push(taskList[pointer]);
            }
            else {
                newArr.push(new Array(taskList[pointer]));
            }
        }
        newArr.reverse();
        return newArr[monthIndex];
    };
    ScheduleComponent.prototype.getMembersLength = function () {
        return this.members.length;
    };
    ScheduleComponent.prototype.shortMonth = function (index) {
        return this.months[index].slice(0, 3);
    };
    ScheduleComponent.prototype.currentMonth = function (index) {
        return Number(this.month) === index ? true : false;
    };
    ScheduleComponent.prototype.getInitials = function (index) {
        return this.members[index].firstName.slice(0, 1) + '.'
            + this.members[index].lastName.slice(0, 1);
    };
    ScheduleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-schedule',
            template: __webpack_require__("../../../../../src/app/components/schedule/schedule.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/schedule/schedule.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_member_service__["a" /* MemberService */], __WEBPACK_IMPORTED_MODULE_2__services_task_service__["a" /* TaskService */]])
    ], ScheduleComponent);
    return ScheduleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/globals/globals.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return localhostUrl; });
/* unused harmony export messageActive */
// Globala Variabler
// OBS! om localhost, sätt localhostUrl = "http://localhost:8080/", annars "";
var localhostUrl = "/";
var messageActive = false;


/***/ }),

/***/ "../../../../../src/app/services/member.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globals_globals__ = __webpack_require__("../../../../../src/app/globals/globals.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MemberService = (function () {
    function MemberService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_2__globals_globals__["a" /* localhostUrl */] + 'api/members/';
    }
    MemberService.prototype.createMember = function (memberToCreate) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        console.log('inside create-FE' + this.baseUrl + 'create');
        var body = {
            memberToCreate: memberToCreate
        };
        return this.http.post(this.baseUrl + 'create', body, { headers: headers }).map(function (res) { return res.json(); });
    };
    MemberService.prototype.getAllMembers = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        return this.http.get(this.baseUrl, { headers: headers }).map(function (res) { return res.json(); });
        ;
    };
    MemberService.prototype.getMemberById = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        return this.http.get(this.baseUrl + id, { headers: headers }).map(function (res) { return res.json(); });
    };
    MemberService.prototype.updateMemberName = function (memberToUpdate) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var body = {
            memberToUpdate: memberToUpdate,
        };
        return this.http.put(this.baseUrl + 'update/name', body, { headers: headers }).map(function (res) { return res.json(); });
    };
    MemberService.prototype.updateMemberEmail = function (memberToUpdate, token, updaterId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Authorization', token);
        var body = {
            memberToUpdate: memberToUpdate,
            updaterId: updaterId
        };
        return this.http.put(this.baseUrl + 'update/email', body, { headers: headers }).map(function (res) { return res.json(); });
    };
    MemberService.prototype.updateMemberAccess = function (memberToUpdate, token, updaterId, password) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Authorization', token);
        var body = {
            memberToUpdate: memberToUpdate,
            updaterId: updaterId,
            password: 'aa',
        };
        return this.http.put(this.baseUrl + 'update/access', body, { headers: headers }).map(function (res) { return res.json(); });
    };
    MemberService.prototype.updateMemberPassword = function (memberToUpdate, token, updaterId, oldPassword, newPassword) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Authorization', token);
        var body = {
            memberToUpdate: memberToUpdate,
            updaterId: updaterId,
            password: 'aa',
            newPassword: 'aa'
        };
        return this.http.put(this.baseUrl + 'update/password', body, { headers: headers }).map(function (res) { return res.json(); });
    };
    MemberService.prototype.deleteMember = function (memberToDeleteId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var body = {
            memberToDeleteId: memberToDeleteId
        };
        return this.http.delete(this.baseUrl + 'delete', { body: body, headers: headers }).map(function (res) { return res.json(); });
    };
    MemberService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], MemberService);
    return MemberService;
}());



/***/ }),

/***/ "../../../../../src/app/services/task.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globals_globals__ = __webpack_require__("../../../../../src/app/globals/globals.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TaskService = (function () {
    function TaskService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_2__globals_globals__["a" /* localhostUrl */] + 'api/tasks/';
        /* this.tasks = [
            'köket',
            'tvätt',
            'stora-badrummet',
            'lilla-badrummen',
            'damsuga',
        ]; */
    }
    TaskService.prototype.getAllTasks = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        return this.http.get(this.baseUrl, { headers: headers }).map(function (res) { return res.json(); });
        ;
    };
    TaskService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map