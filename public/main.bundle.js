webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-post/add-post.component.css":
/***/ (function(module, exports) {

module.exports = ".one_post {\r\n    background: #fff;\r\n    -webkit-box-shadow: 0 1px 4px rgba(0,0,0,.04);\r\n    box-shadow: 0 1px 4px rgba(0,0,0,.04);\r\n    border: 1px solid rgba(0,0,0,.09);\r\n    border-radius: 3px;\r\n    margin-bottom: 20px;\r\n    padding: 10px;\r\n}\r\n\r\n.one_post__mat-form-field__textarea {\r\n    height: 150px; \r\n}\r\n\r\n.one_post__mat-form-field {\r\n    width: 100%;\r\n}\r\n\r\n.one_post__text_span {\r\n    color: #8d8d8d;\r\n    padding-bottom: 20px;\r\n    font-size: 20px;\r\n    font-weight: 400;\r\n}\r\n\r\n.one_post__wrap-button {\r\nwidth: 100%;\r\npadding-bottom: 20px;\r\ndisplay: -webkit-box;\r\ndisplay: -ms-flexbox;\r\ndisplay: flex;\r\n-webkit-box-pack: end;\r\n    -ms-flex-pack: end;\r\n        justify-content: flex-end;\r\n}\r\n\r\n.one_post__wrap-spinner{\r\n    width: 100%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}"

/***/ }),

/***/ "./src/app/add-post/add-post.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"one_post\">\n\n  <div class=\"one_post__text_span\">\n    Add new post to site\n  </div>\n\n  <mat-form-field class=\"one_post__mat-form-field\">\n    <input [(ngModel)]=\"name\" matInput placeholder=\"Your name\">\n  </mat-form-field>\n  <br />\n  <mat-form-field class=\"one_post__mat-form-field\">\n    <textarea [(ngModel)]=\"text\" class=\"one_post__mat-form-field__textarea\" matInput placeholder=\"Post text\"></textarea>\n  </mat-form-field>\n  <br/>\n  <div class=\"one_post__wrap-button\" *ngIf=\"!showSpinner\">\n    <button mat-raised-button onclick=\"\" (click)=\"click_add_post()\">Add</button>\n  </div>\n  <div  class=\"one_post__wrap-spinner\" *ngIf=\"showSpinner\">\n    <mat-spinner [diameter]=\"50\"></mat-spinner>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/add-post/add-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__("./src/app/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddPostComponent = /** @class */ (function () {
    function AddPostComponent(http, router, snackBar) {
        this.http = http;
        this.router = router;
        this.snackBar = snackBar;
        this.name = "";
        this.text = "";
        this.showSpinner = false;
    }
    AddPostComponent.prototype.ngOnInit = function () {
    };
    AddPostComponent.prototype.openSnackBar = function (message) {
        this.snackBar.open(message, "", {
            duration: 2000,
        });
    };
    AddPostComponent.prototype.click_add_post = function () {
        var _this = this;
        if (this.name !== "" && this.text !== "") {
            this.showSpinner = true;
            this.http.put(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* ConfigService */].backendUrl + "/post", {
                "name": this.name,
                "text": this.text
            })
                .subscribe(function (val) {
                _this.showSpinner = false;
                if (val && val.success) {
                    _this.router.navigate(['/posts/' + val.value._id]);
                }
                else {
                    _this.openSnackBar("Error adding post: " + (val ? val.error_msg : ""));
                }
            });
        }
        else {
            this.openSnackBar("Fill in all the fields");
        }
    };
    AddPostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-post',
            template: __webpack_require__("./src/app/add-post/add-post.component.html"),
            styles: [__webpack_require__("./src/app/add-post/add-post.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSnackBar */]])
    ], AddPostComponent);
    return AddPostComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__posts_posts_component__ = __webpack_require__("./src/app/posts/posts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_post_add_post_component__ = __webpack_require__("./src/app/add-post/add-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__post_post_component__ = __webpack_require__("./src/app/post/post.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__posts_posts_component__["a" /* PostsComponent */] },
    { path: 'posts', component: __WEBPACK_IMPORTED_MODULE_2__posts_posts_component__["a" /* PostsComponent */] },
    { path: 'posts/:post_id', component: __WEBPACK_IMPORTED_MODULE_4__post_post_component__["a" /* PostComponent */] },
    { path: 'add_post', component: __WEBPACK_IMPORTED_MODULE_3__add_post_add_post_component__["a" /* AddPostComponent */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".logo {\r\ncursor: pointer;\r\n}\r\n\r\n.header {\r\n    text-align: center;\r\n    height: 50px;\r\n    position: relative;\r\n    border-bottom: 1px solid #dbdada;\r\n    -webkit-box-shadow: 0 1px 4px rgba(0,0,0,.04);\r\n    box-shadow: 0 1px 4px rgba(0,0,0,.04);\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n.header__main {\r\nwidth: 1000px;\r\ndisplay: -webkit-box;\r\ndisplay: -ms-flexbox;\r\ndisplay: flex;\r\n-webkit-box-pack: justify;\r\n    -ms-flex-pack: justify;\r\n        justify-content: space-between;\r\n-webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n-webkit-touch-callout: none;\r\n-webkit-user-select: none;\r\n-moz-user-select: none;\r\n-ms-user-select: none;\r\nuser-select: none;    \r\n}\r\n\r\n.wrap__content {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.content {\r\n    /* border: 1px solid black; */\r\n    width: 800px;\r\n    min-height: 400px;\r\n    position: relative;\r\n    padding: 20px 10px 20px 10px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <div class=\"header__main\">\n    <img routerLink=\"/\" height=\"23px\" src=\"./assets/logo.png\" class=\"logo\" />\n    <a mat-button color=\"primary\" routerLink=\"/add_post\" *ngIf=\"this.router.url!=='/add_post'\">Add new post</a>\n  </div>\n</div>\n\n<div class=\"wrap__content\">\n  <div class=\"content\">\n    <router-outlet></router-outlet>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_router) {
        this._router = _router;
        this.router = {};
        this.title = 'app';
        this.router = _router;
        // console.log(this.router);
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_cdk_table__ = __webpack_require__("./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__posts_posts_component__ = __webpack_require__("./src/app/posts/posts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__post_post_component__ = __webpack_require__("./src/app/post/post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__add_post_add_post_component__ = __webpack_require__("./src/app/add-post/add-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__posts_posts_component__["a" /* PostsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__post_post_component__["a" /* PostComponent */],
                __WEBPACK_IMPORTED_MODULE_9__add_post_add_post_component__["a" /* AddPostComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_forms__["h" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["C" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["i" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["j" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["k" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["l" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["m" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["n" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["o" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["p" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["q" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["r" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["s" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["t" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["u" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["v" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["w" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["y" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["x" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["A" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["B" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["D" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["E" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["F" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["G" /* MatTooltipModule */],
            ],
            exports: [],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigService; });
var ConfigService = /** @class */ (function () {
    function ConfigService() {
    }
    ConfigService.backendUrl = "http://localhost";
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/post/post.component.css":
/***/ (function(module, exports) {

module.exports = ".one_post {\r\n    background: #fff;\r\n    -webkit-box-shadow: 0 1px 4px rgba(0,0,0,.04);\r\n    box-shadow: 0 1px 4px rgba(0,0,0,.04);\r\n    border: 1px solid rgba(0,0,0,.09);\r\n    border-radius: 3px;\r\n    margin-bottom: 20px;\r\n    padding: 10px;\r\n}\r\n\r\n\r\n.one_post__header {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    -webkit-box-align: start;\r\n        -ms-flex-align: start;\r\n            align-items: flex-start;\r\n}\r\n\r\n\r\n.one_post__header__name_span {\r\n    color: #03a87c;\r\n}\r\n\r\n\r\n.one_post__header__date_span {\r\n    color: rgba(0,0,0,.54);\r\n}\r\n\r\n\r\n.one_post__text_span {\r\n    color: #606060;\r\n}\r\n\r\n\r\n.one_comment {\r\n    margin-left: 30px;\r\n    background: #fff;\r\n    border-left: 1px solid rgba(0,0,0,.09);\r\n    border-radius: 3px;\r\n    margin-bottom: 15px;\r\n    padding: 10px;\r\n    width: 70%;\r\n}\r\n\r\n\r\n.add_comment {\r\n    margin-left: 30px;\r\n    background: #fff;\r\n    border-left: 1px solid rgba(0,0,0,.09);\r\n    border-radius: 3px;\r\n    margin-bottom: 15px;\r\n    margin-top: 30px;\r\n    padding: 10px;\r\n    padding-bottom: 0px;\r\n    width: 70%;\r\n}\r\n\r\n\r\n.add_comment__text_span {\r\n    color: #4f4fd9;\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n}\r\n\r\n\r\n.add_comment__mat-form-field { \r\n    width: 100%;\r\n}\r\n\r\n\r\n.add_comment__mat-form-field__textarea {\r\n\r\n}\r\n\r\n\r\n.add_comment__wrap-button {\r\n    width: 100%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: end;\r\n        -ms-flex-pack: end;\r\n            justify-content: flex-end;\r\n}\r\n\r\n\r\n.add_comment__wrap-spinner {\r\n    width: 100%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/post/post.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"one_post\" >\n    <div class=\"one_post__header\">\n      <span class=\"one_post__header__name_span\">{{ post.name }} </span>\n      <span class=\"one_post__header__date_span\">{{ post.add_date | date : 'dd.MM.yyyy HH:mm'}} </span>\n    </div>\n    \n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n   \n    <br />\n    <span class=\"one_post__text_span\">\n        {{ post.text }}\n    </span>\n  \n  </div>\n\n\n\n\n  <div  *ngFor=\"let comment of post.comments\" class=\"one_comment\" >\n    <div class=\"one_post__header\">\n      <span class=\"one_post__header__name_span\">{{ comment.name }} </span>\n      <span class=\"one_post__header__date_span\">{{ comment.add_date | date : 'dd.MM.yyyy HH:mm'}} </span>\n    </div>\n    \n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n   \n    <br />\n    <span class=\"one_post__text_span\">\n        {{ comment.text }}\n    </span>\n  \n  </div>\n\n\n  <div class=\"add_comment\">\n\n    <div class=\"add_comment__text_span\">\n      Add new comment to post\n    </div>\n  \n    <mat-form-field class=\"add_comment__mat-form-field\">\n      <input [(ngModel)]=\"name\" matInput placeholder=\"Your name\">\n    </mat-form-field>\n    <br />\n    <mat-form-field class=\"add_comment__mat-form-field\">\n      <textarea [(ngModel)]=\"text\" class=\"add_comment__mat-form-field__textarea\" matInput placeholder=\"Comment text\"></textarea>\n    </mat-form-field>\n    <br/>\n    <div class=\"add_comment__wrap-button\" *ngIf=\"!showSpinner\">\n      <button mat-raised-button onclick=\"\" (click)=\"click_add_comment()\">Add</button>\n    </div>\n    <div  class=\"add_comment__wrap-spinner\" *ngIf=\"showSpinner\">\n      <mat-spinner [diameter]=\"45\"></mat-spinner>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/post/post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__("./src/app/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PostComponent = /** @class */ (function () {
    function PostComponent(activeRoute, http, snackBar) {
        this.activeRoute = activeRoute;
        this.http = http;
        this.snackBar = snackBar;
        this.post = {};
        this.name = "";
        this.text = "";
        this.showSpinner = false;
    }
    PostComponent.prototype.openSnackBar = function (message) {
        this.snackBar.open(message, "", {
            duration: 2000,
        });
    };
    PostComponent.prototype.ngOnInit = function () {
        var _this = this;
        var routeParams = this.activeRoute.snapshot.params;
        this.http.get(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* ConfigService */].backendUrl + "/post?post_id=" + routeParams.post_id)
            .subscribe(function (val) {
            console.log(val);
            if (val.success) {
                _this.post = val.value;
            }
        });
    };
    PostComponent.prototype.click_add_comment = function () {
        var _this = this;
        var routeParams = this.activeRoute.snapshot.params;
        if (this.name !== "" && this.text !== "") {
            this.showSpinner = true;
            this.http.put(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* ConfigService */].backendUrl + "/comment", {
                "name": this.name,
                "text": this.text,
                post_id: routeParams.post_id
            })
                .subscribe(function (val) {
                _this.showSpinner = false;
                if (val && val.success) {
                    _this.post.comments.push(val.value);
                    _this.name = "";
                    _this.text = "";
                }
                else {
                    _this.openSnackBar("Error adding comment: " + (val ? val.error_msg : ""));
                }
            });
        }
        else {
            this.openSnackBar("Fill in all the fields");
        }
    };
    PostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-post',
            template: __webpack_require__("./src/app/post/post.component.html"),
            styles: [__webpack_require__("./src/app/post/post.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["z" /* MatSnackBar */]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/posts/posts.component.css":
/***/ (function(module, exports) {

module.exports = ".one_post {\r\n    background: #fff;\r\n    -webkit-box-shadow: 0 1px 4px rgba(0,0,0,.04);\r\n    box-shadow: 0 1px 4px rgba(0,0,0,.04);\r\n    border: 1px solid rgba(0,0,0,.09);\r\n    border-radius: 3px;\r\n    margin-bottom: 20px;\r\n    padding: 10px;\r\n    max-height: 150px;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap; /* Запрещаем перенос строк */\r\n    overflow: hidden; /* Обрезаем все, что не помещается в область */\r\n}\r\n\r\n.one_post__header {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    -webkit-box-align: start;\r\n        -ms-flex-align: start;\r\n            align-items: flex-start;\r\n}\r\n\r\n.one_post__bottom {\r\nmargin-top: 10px;\r\ndisplay: -webkit-box;\r\ndisplay: -ms-flexbox;\r\ndisplay: flex;\r\n-webkit-box-pack: end;\r\n    -ms-flex-pack: end;\r\n        justify-content: flex-end;\r\n}\r\n\r\n.one_post__bottom > a {\r\n    text-decoration: none;\r\n    color: rgba(0,0,0,.54);\r\n}\r\n\r\n.one_post__bottom > a:hover {\r\n    text-decoration: none;\r\n    color: rgba(0, 0, 0, 0.733);\r\n}\r\n\r\n.one_post__header__name_span {\r\n    color: #03a87c;\r\n}\r\n\r\n.one_post__header__date_span {\r\n    color: rgba(0,0,0,.54);\r\n}\r\n\r\n.one_post__text_span {\r\n    color: #606060;\r\n}"

/***/ }),

/***/ "./src/app/posts/posts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"one_post\" *ngFor=\"let post of posts\">\n  <div class=\"one_post__header\">\n    <span class=\"one_post__header__name_span\">{{ post.name }} </span>\n    <span class=\"one_post__header__date_span\">{{ post.add_date | date : 'dd.MM.yyyy HH:mm'}} </span>\n  </div>\n  \n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n \n  <br />\n  <span class=\"one_post__text_span\">\n      {{ post.text }}\n  </span>\n  \n  <div class=\"one_post__bottom\">\n      <a routerLink=\"/posts/{{post._id}}\" routerLinkActive=\"active\">Read more ...</a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/posts/posts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__("./src/app/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostsComponent = /** @class */ (function () {
    function PostsComponent(http) {
        this.http = http;
        this.posts = [];
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* ConfigService */].backendUrl + "/posts")
            .subscribe(function (val) {
            if (val.success) {
                _this.posts = val.values;
            }
        });
    };
    PostsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-posts',
            template: __webpack_require__("./src/app/posts/posts.component.html"),
            styles: [__webpack_require__("./src/app/posts/posts.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], PostsComponent);
    return PostsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map