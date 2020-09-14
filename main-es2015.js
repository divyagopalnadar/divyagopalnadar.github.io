(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");






const routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] }
    // { path: 'error', component: ErrorComponent },
    // { path: 'error/404', component: ErrorComponent },
    // { path: '**', redirectTo: 'error/404' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_navigation_header_navigation_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navigation-header/navigation-header.component */ "./src/app/components/navigation-header/navigation-header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor() {
        this.title = 'VitaPure';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-navigation-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_navigation_header_navigation_header_component__WEBPACK_IMPORTED_MODULE_1__["NavigationHeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/__ivy_ngcc__/fesm2015/ngx-slick-carousel.js");
/* harmony import */ var _components_navigation_header_navigation_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/navigation-header/navigation-header.component */ "./src/app/components/navigation-header/navigation-header.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_why_dialog_why_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/why-dialog/why-dialog.component */ "./src/app/components/why-dialog/why-dialog.component.ts");


// import { FlexLayoutModule } from '@angular/flex-layout';











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_7__["SlickCarouselModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_navigation_header_navigation_header_component__WEBPACK_IMPORTED_MODULE_8__["NavigationHeaderComponent"],
        _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
        _components_why_dialog_why_dialog_component__WEBPACK_IMPORTED_MODULE_11__["WhyDialogComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_7__["SlickCarouselModule"],
        _material_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _components_navigation_header_navigation_header_component__WEBPACK_IMPORTED_MODULE_8__["NavigationHeaderComponent"],
                    _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                    _components_why_dialog_why_dialog_component__WEBPACK_IMPORTED_MODULE_11__["WhyDialogComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_7__["SlickCarouselModule"],
                    _material_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
                    _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");











function DashboardComponent_mat_grid_tile_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-menu", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Expand");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-content", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Card Content Here");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r1 = ctx.$implicit;
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", card_r1.cols)("rowspan", card_r1.rows);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", card_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r2);
} }
class DashboardComponent {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        /** Based on the screen size, switch from standard to one column per row */
        this.cards = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(({ matches }) => {
            if (matches) {
                return [
                    { title: 'Card 1', cols: 1, rows: 1 },
                    { title: 'Card 2', cols: 1, rows: 1 },
                    { title: 'Card 3', cols: 1, rows: 1 },
                    { title: 'Card 4', cols: 1, rows: 1 }
                ];
            }
            return [
                { title: 'Card 1', cols: 2, rows: 1 },
                { title: 'Card 2', cols: 1, rows: 1 },
                { title: 'Card 3', cols: 1, rows: 2 },
                { title: 'Card 4', cols: 1, rows: 1 }
            ];
        }));
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 6, vars: 3, consts: [[1, "grid-container"], [1, "mat-h1"], ["cols", "2", "rowHeight", "350px"], [3, "colspan", "rowspan", 4, "ngFor", "ngForOf"], [3, "colspan", "rowspan"], [1, "dashboard-card"], ["mat-icon-button", "", "aria-label", "Toggle menu", 1, "more-button", 3, "matMenuTriggerFor"], ["xPosition", "before"], ["menu", "matMenu"], ["mat-menu-item", ""], [1, "dashboard-card-content"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-grid-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DashboardComponent_mat_grid_tile_4_Template, 17, 4, "mat-grid-tile", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 1, ctx.cards));
    } }, directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridTile"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuItem"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: [".grid-container[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n\n.dashboard-card[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n}\n\n.more-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  right: 10px;\n}\n\n.dashboard-card-content[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMjBweDtcbn1cblxuLmRhc2hib2FyZC1jYXJkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE1cHg7XG4gIGxlZnQ6IDE1cHg7XG4gIHJpZ2h0OiAxNXB4O1xuICBib3R0b206IDE1cHg7XG59XG5cbi5tb3JlLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1cHg7XG4gIHJpZ2h0OiAxMHB4O1xufVxuXG4uZGFzaGJvYXJkLWNhcmQtY29udGVudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.css']
            }]
    }], function () { return [{ type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _why_dialog_why_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../why-dialog/why-dialog.component */ "./src/app/components/why-dialog/why-dialog.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/__ivy_ngcc__/fesm2015/ngx-slick-carousel.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








const _c0 = ["slickModal"];
const _c1 = ["slickModalFeature"];
const _c2 = ["slickModalBlog"];
function HomeComponent_div_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Net wt : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Gross :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Add to Cart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "small", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Today in 180 mins");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r7.imgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r7.itemName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r7.itemDesc);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r7.itemWt, "gms");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r7.itemGross, "gms");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", item_r7.itemCost, "");
} }
function HomeComponent_div_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r8.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r8.title);
} }
function HomeComponent_div_115_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Net wt : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Gross :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Add to Cart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "small", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Today in 180 mins");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r9.imgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r9.itemName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r9.itemDesc);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r9.itemWt, "gms");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r9.itemGross, "gms");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", item_r9.itemCost, "");
} }
function HomeComponent_div_135_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r10.imgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r10.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r10.content, " ");
} }
class HomeComponent {
    constructor(dialog) {
        this.dialog = dialog;
        // icon = 'keyboard_arrow_up';
        this.catItem = categories;
        this.slideConfig = {
            "lazyLoad": 'progressive',
            'slidesToShow': 3,
            "slidesToScroll": 3,
            "arrows": true,
            // "nextArrow": '<button class=" nav-slider nav-btn prev-slide" aria-label="Back"><img src="../../../assets/back.png"></button>',
            // "prevArrow": '<button type="button" class="slick-prev">Previous</button>',
            "dots": true,
            speed: 300,
            "infinite": true,
            "responsive": [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 760,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        this.slideConfigFeature = {
            "lazyLoad": 'progressive',
            'slidesToShow': 3,
            "slidesToScroll": 3,
            "arrows": true,
            // "nextArrow": '<button class=" nav-slider nav-btn prev-slide" aria-label="Back"><img src="../../../assets/back.png"></button>',
            // "prevArrow": '<button type="button" class="slick-prev">Previous</button>',
            "dots": true,
            speed: 300,
            "infinite": true,
            "responsive": [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 760,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        this.slideConfigBlog = {
            "lazyLoad": 'progressive',
            'slidesToShow': 3,
            "slidesToScroll": 3,
            "arrows": true,
            // "nextArrow": '<button class=" nav-slider nav-btn prev-slide" aria-label="Back"><img src="../../../assets/back.png"></button>',
            // "prevArrow": '<button type="button" class="slick-prev">Previous</button>',
            "dots": true,
            speed: 300,
            "infinite": true,
            "responsive": [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 760,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
    }
    ngOnInit() {
        this.itemData = items;
        this.blogData = blogs;
    }
    openDialog() {
        this.dialog.open(_why_dialog_why_dialog_component__WEBPACK_IMPORTED_MODULE_1__["WhyDialogComponent"]);
    }
    addSlide() {
        // this.slides.push({img: "http://placehold.it/350x150/777777"})
    }
    removeSlide() {
        // this.slides.length = this.slides.length - 1;
    }
    next() {
        this.slickModal.slickNext();
    }
    prev() {
        this.slickModal.slickPrev();
    }
    nextFeature() {
        this.slickModalFeature.slickNext();
    }
    prevFeature() {
        this.slickModalFeature.slickPrev();
    }
    nextBlog() {
        this.slickModalBlog.slickNext();
    }
    prevBlog() {
        this.slickModalBlog.slickPrev();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], viewQuery: function HomeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.slickModal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.slickModalFeature = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.slickModalBlog = _t.first);
    } }, decls: 189, vars: 7, consts: [[1, "grid-container"], [1, "row", "no-gutters", "banner"], [1, "col-11", "col-sm-11", "col-md-7", "text-center", "d-flex", "flex-column"], [1, "discount", "focus-in-contract-bck", "mx-auto"], [1, "discount-content"], [1, "heading", "tracking-in-expand-fwd"], [1, "sub-heading", "focus-in-contract-bck"], [1, "sub-heading", "tracking-in-expand-fwd"], ["mat-raised-button", "", 1, "btn-shopNow"], [1, "card-group"], [1, "card", "cat-card", "card-option", "bgGift"], [1, "left"], ["src", "../../../assets/lychee1.png", "alt", "Card image cap", 1, "my-auto", "img-move", 2, "left", "-80px"], [1, "right"], [1, "card-title"], [1, "subHeading"], [1, "pricingRange"], ["mat-mini-fab", "", "aria-label", "Go To"], [1, "card", "cat-card", "card-option", "bgDetox"], ["src", "../../../assets/orange1.png", "alt", "Card image cap", 1, "my-auto", "img-move"], [1, "w-100", "d-none", "d-sm-block", "d-md-block", "d-lg-block", "d-xl-none"], [1, "card", "cat-card", "card-option", "bgSummer"], ["src", "../../../assets/pineapple1.png", "alt", "Card image cap", 1, "my-auto", "img-move"], [1, "card", "cat-card", "card-option", "bgDryFruits"], ["src", "../../../assets/dryFruit1.png", "alt", "Card image cap", 1, "my-auto", "img-move"], [1, "mt-5", "d-flex", "align-content-center", "flex-wrap"], [1, "row", "col-11", "col-sm-8", "m-auto", "rounded", "justify-content-center", "align-items-center", 2, "background", "#63b846", "height", "170px"], [1, "mr-5"], ["src", "../../../assets/watch_icon.png", "alt", "", 1, "bookNow-img"], [1, "align-content-center"], [1, "subTitle"], [1, "section-container", "section-md-sm"], [1, "row", "justify-content-center"], [1, "d-flex", "justify-content-center", "why-vitapure", "p-1", 3, "click"], [2, "display", "inline-block", "padding", ".5em"], [1, "mt-1"], ["mat-mini-fab", "", "aria-label", "Go To", 1, "btnGlow"], [1, "bestseller"], [1, "section-heading"], [1, "swiper-container"], [1, "carousel", 3, "config"], ["slickModal", "slick-carousel"], ["ngxSlickItem", "", "class", "slide d-flex justify-content-center", 4, "ngFor", "ngForOf"], ["aria-label", "Back", 1, "item-btn", "arrBack", 3, "click"], ["aria-label", "Back", 1, "item-btn", "arrNext", 3, "click"], [1, "exploreCategory"], [1, "d-flex", "flex-wrap", "justify-content-center"], ["class", "cat-Container", 4, "ngFor", "ngForOf"], ["slickModalFeature", "slick-carousel"], [1, "d-flex", "justify-content-center"], ["src", "../../../assets/news/news.png", "alt", "Magazine ", 2, "width", "90%", "min-height", "210px", "min-width", "312px"], ["slickModalBlog", "slick-carousel"], ["mat-mini-fab", "", "aria-label", "Back", 1, "fab-btn", "arrBack", 3, "click"], ["mat-mini-fab", "", "aria-label", "Back", 1, "fab-btn", "arrNext", 3, "click"], [1, "section-heading", "text-center"], [1, "col-8", "text-center"], [1, "d-flex", "justify-content-center", "mt-4"], [1, "testimony-container", "grow", "text-center"], ["src", "../../../assets/testimony1.png", "alt", "...", 1, "testimony-img", "mx-auto", "m-2"], [1, "testimonyName"], [1, "testimonyDesc"], ["src", "../../../assets/testimony2.png", "alt", "...", 1, "testimony-img", "mx-auto", "m-2"], ["src", "../../../assets/testimony3.png", "alt", "...", 1, "testimony-img", "mx-auto", "m-2"], [1, "subscribe"], [1, "row", "justify-content-center", "flex-md-row", 2, "height", "250px"], [1, "subscribe-content", "col-md-4"], [1, "subscribe-content2", "col-md-8", "align-self-center"], ["type", "email", "placeholder", "    ENTER YOUR EMAIL", 1, "ml-1", "input-subscribe"], ["mat-raised-button", "", "color", "accent", 1, "btn-green-flat", "btn-sub", "ip-btn"], [2, "background", "#FAFAFA"], ["src", "../../../assets/natural.png", "alt", "...", 1, "natural-img", "mx-2"], ["ngxSlickItem", "", 1, "slide", "d-flex", "justify-content-center"], [1, "card", "my-3", "swiper-card"], ["alt", "...", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-text", "text-justify"], [1, "item-details", "d-flex"], [1, ""], [1, "d-flex", "justify-content-between", "align-items-end"], [1, "item-price"], ["mat-raised-button", "", "color", "accent", 1, "btn-green"], [1, "card-footer", "p-0", "text-center"], [1, "text-muted"], [1, "cat-Container"], ["alt", "...", 1, "rounded", 3, "src"], [1, "text-center"], [1, "card", "blog-card"], [1, "card-title", "text-uppercase"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Discount upto 40% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "A wide Variety");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "of Different");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Fruits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Shop Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Premium");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Gifting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "From $120");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "arrow_forward");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h3", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Detox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Your Day");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "From $120");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "arrow_forward");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h3", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "New");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Summer Offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "From $120");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "arrow_forward");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h3", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Dry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Fruits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "From $120");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "arrow_forward");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h4", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Book your order from now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_80_listener() { return ctx.openDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Know VitaPure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "touch_app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "section", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Bestseller");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "ngx-slick-carousel", 40, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](95, HomeComponent_div_95_Template, 27, 6, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_96_listener() { return ctx.prev(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "arrow_back_ios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_99_listener() { return ctx.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "arrow_forward_ios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "section", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Explore by Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](107, HomeComponent_div_107_Template, 4, 2, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Featured Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "ngx-slick-carousel", 40, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](115, HomeComponent_div_115_Template, 27, 6, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_116_listener() { return ctx.prevFeature(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "arrow_back_ios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_119_listener() { return ctx.nextFeature(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "arrow_forward_ios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "On News");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Our Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "ngx-slick-carousel", 40, 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](135, HomeComponent_div_135_Template, 8, 3, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_136_listener() { return ctx.prevBlog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "arrow_back_ios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "button", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_139_listener() { return ctx.nextBlog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "arrow_forward_ios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "span", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Testimonials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident ab quas tenetur similique, nulla laboriosam deleniti dolore veritatis corporis adipisci modi officia laudantium! Id excepturi in reprehenderit, amet tenetur ad. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "span", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Lorem ipsum dolor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "span", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Lorem ipsum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "img", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "span", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Lorem ipsum dolor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "span", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Lorem ipsum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "span", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Lorem ipsum dolor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "span", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Lorem ipsum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "section", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Stay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "connected");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Lorem ipsum dolor sit, amet consectetur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "input", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "button", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "section", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "img", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "img", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "img", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "img", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.slideConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.itemData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.catItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.slideConfigFeature);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.itemData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.slideConfigBlog);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.blogData);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_5__["SlickCarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_5__["SlickItemDirective"]], styles: [".banner[_ngcontent-%COMP%]{\r\n\r\n    min-height: 530px;\r\n    margin-top: -30px;\r\n    background-image: url('home_banner.png');\r\n    width: 100%;\r\n    \r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    \r\n    background-position: 77% 46%;\r\n\r\n}\r\n.card-group[_ngcontent-%COMP%]    > .card[_ngcontent-%COMP%] {\r\n     margin-bottom: 0px;\r\n     border-radius: 0;\r\n     border-color: transparent;\r\n}\r\n.home-img[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height:100%;\r\n    margin-top: -30px;\r\n\r\n}\r\n.btnGlow[_ngcontent-%COMP%]{\r\n    -webkit-animation: glowing 1300ms infinite;\r\n    animation: glowing 1300ms infinite;\r\n}\r\n@-webkit-keyframes glowing {\r\n    0% {\r\n      background-color: #2ba805;\r\n      box-shadow: 0 0 5px #2ba805;\r\n    }\r\n    50% {\r\n      background-color: #49e819;\r\n      box-shadow: 0 0 20px #49e819;\r\n    }\r\n    100% {\r\n      background-color: #2ba805;\r\n      box-shadow: 0 0 5px #2ba805;\r\n    }\r\n  }\r\n@keyframes glowing {\r\n    0% {\r\n      background-color: #2ba805;\r\n      box-shadow: 0 0 5px #2ba805;\r\n    }\r\n    50% {\r\n      background-color: #49e819;\r\n      box-shadow: 0 0 20px #49e819;\r\n    }\r\n    100% {\r\n      background-color: #2ba805;\r\n      box-shadow: 0 0 5px #2ba805;\r\n    }\r\n  }\r\nbutton.btn-shopNow[_ngcontent-%COMP%]{\r\n    width: 189px;\r\n    align-self: center;\r\n    margin-top: 1.2em;\r\n    background-color: #619f7b;\r\n    color: white;\r\n    font-size: 1.4em;\r\n    font-family: Poppins;\r\n    text-transform: uppercase;\r\n    font-weight: 700;\r\n    letter-spacing: 2px;\r\n    height: 60px;\r\n    border-radius: 0 !important;\r\n    transition: all .3s ease-in-out;\r\n}\r\nbutton.btn-shopNow[_ngcontent-%COMP%]:hover{\r\n   \r\n    \r\n    color: black;\r\n    \r\n    \r\n    \r\n    background-color: #fdff5d;\r\n\r\n}\r\n.discount[_ngcontent-%COMP%]{\r\n    \r\n    font-family: Poppins;\r\n    font-size: 2.3vw;\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n    letter-spacing: 2.22px;\r\n    margin: .5em;\r\n    margin-top: 2.5em;\r\n}\r\n.discount-content[_ngcontent-%COMP%]{\r\n    border-bottom: 1.6vw solid #fdff5d;\r\n}\r\n.heading[_ngcontent-%COMP%]{\r\n    text-transform: uppercase;\r\n    margin: 0.6em;\r\n    font-family: Poppins;\r\n    font-size: 4vw;\r\n    font-weight: 600;\r\n    letter-spacing: 6.82px;\r\n    -webkit-animation: mymove 5s;\r\n            animation: mymove 5s;\r\n    -webkit-animation-timing-function: ease-in;\r\n            animation-timing-function: ease-in;\r\n}\r\n@-webkit-keyframes mymove {\r\n    from {left: -100px;}\r\n    to {left: 0px;}\r\n  }\r\n@keyframes mymove {\r\n    from {left: -100px;}\r\n    to {left: 0px;}\r\n  }\r\n.sub-heading[_ngcontent-%COMP%]{\r\n    \r\n    text-transform: uppercase;\r\n    letter-spacing: 3px;\r\n    font-family: Poppins;\r\n    font-size: 2.5vw;\r\n    padding: .2em;\r\n    line-height: 3vw;\r\n    \r\n    font-weight: 300;\r\n\r\n}\r\n.border-transparent[_ngcontent-%COMP%]{\r\n    border: transparent;\r\n}\r\n.cat-card[_ngcontent-%COMP%]{\r\n    height: 300px;\r\n    overflow: hidden;\r\n}\r\n.cat-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    \r\n    \r\n    left: -50px;\r\n    height: 80%;\r\n    position: absolute;\r\n    margin-top: 5% !important;\r\n    \r\n}\r\n.cat-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n  \r\n    color: #9a9fa2 !important;\r\n    text-transform: uppercase;\r\n    font-family: Poppins !important;\r\n    font-size: 2.6em !important;\r\n    font-weight: 600 !important;\r\n    margin-bottom: 8px;\r\n    margin-top: 60px;\r\n    letter-spacing: 3px;\r\n}\r\n.subHeading[_ngcontent-%COMP%]{\r\n    color:#9a9fa2 !important;\r\n    text-transform: uppercase;\r\n    \r\n    font-family: Poppins;\r\n    font-size: 1.3em;\r\n    font-weight: 500;\r\n    letter-spacing: 3px;\r\n}\r\n.pricingRange[_ngcontent-%COMP%]{\r\n    \r\n    \r\n    font-family: Poppins;\r\n    display: block;\r\n    \r\n    margin-top: 2em;\r\n    font-size: 1.3em;\r\n    margin-bottom: 2em;\r\n}\r\n.right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n    color: black;\r\n    \r\n}\r\n.img-move[_ngcontent-%COMP%]{\r\n    \r\n    transform: translate3d(-22%, 0, 0);\r\n    transition: all .3s ease;\r\n    will-change: transform;\r\n}\r\n.img-move[_ngcontent-%COMP%]:hover{\r\n    transform: none;\r\n}\r\n.left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%]{\r\n    height: 100% ;\r\n}\r\n.left[_ngcontent-%COMP%]{\r\n    width: 40%;\r\n}\r\n.right[_ngcontent-%COMP%]{\r\n    z-index: 5;\r\n    margin-left: 7%;\r\n}\r\n\r\n.card-option[_ngcontent-%COMP%]{\r\n    flex-direction: row;\r\n    border-radius: 0;\r\n    border-color: transparent;\r\n}\r\n.bgGift[_ngcontent-%COMP%]{\r\n    background: #f5f5e9;\r\n}\r\n.bgDetox[_ngcontent-%COMP%]{\r\n    background: #e1eded;\r\n}\r\n.bgSummer[_ngcontent-%COMP%]{\r\n    background: #e9eddc;\r\n}\r\n.bgDryFruits[_ngcontent-%COMP%]{\r\n    background: #f5ece0;\r\n}\r\n.icon[_ngcontent-%COMP%]{\r\n    font-size: 100px;\r\n    width: 100%;\r\n    height: 100%;\r\n    text-align: center;\r\n}\r\n.subTitle[_ngcontent-%COMP%]{\r\n    text-transform: uppercase;\r\n    \r\n    font-family: Poppins;\r\n    font-size: 2.2em;\r\n    font-weight: 600;\r\n    color:white !important;\r\n    text-align: center;\r\n    line-height: 1em;\r\n}\r\n\r\n\r\n.slick-slider[_ngcontent-%COMP%] {\r\n    width: 90%;\r\n    margin: auto;\r\n    justify-self: center;\r\n    justify-content: center;\r\n    \r\n  }\r\n.slick-slider[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{\r\n    min-width: 275px;\r\n    margin: 5px 3px;\r\n    \r\n    max-width: 405px\r\n  }\r\n.swiper-card[_ngcontent-%COMP%]{\r\n    font-family: Poppins;\r\n     \r\n     border-color: transparent;\r\n     \r\n     \r\n     border-radius: 5px;\r\n     border: 0;\r\n     margin: 0 3px;\r\n     box-shadow: 0 0 11px 0 rgba(0, 0, 0, 0.3);\r\n \r\n}\r\n.nav-btn[_ngcontent-%COMP%] {\r\n    height: 47px;\r\n    position: absolute;\r\n    width: 26px;\r\n    cursor: pointer;\r\n    top: 100px !important;\r\n  }\r\n.prev-slide.slick-disabled[_ngcontent-%COMP%], .next-slide.slick-disabled[_ngcontent-%COMP%] {\r\n    pointer-events: none;\r\n    opacity: 0.2;\r\n  }\r\n\r\n.input-subscribe[_ngcontent-%COMP%]{\r\n     \r\n    width: 70%;\r\n    \r\n    height: 55px;\r\n    border: 0;  \r\n    font-size: 1.2em; \r\n    font-family: Poppins;\r\n }\r\n.ip-btn[_ngcontent-%COMP%]{\r\n     height: 55px;\r\n }\r\n.subscribe[_ngcontent-%COMP%]{\r\n    background-image: url('subscribe.png');\r\n    min-height: 250px;\r\n    width: 100%;background-position: center center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n.subscribe-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    display: block;\r\n    font-family: Poppins;\r\n}\r\n.subscribe-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{\r\n    font-size: 2.65em;\r\n    \r\n    text-transform: uppercase;\r\n    font-weight: 700;\r\n    margin-top: 2.4em;\r\n    letter-spacing: 2px;\r\n    text-align: center;\r\n\r\n}\r\n.subscribe-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2){\r\n    \r\n    font-size: 2.65em;\r\n\r\n    text-transform: uppercase;\r\n    font-weight: 700;\r\n    margin-top: 1em;\r\n    letter-spacing: 5px;\r\n    text-align: center;\r\n}\r\n.subscribe-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3){\r\n\r\n    font-size: .7em;\r\n    margin-top: .8em;\r\n    text-align: center;\r\n\r\n    \r\n}\r\n.bookNow-img[_ngcontent-%COMP%]{\r\n    height: 85px !important;\r\n    width: 76px !important;\r\n    position: relative !important;\r\n    left: 0 !important;\r\n    top: 0 !important;\r\n    margin-left: 2em;\r\n}\r\n.fab-btn[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    top: 43%;\r\n    z-index: 1;\r\n    \r\n    color: white;\r\n    background: #63b846;\r\n    \r\n    outline: none !important;\r\n}\r\n.why-vitapure[_ngcontent-%COMP%]{\r\n    border: 3px solid #63b846;\r\n    padding-left: 3em;\r\n    padding-right: 3em;\r\n    border-radius: 5px;\r\n    font-weight: 500;\r\n    letter-spacing: 1px;\r\n    width: 345px;\r\n    font-size: 2em;\r\n    cursor: pointer;\r\n}\r\n.why-title[_ngcontent-%COMP%]{\r\n    display: block;\r\n    color: #707070 !important;\r\n    text-transform: uppercase;\r\n    font-family: Poppins !important;\r\n    font-size: 2vw !important;\r\n    font-weight: 600 !important;\r\n}\r\n.why-desc[_ngcontent-%COMP%]{\r\n    color: #707070 !important;\r\n    text-align: center;\r\n    font-family: Poppins !important;\r\n    font-size: 1vw !important;\r\n    line-height: 1.2vw;\r\n}\r\n.arrBack[_ngcontent-%COMP%]{\r\n    left: 1%\r\n}\r\n.arrNext[_ngcontent-%COMP%]{\r\n    right: 1%\r\n}\r\n@media only screen and (max-width: 719px) {\r\n    .heading[_ngcontent-%COMP%]{\r\n        font-size: 1.8em;\r\n        \r\n        \r\n      }\r\n      .discount[_ngcontent-%COMP%]{\r\n        font-size: 4vw;\r\n      }\r\n      .sub-heading[_ngcontent-%COMP%] {\r\n          font-size: 1.3em;\r\n    }\r\n    .section-md-sm[_ngcontent-%COMP%]{\r\n        margin : 1em !important;\r\n    }\r\n    .section-container[_ngcontent-%COMP%]{\r\n        margin: 3em;\r\n    \r\n    }\r\n    .subscribe-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child, .subscribe-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2){\r\n        font-size: 2em;\r\n       \r\n    \r\n    }\r\n    .subscribe[_ngcontent-%COMP%]{\r\n        min-height: 300px;\r\n    }\r\n  \r\n}\r\n@media (max-width: 576px) {\r\n    .arrBack[_ngcontent-%COMP%]{\r\n        left: -3.5%\r\n    }\r\n    .arrNext[_ngcontent-%COMP%]{\r\n        right: -3.5%;\r\n    }\r\n    .natural-img[_ngcontent-%COMP%] {\r\n        width: 19vw;\r\n        height: 19vw;\r\n    \r\n    }\r\n    .subscribe-content2[_ngcontent-%COMP%]{\r\n        padding: 0;\r\n        margin: 3px 0;\r\n    }\r\n    .btn-sub[_ngcontent-%COMP%]{\r\n        width: 28%;\r\n        font-size: .8em;\r\n    }\r\n  }\r\n@media only screen and (min-width:480px) and (max-width: 719px) {\r\n    \r\n      \r\n }\r\n\r\n@media only screen and (min-width: 992px){\r\n    \r\n  \r\n }\r\n\r\n@media (max-width: 599px){\r\n    .banner[_ngcontent-%COMP%]{\r\n     margin-top: 0px;\r\n     min-height: 280px;\r\n     \r\n }\r\n button.btn-shopNow[_ngcontent-%COMP%] {\r\n    width: 121px;\r\n    font-size: 1em;\r\n    height: 44px;\r\n  }\r\n \r\n   .subTitle[_ngcontent-%COMP%]{\r\n \r\n     font-size: 1.8em;\r\n }\r\n .cat-card[_ngcontent-%COMP%] {\r\n    height: 90px;\r\n}\r\n.cat-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    left: 50px !important;\r\n    height: 104%;\r\n    position: absolute;\r\n    margin-top: 0 !important;\r\n    \r\n}\r\n\r\n.right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    top: 21px;\r\n    right: 33px;    \r\n}\r\n.cat-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    font-size: 1.2em !important;\r\n    margin-bottom: 3px;\r\n    margin-top: 6px;\r\n}\r\n.subHeading[_ngcontent-%COMP%]{\r\n    font-size: 1.1em;\r\n}\r\n.pricingRange[_ngcontent-%COMP%] {\r\n    margin-top: 1em;\r\n    font-size: .9em;\r\n    margin-bottom: 0;\r\n    \r\n}\r\n\r\n\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOzs7Ozs7Ozs2QkFRNkI7SUFDekIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQix3Q0FBc0Q7SUFDdEQsV0FBVztJQUNYLHdDQUF3QztJQUN4Qyw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQiw0QkFBNEI7O0FBRWhDO0FBQ0E7S0FDSyxrQkFBa0I7S0FDbEIsZ0JBQWdCO0tBQ2hCLHlCQUF5QjtBQUM5QjtBQUNBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxpQkFBaUI7O0FBRXJCO0FBQ0E7SUFDSSwwQ0FBMEM7SUFHMUMsa0NBQWtDO0FBQ3RDO0FBQ0E7SUFDSTtNQUNFLHlCQUF5QjtNQUN6QiwyQkFBMkI7SUFDN0I7SUFDQTtNQUNFLHlCQUF5QjtNQUN6Qiw0QkFBNEI7SUFDOUI7SUFDQTtNQUNFLHlCQUF5QjtNQUN6QiwyQkFBMkI7SUFDN0I7RUFDRjtBQWJGO0lBQ0k7TUFDRSx5QkFBeUI7TUFDekIsMkJBQTJCO0lBQzdCO0lBQ0E7TUFDRSx5QkFBeUI7TUFDekIsNEJBQTRCO0lBQzlCO0lBQ0E7TUFDRSx5QkFBeUI7TUFDekIsMkJBQTJCO0lBQzdCO0VBQ0Y7QUFFRjtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLCtCQUErQjtBQUNuQztBQUNBOztJQUVJLCtCQUErQjtJQUMvQixZQUFZO0lBQ1osK0JBQStCO0lBQy9CLDJCQUEyQjs7SUFFM0IseUJBQXlCOztBQUU3QjtBQUdBO0lBQ0k7Ozs7OztzQkFNa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxrQ0FBa0M7QUFDdEM7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLDRCQUFvQjtZQUFwQixvQkFBb0I7SUFDcEIsMENBQWtDO1lBQWxDLGtDQUFrQztBQUN0QztBQUNBO0lBQ0ksTUFBTSxZQUFZLENBQUM7SUFDbkIsSUFBSSxTQUFTLENBQUM7RUFDaEI7QUFIRjtJQUNJLE1BQU0sWUFBWSxDQUFDO0lBQ25CLElBQUksU0FBUyxDQUFDO0VBQ2hCO0FBQ0Y7SUFDSTs7OztvQkFJZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGdCQUFnQjs7QUFFcEI7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0k7Ozs7Z0JBSVk7SUFDWjt5QkFDcUI7SUFDckIsV0FBVztJQUNYLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCO2dCQUNZO0FBQ2hCO0FBQ0E7O0lBRUkseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QiwrQkFBK0I7SUFDL0IsMkJBQTJCO0lBQzNCLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSwrQkFBK0I7SUFDL0IsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0kseUNBQXlDO0lBQ3pDLGtDQUFrQztJQUNsQyx3QkFBd0I7SUFDeEIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBR0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLFVBQVU7SUFDVixlQUFlO0FBQ25CO0FBQ0E7O0dBRUc7QUFDSDtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUVBOzs7OzttREFLbUQ7QUFFbkQ7Ozs7RUFJRTtBQUlBO0lBQ0UsVUFBVTtJQUNWLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtFQUN4QjtBQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkI7RUFDRjtBQUNBO0lBQ0Usb0JBQW9CO0tBQ25CLGtCQUFrQjtLQUNsQix5QkFBeUI7S0FDekIsa0JBQWtCO0tBQ2xCLG1CQUFtQjtLQUNuQixrQkFBa0I7S0FDbEIsU0FBUztLQUNULGFBQWE7S0FDYix5Q0FBeUM7O0FBRTlDO0FBR0U7SUFDRSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxlQUFlO0lBQ2YscUJBQXFCO0VBQ3ZCO0FBRUE7O0lBRUUsb0JBQW9CO0lBQ3BCLFlBQVk7RUFDZDtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0tBZ0JHO0FBSUo7O0lBRUcsVUFBVTtJQUNWLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osU0FBUztJQUNULGdCQUFnQjtJQUNoQixvQkFBb0I7Q0FDdkI7QUFDQTtLQUNJLFlBQVk7Q0FDaEI7QUFDQTtJQUNHLHNDQUFxRDtJQUNyRCxpQkFBaUI7SUFDakIsV0FBVyxDQUFDLGtDQUFrQztJQUM5Qyw0QkFBNEI7SUFDNUIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxjQUFjO0lBQ2Qsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxpQkFBaUI7O0lBRWpCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixrQkFBa0I7O0FBRXRCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsaUJBQWlCOztJQUVqQix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCO0FBQ0E7O0lBRUksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7O0lBRWxCOzt1QkFFbUI7QUFDdkI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVU7SUFDVixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysd0JBQXdCO0FBQzVCO0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osY0FBYztJQUNkLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLCtCQUErQjtJQUMvQix5QkFBeUI7SUFDekIsMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLCtCQUErQjtJQUMvQix5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSTtBQUNKO0FBQ0E7SUFDSTtBQUNKO0FBQ0E7SUFDSTtRQUNJLGdCQUFnQjtRQUNoQixtQkFBbUI7O01BRXJCO01BQ0E7UUFDRSxjQUFjO01BQ2hCO01BQ0E7VUFDSSxnQkFBZ0I7SUFDdEI7SUFDQTtRQUNJLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksV0FBVzs7SUFFZjtJQUNBO1FBQ0ksY0FBYzs7O0lBR2xCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7O0FBRUo7QUFDQTtJQUNJO1FBQ0k7SUFDSjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksV0FBVztRQUNYLFlBQVk7O0lBRWhCO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsYUFBYTtJQUNqQjtJQUNBO1FBQ0ksVUFBVTtRQUNWLGVBQWU7SUFDbkI7RUFDRjtBQUNEO0lBQ0c7Ozs7Ozs7T0FPRztNQUNEOzs7T0FHQztDQUNOO0FBQ0EsMEJBQTBCO0FBQzFCO0lBQ0c7O09BRUc7O0NBRU47QUFDRDs7O0lBR0k7QUFFSDtJQUNHO0tBQ0MsZUFBZTtLQUNmLGlCQUFpQjs7Q0FFckI7Q0FDQTtJQUNHLFlBQVk7SUFDWixjQUFjO0lBQ2QsWUFBWTtFQUNkOztHQUVDOztLQUVFLGdCQUFnQjtDQUNwQjtDQUNBO0lBQ0csWUFBWTtBQUNoQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztBQUNmO0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsd0JBQXdCO0FBQzVCOzs7Q0FHQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFubmVye1xyXG4vKiBcclxuICAgIG1pbi1oZWlnaHQ6IDM5NXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2hvbWVfYmFubmVyLnBuZykgO1xyXG4gICAgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgKi9cclxuICAgIG1pbi1oZWlnaHQ6IDUzMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2hvbWVfYmFubmVyLnBuZyk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8qIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7ICovXHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIC8qIGhlaWdodDogMTAwJTsgKi9cclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDc3JSA0NiU7XHJcblxyXG59XHJcbi5jYXJkLWdyb3VwID4gLmNhcmQge1xyXG4gICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLmhvbWUtaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIG1hcmdpbi10b3A6IC0zMHB4O1xyXG5cclxufVxyXG4uYnRuR2xvd3tcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBnbG93aW5nIDEzMDBtcyBpbmZpbml0ZTtcclxuICAgIC1tb3otYW5pbWF0aW9uOiBnbG93aW5nIDEzMDBtcyBpbmZpbml0ZTtcclxuICAgIC1vLWFuaW1hdGlvbjogZ2xvd2luZyAxMzAwbXMgaW5maW5pdGU7XHJcbiAgICBhbmltYXRpb246IGdsb3dpbmcgMTMwMG1zIGluZmluaXRlO1xyXG59XHJcbkBrZXlmcmFtZXMgZ2xvd2luZyB7XHJcbiAgICAwJSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyYmE4MDU7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCA1cHggIzJiYTgwNTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0OWU4MTk7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4ICM0OWU4MTk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJiYTgwNTtcclxuICAgICAgYm94LXNoYWRvdzogMCAwIDVweCAjMmJhODA1O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbmJ1dHRvbi5idG4tc2hvcE5vd3tcclxuICAgIHdpZHRoOiAxODlweDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDEuMmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYxOWY3YjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuYnV0dG9uLmJ0bi1zaG9wTm93OmhvdmVye1xyXG4gICBcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNmZGZmNWQ7ICovXHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjNjE5ZjdiOyAqL1xyXG4gICAgLyogYm9yZGVyLWNvbG9yOiAjNjE5ZjdiOyAqL1xyXG4gICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmZjVkO1xyXG5cclxufVxyXG5cclxuXHJcbi5kaXNjb3VudHtcclxuICAgIC8qIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgZm9udC1zaXplOiAyLjh2dztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAyLjIycHg7XHJcbiAgICBtYXJnaW46IC41ZW07XHJcbiAgICBtYXJnaW4tdG9wOiAzZW07ICovXHJcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgIGZvbnQtc2l6ZTogMi4zdnc7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMi4yMnB4O1xyXG4gICAgbWFyZ2luOiAuNWVtO1xyXG4gICAgbWFyZ2luLXRvcDogMi41ZW07XHJcbn1cclxuLmRpc2NvdW50LWNvbnRlbnR7XHJcbiAgICBib3JkZXItYm90dG9tOiAxLjZ2dyBzb2xpZCAjZmRmZjVkO1xyXG59XHJcblxyXG4uaGVhZGluZ3tcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBtYXJnaW46IDAuNmVtO1xyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICBmb250LXNpemU6IDR2dztcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogNi44MnB4O1xyXG4gICAgYW5pbWF0aW9uOiBteW1vdmUgNXM7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG59XHJcbkBrZXlmcmFtZXMgbXltb3ZlIHtcclxuICAgIGZyb20ge2xlZnQ6IC0xMDBweDt9XHJcbiAgICB0byB7bGVmdDogMHB4O31cclxuICB9XHJcbi5zdWItaGVhZGluZ3tcclxuICAgIC8qIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC43M3B4O1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBwYWRkaW5nOiAuMmVtOyAqL1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgIGZvbnQtc2l6ZTogMi41dnc7XHJcbiAgICBwYWRkaW5nOiAuMmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDN2dztcclxuICAgIC8qIG1hcmdpbi10b3A6IDFlbTsgKi9cclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcblxyXG59XHJcblxyXG4uYm9yZGVyLXRyYW5zcGFyZW50e1xyXG4gICAgYm9yZGVyOiB0cmFuc3BhcmVudDtcclxufVxyXG4uY2F0LWNhcmR7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uY2F0LWNhcmQgaW1ne1xyXG4gICAgLyogaGVpZ2h0OiAxNjVweDtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IC03MXB4O1xyXG4gICAgdG9wOiA0MXB4OyAqL1xyXG4gICAgLyogaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlOyAqL1xyXG4gICAgbGVmdDogLTUwcHg7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi10b3A6IDUlICFpbXBvcnRhbnQ7XHJcbiAgICAvKiBsZWZ0OiAtMjQlO1xyXG4gICAgdG9wOiA0MXB4OyAqL1xyXG59XHJcbi5jYXQtY2FyZCBoM3tcclxuICBcclxuICAgIGNvbG9yOiAjOWE5ZmEyICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnMgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMi42ZW0gIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG59XHJcbi5zdWJIZWFkaW5ne1xyXG4gICAgY29sb3I6IzlhOWZhMiAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIC8qIG1hcmdpbjogMC42ZW07ICovXHJcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxufVxyXG4ucHJpY2luZ1Jhbmdle1xyXG4gICAgLyogdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgKi9cclxuICAgIC8qIG1hcmdpbjogMC42ZW07ICovXHJcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgLyogZm9udC13ZWlnaHQ6IDYwMDsgKi9cclxuICAgIG1hcmdpbi10b3A6IDJlbTtcclxuICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbn1cclxuXHJcbi5yaWdodCBidXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIC8qIHdpZHRoOiAzNXB4OyAqL1xyXG59XHJcbi5pbWctbW92ZXtcclxuICAgIC8qIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTE1cHgsIDAsIDApOyAqL1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjIlLCAwLCAwKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZTtcclxuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XHJcbn1cclxuLmltZy1tb3ZlOmhvdmVye1xyXG4gICAgdHJhbnNmb3JtOiBub25lO1xyXG59XHJcblxyXG5cclxuLmxlZnQsIC5yaWdodHtcclxuICAgIGhlaWdodDogMTAwJSA7XHJcbn1cclxuLmxlZnR7XHJcbiAgICB3aWR0aDogNDAlO1xyXG59XHJcbi5yaWdodHtcclxuICAgIHotaW5kZXg6IDU7XHJcbiAgICBtYXJnaW4tbGVmdDogNyU7XHJcbn1cclxuLyogLnJpZ2h0e1xyXG4gICAgd2lkdGg6IDYwJTtcclxufSAqL1xyXG4uY2FyZC1vcHRpb257XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5iZ0dpZnR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjVmNWU5O1xyXG59XHJcbi5iZ0RldG94e1xyXG4gICAgYmFja2dyb3VuZDogI2UxZWRlZDtcclxufVxyXG4uYmdTdW1tZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTllZGRjO1xyXG59XHJcbi5iZ0RyeUZydWl0c3tcclxuICAgIGJhY2tncm91bmQ6ICNmNWVjZTA7XHJcbn1cclxuLmljb257XHJcbiAgICBmb250LXNpemU6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnN1YlRpdGxle1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIC8qIG1hcmdpbjogMC42ZW07ICovXHJcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgIGZvbnQtc2l6ZTogMi4yZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6d2hpdGUgIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogR2VuZXJhdGVkIGJ5IEFuaW1pc3RhIG9uIDIwMjAtOS04IDIwOjMzOjE1XHJcbiAqIExpY2Vuc2VkIHVuZGVyIEZyZWVCU0QgTGljZW5zZS5cclxuICogU2VlIGh0dHA6Ly9hbmltaXN0YS5uZXQvbGljZW5zZSBmb3IgbW9yZSBpbmZvLiBcclxuICogdzogaHR0cDovL2FuaW1pc3RhLm5ldCwgdDogQGNzc2FuaW1pc3RhXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbi8qKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIGFuaW1hdGlvbiB0cmFja2luZy1pbi1leHBhbmQtZndkXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcblxyXG4gIFxyXG5cclxuICAuc2xpY2stc2xpZGVyIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLyogYmFja2dyb3VuZDogIzAwMDsgKi9cclxuICB9XHJcbiAgLnNsaWNrLXNsaWRlciAuY2FyZHtcclxuICAgIG1pbi13aWR0aDogMjc1cHg7XHJcbiAgICBtYXJnaW46IDVweCAzcHg7XHJcbiAgICAvKiBtYXJnaW46IDAgM3B4OyAqL1xyXG4gICAgbWF4LXdpZHRoOiA0MDVweFxyXG4gIH1cclxuICAuc3dpcGVyLWNhcmR7XHJcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgICAvKiB3aWR0aDogMzMzcHg7ICovXHJcbiAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAvKiB3aWR0aDogMjQ1cHg7ICovXHJcbiAgICAgLyogaGVpZ2h0OiAzMDBweDsgKi9cclxuICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgYm9yZGVyOiAwO1xyXG4gICAgIG1hcmdpbjogMCAzcHg7XHJcbiAgICAgYm94LXNoYWRvdzogMCAwIDExcHggMCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiBcclxufVxyXG4gICAgXHJcbiAgXHJcbiAgLm5hdi1idG4ge1xyXG4gICAgaGVpZ2h0OiA0N3B4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDI2cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0b3A6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcmV2LXNsaWRlLnNsaWNrLWRpc2FibGVkLFxyXG4gIC5uZXh0LXNsaWRlLnNsaWNrLWRpc2FibGVkIHtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgb3BhY2l0eTogMC4yO1xyXG4gIH1cclxuICBcclxuICAvKiAucHJldi1zbGlkZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2JhY2sucG5nKSBuby1yZXBlYXQgc2Nyb2xsIDAgMDtcclxuICAgIGxlZnQ6IC0zM3B4O1xyXG4gIH1cclxuICBcclxuICAubmV4dC1zbGlkZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2JhY2sucG5nKSBuby1yZXBlYXQgc2Nyb2xsIC0yNHB4IDBweDtcclxuICAgIHJpZ2h0OiAtMzNweDtcclxuICB9XHJcbiAgXHJcbiAgLnByZXYtc2xpZGU6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IC01M3B4O1xyXG4gIH1cclxuICBcclxuICAubmV4dC1zbGlkZTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjRweCAtNTNweDtcclxuICB9ICovXHJcbiAgXHJcblxyXG4gXHJcbiAuaW5wdXQtc3Vic2NyaWJle1xyXG4gICAgIFxyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIC8qIG1pbi13aWR0aDogMzAwcHg7ICAgICAqL1xyXG4gICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgYm9yZGVyOiAwOyAgXHJcbiAgICBmb250LXNpemU6IDEuMmVtOyBcclxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gfVxyXG4gLmlwLWJ0bntcclxuICAgICBoZWlnaHQ6IDU1cHg7XHJcbiB9XHJcbiAuc3Vic2NyaWJle1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9zdWJzY3JpYmUucG5nKSA7XHJcbiAgICBtaW4taGVpZ2h0OiAyNTBweDtcclxuICAgIHdpZHRoOiAxMDAlO2JhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4uc3Vic2NyaWJlLWNvbnRlbnQgc3BhbntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbn1cclxuLnN1YnNjcmliZS1jb250ZW50IHNwYW46Zmlyc3QtY2hpbGR7XHJcbiAgICBmb250LXNpemU6IDIuNjVlbTtcclxuICAgIFxyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW4tdG9wOiAyLjRlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG59XHJcbi5zdWJzY3JpYmUtY29udGVudCBzcGFuOm50aC1jaGlsZCgyKXtcclxuICAgIC8qIGZvbnQtc2l6ZTogMi4zdnc7ICovXHJcbiAgICBmb250LXNpemU6IDIuNjVlbTtcclxuXHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnN1YnNjcmliZS1jb250ZW50IHNwYW46bnRoLWNoaWxkKDMpe1xyXG5cclxuICAgIGZvbnQtc2l6ZTogLjdlbTtcclxuICAgIG1hcmdpbi10b3A6IC44ZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgLyogdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW4tdG9wOiAuM2VtOyAqL1xyXG59XHJcbi5ib29rTm93LWltZ3tcclxuICAgIGhlaWdodDogODVweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDc2cHggIWltcG9ydGFudDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gICAgbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMmVtO1xyXG59XHJcbi5mYWItYnRue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0MyU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgLyogZm9udC1zaXplOiAxZW07ICovXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNjNiODQ2O1xyXG4gICAgLyogYm9yZGVyOiAwOyAqL1xyXG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ud2h5LXZpdGFwdXJle1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzYzYjg0NjtcclxuICAgIHBhZGRpbmctbGVmdDogM2VtO1xyXG4gICAgcGFkZGluZy1yaWdodDogM2VtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICB3aWR0aDogMzQ1cHg7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ud2h5LXRpdGxle1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb2xvcjogIzcwNzA3MCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDJ2dyAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG59XHJcbi53aHktZGVzY3tcclxuICAgIGNvbG9yOiAjNzA3MDcwICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogUG9wcGlucyAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxdncgIWltcG9ydGFudDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjJ2dztcclxufVxyXG4uYXJyQmFja3tcclxuICAgIGxlZnQ6IDElXHJcbn1cclxuLmFyck5leHR7XHJcbiAgICByaWdodDogMSVcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcxOXB4KSB7XHJcbiAgICAuaGVhZGluZ3tcclxuICAgICAgICBmb250LXNpemU6IDEuOGVtO1xyXG4gICAgICAgIC8qIHBhZGRpbmc6IC4zZW07ICovXHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgLmRpc2NvdW50e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNHZ3O1xyXG4gICAgICB9XHJcbiAgICAgIC5zdWItaGVhZGluZyB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgfVxyXG4gICAgLnNlY3Rpb24tbWQtc217XHJcbiAgICAgICAgbWFyZ2luIDogMWVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuc2VjdGlvbi1jb250YWluZXJ7XHJcbiAgICAgICAgbWFyZ2luOiAzZW07XHJcbiAgICBcclxuICAgIH1cclxuICAgIC5zdWJzY3JpYmUtY29udGVudCBzcGFuOmZpcnN0LWNoaWxkICwuc3Vic2NyaWJlLWNvbnRlbnQgc3BhbjpudGgtY2hpbGQoMil7XHJcbiAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgICBcclxuICAgIFxyXG4gICAgfVxyXG4gICAgLnN1YnNjcmliZXtcclxuICAgICAgICBtaW4taGVpZ2h0OiAzMDBweDtcclxuICAgIH1cclxuICBcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAgIC5hcnJCYWNre1xyXG4gICAgICAgIGxlZnQ6IC0zLjUlXHJcbiAgICB9XHJcbiAgICAuYXJyTmV4dHtcclxuICAgICAgICByaWdodDogLTMuNSU7XHJcbiAgICB9XHJcbiAgICAubmF0dXJhbC1pbWcge1xyXG4gICAgICAgIHdpZHRoOiAxOXZ3O1xyXG4gICAgICAgIGhlaWdodDogMTl2dztcclxuICAgIFxyXG4gICAgfVxyXG4gICAgLnN1YnNjcmliZS1jb250ZW50MntcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIG1hcmdpbjogM3B4IDA7XHJcbiAgICB9XHJcbiAgICAuYnRuLXN1YntcclxuICAgICAgICB3aWR0aDogMjglO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogLjhlbTtcclxuICAgIH1cclxuICB9XHJcbiBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NDgwcHgpIGFuZCAobWF4LXdpZHRoOiA3MTlweCkge1xyXG4gICAgLyogLmhlYWRpbmd7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjhlbTtcclxuICAgICAgICBwYWRkaW5nOiAuM2VtO1xyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIC5zdWItaGVhZGluZyB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgfSAqL1xyXG4gICAgICAvKiAuY2F0LUNvbnRhaW5lciBpbWcge1xyXG4gICAgICAgIGhlaWdodDogMTRlbTtcclxuICAgICAgICB3aWR0aDogMTRlbTtcclxuICAgIH0gKi9cclxuIH1cclxuIC8qIGZvciBsYXB0b3BzIGFuZCBhYm92ZSAqL1xyXG4gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCl7XHJcbiAgICAvKiAuY2F0LWNhcmQgaW1nIHtcclxuICAgICAgICBsZWZ0OiAtMTYlO1xyXG4gICAgfSAqL1xyXG4gIFxyXG4gfVxyXG4vKiBcclxuIEBtZWRpYSAobWF4LXdpZHRoOiA1MjBweCl7XHJcbiBcclxuIH0gKi9cclxuXHJcbiBAbWVkaWEgKG1heC13aWR0aDogNTk5cHgpe1xyXG4gICAgLmJhbm5lcntcclxuICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgbWluLWhlaWdodDogMjgwcHg7XHJcbiAgICAgXHJcbiB9XHJcbiBidXR0b24uYnRuLXNob3BOb3cge1xyXG4gICAgd2lkdGg6IDEyMXB4O1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgfVxyXG4gXHJcbiAgIC5zdWJUaXRsZXtcclxuIFxyXG4gICAgIGZvbnQtc2l6ZTogMS44ZW07XHJcbiB9XHJcbiAuY2F0LWNhcmQge1xyXG4gICAgaGVpZ2h0OiA5MHB4O1xyXG59XHJcbi5jYXQtY2FyZCBpbWcge1xyXG4gICAgbGVmdDogNTBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxMDQlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xyXG4gICAgLyogbWFyZ2luLXRvcDogNSUgIWltcG9ydGFudDsgKi9cclxufVxyXG5cclxuLnJpZ2h0IGJ1dHRvbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjFweDtcclxuICAgIHJpZ2h0OiAzM3B4OyAgICBcclxufVxyXG4uY2F0LWNhcmQgaDN7XHJcbiAgICBmb250LXNpemU6IDEuMmVtICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbn1cclxuLnN1YkhlYWRpbmd7XHJcbiAgICBmb250LXNpemU6IDEuMWVtO1xyXG59XHJcbi5wcmljaW5nUmFuZ2Uge1xyXG4gICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgZm9udC1zaXplOiAuOWVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIC8qIG1hcmdpbi1ib3R0b206IDJlbTsgKi9cclxufVxyXG5cclxuXHJcbiB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }]; }, { slickModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['slickModal']
        }], slickModalFeature: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['slickModalFeature']
        }], slickModalBlog: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['slickModalBlog']
        }] }); })();
const items = [
    // tslint:disable: max-line-length
    {
        id: 1,
        imgSrc: '../../../assets/items/apple.png',
        itemName: 'Apple',
        itemDesc: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        itemWt: 500,
        itemGross: 500,
        itemCost: 250,
    }, {
        id: 2,
        imgSrc: '../../../assets/items/cherry.png',
        itemName: 'Cherry',
        itemDesc: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        itemWt: 500,
        itemGross: 500,
        itemCost: 250,
    }, {
        id: 3,
        imgSrc: '../../../assets/items/orange.png',
        itemName: 'Orange',
        itemDesc: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        itemWt: 500,
        itemGross: 500,
        itemCost: 250,
    }, {
        id: 4,
        imgSrc: '../../../assets/items/apple.png',
        itemName: 'Apple',
        itemDesc: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        itemWt: 500,
        itemGross: 500,
        itemCost: 250,
    }, {
        id: 5,
        imgSrc: '../../../assets/items/apple.png',
        itemName: 'Apple',
        itemDesc: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        itemWt: 500,
        itemGross: 500,
        itemCost: 250,
    }, {
        id: 6,
        imgSrc: '../../../assets/items/apple.png',
        itemName: 'Apple',
        itemDesc: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        itemWt: 500,
        itemGross: 500,
        itemCost: 250,
    }
];
const categories = [
    {
        url: '../../../assets/category/detox.png',
        title: 'Detox'
    },
    {
        url: '../../../assets/category/freshFruits.png',
        title: 'Fresh Fruits'
    },
    {
        url: '../../../assets/category/Combo.png',
        title: 'Combo'
    }, {
        url: '../../../assets/category/weekend.png',
        title: 'Weekend'
    }, {
        url: '../../../assets/category/premium.png',
        title: 'Premium'
    }, {
        url: '../../../assets/category/dryFruits.png',
        title: 'dry Fruits'
    }
];
const blogs = [
    {
        imgSrc: '../../../assets/blog1.png',
        title: 'Farming',
        content: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
    },
    {
        imgSrc: '../../../assets/blog2.png',
        title: 'Contamination',
        content: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
    },
    {
        imgSrc: '../../../assets/blog3.png',
        title: 'Fresh process',
        content: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
    }
];


/***/ }),

/***/ "./src/app/components/navigation-header/navigation-header.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/navigation-header/navigation-header.component.ts ***!
  \*****************************************************************************/
/*! exports provided: NavigationHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationHeaderComponent", function() { return NavigationHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");












function NavigationHeaderComponent_mat_toolbar_row_24_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavigationHeaderComponent_mat_toolbar_row_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar-row", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavigationHeaderComponent_mat_toolbar_row_24_div_1_Template, 2, 0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r1.isTab$));
} }
function NavigationHeaderComponent_mat_toolbar_row_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar-row", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Download APP");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "About us");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Contact us");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "1800-1600-12345");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Fresh@vitapure.in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavigationHeaderComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavigationHeaderComponent_button_35_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationHeaderComponent_button_35_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavigationHeaderComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavigationHeaderComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavigationHeaderComponent_mat_toolbar_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-nav-list", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-list-item", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "DETOX");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "FRESH FRUIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-menu", 56, 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Telephonic Case Management");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "save_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Utilization Review ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Pharmacy Management");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "DRY FRUITS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-menu", 56, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Dashboards");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "save_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Reports ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "COMBO OFFERS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-menu", 56, 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Coverage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "save_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Configuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "WEEKEND OFFERS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-menu", 56, 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Bills");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "save_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Claims ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Providers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "PREMIUM Gifting");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "mat-list-item", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](44);
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("overlapTrigger", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("overlapTrigger", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("overlapTrigger", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("overlapTrigger", false);
} }
const _c0 = function (a0) { return { "hidden": a0 }; };
const _c1 = function (a0) { return { "fullWidth": a0 }; };
const _c2 = function (a0) { return { "locMargin": a0 }; };
const _c3 = ["*"];
class NavigationHeaderComponent {
    // isTab$: Observable<boolean> = this.breakpointObserver.observe(this.myBreakpoint)
    // .pipe(
    //   map(result => result.matches),
    //   shareReplay()
    // );
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.myBreakpoint = '(max-width: 900px)';
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(result => result.matches), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])());
        this.isTab$ = this.breakpointObserver.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XSmall, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Small, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Medium, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Tablet, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset,
            this.myBreakpoint, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].TabletPortrait, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].HandsetLandscape,])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(result => result.matches), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])());
    }
}
NavigationHeaderComponent.ɵfac = function NavigationHeaderComponent_Factory(t) { return new (t || NavigationHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"])); };
NavigationHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavigationHeaderComponent, selectors: [["app-navigation-header"]], ngContentSelectors: _c3, decls: 120, vars: 45, consts: [[1, "sidenav-container"], ["fixedInViewport", "", 1, "sidenav", 3, "ngClass", "mode", "opened"], ["drawer", ""], ["mat-list-item", "", "href", "#"], [1, "header-container"], ["class", "", 4, "ngIf"], ["class", "darkGrey header-one", 4, "ngIf"], [1, "header-two", "d-flex", "flex-row", "justify-content-end", 3, "ngClass"], ["class", " align-self-center mr-auto", 4, "ngIf"], [1, "align-self-center", "pr-2", "mr-3", 3, "ngClass"], [1, "d-flex", "flex-row"], ["type", "button", "class", "align-self-center", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click", 4, "ngIf"], [1, "col-sm-3", "mb-3", "pr-2", "align-self-center"], ["src", "../../../assets/location_icon.svg"], [1, "col-sm-9", "mb-3", "p-0"], [1, "align-self-start", "main-loc"], [1, "align-self-end", "loc"], [1, "align-self-center", "pr-2", "mb-3"], [1, "row"], [1, "col-4"], ["src", "../../../assets/user_icon.svg"], ["class", "col-8", 4, "ngIf"], [1, "align-self-center", "mb-3"], ["src", "../../../assets/cart_icon.svg"], ["class", "mat-primary darkGrey shadow sticky-toolbar header-three d-flex flex-wrap col-12 col-md-11", 4, "ngIf"], [1, "container-fluid", "footer-container", "darkGrey"], [1, "row", "justify-content-center"], [1, "col-sm-12", "col-md-4", "p-5"], [1, "footer-header"], [1, "footer-content"], [1, "p-2"], ["aria-label", "Side nav toggle icon"], [1, "p-2", "flex-fill"], [1, "my-2"], [1, "d-flex", "flex-row", "flex-wrap"], [1, "py-2", "pr-2", "flex-fill"], ["mat-raised-button", "", "color", "accent", 1, "btn-green-flat"], [1, "py-2", "ml-auto", "flex-fill"], [1, ""], ["class", "d-flex flex-row w-100 justify-content-center", 4, "ngIf"], [1, "d-flex", "flex-row", "w-100", "justify-content-center"], ["src", "../../../assets/Logo.svg", 1, "logo1"], [1, "darkGrey", "header-one"], [1, "spacer"], ["href", "#"], ["href", "#", 2, "text-transform", "capitalize"], [1, "align-self-center", "mr-auto"], ["src", "../../../assets/Logo.svg", 1, "logo"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 1, "align-self-center", 3, "click"], ["aria-label", "Side nav toggle icon", 2, "color", "black"], [1, "col-8"], [1, "mat-primary", "darkGrey", "shadow", "sticky-toolbar", "header-three", "d-flex", "flex-wrap", "col-12", "col-md-11"], [1, "list-horizontal"], [1, "ml-5"], ["mat-menu-item", ""], ["mat-menu-item", "", 3, "matMenuTriggerFor"], [3, "overlapTrigger"], ["referralsmenu", "matMenu"], ["DRmenu", "matMenu"], ["adminmenu", "matMenu"], ["searchmenu", "matMenu"], [1, "ml-auto", "text-center"], ["mat-fab", ""]], template: function NavigationHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Detox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Fresh Fruits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Dry Fruits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Combo offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Weekend Offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Premium gifting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-toolbar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, NavigationHeaderComponent_mat_toolbar_row_24_Template, 3, 3, "mat-toolbar-row", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, NavigationHeaderComponent_mat_toolbar_row_26_Template, 12, 0, "mat-toolbar-row", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-toolbar-row", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, NavigationHeaderComponent_div_30_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, NavigationHeaderComponent_button_35_Template, 3, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Bangalore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Indranagar, Bangalore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, NavigationHeaderComponent_div_48_Template, 2, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](49, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, NavigationHeaderComponent_div_54_Template, 2, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](55, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, NavigationHeaderComponent_mat_toolbar_56_Template, 82, 8, "mat-toolbar", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](57, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Visit vitapure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-icon", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Quick Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "History");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "li", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "FAQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "li", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Farmers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "li", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Events");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "li", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "li", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Organic Fruits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "li", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Our Smoothies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "li", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "FaFruits Boxes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "li", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Dry Fruits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Visit vitapure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Shop Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Contact us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](39, _c0, !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 15, ctx.isTab$)))("mode", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 17, ctx.isTab$) ? "over" : "side")("opened", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 19, ctx.isTab$) === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 13, ctx.isTab$) ? "dialog" : "navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 21, ctx.isTab$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 23, ctx.isTab$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](41, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 25, ctx.isTab$)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 27, ctx.isTab$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](43, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 29, ctx.isTab$)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 31, ctx.isTab$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](49, 33, ctx.isTab$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](55, 35, ctx.isTab$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](57, 37, ctx.isTab$));
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenav"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListItem"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarRow"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuItem"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["_MatMenu"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: [".sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  width: 280px;\n  box-shadow: 3px 0 6px rgba(0,0,0,.24);\n}\n\n.logo1[_ngcontent-%COMP%]{\n  height: 60px !important;\n  padding-top: 5px;\n}\n\n.sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\n  \n  background-color:  #4d4e50;\n  color:white;\n  font-family: 'Poppins', sans-serif;\n  font-weight: 600;\n  font-size: 1.2em;\n  text-transform: uppercase;\n}\n\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 8;\n}\n\n  mat-toolbar .sticky-toolbar {\n  position: sticky !important;\n  position: -webkit-sticky !important; \n  top: 0 !important; \n  z-index: 1000; \n}\n\n\n\n.hidden[_ngcontent-%COMP%]{\n  display: none;\n}\n\n.spacer[_ngcontent-%COMP%]{\n  flex:1 1 auto;\n}\n\nmat-toolbar[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0 10px;\n  color: white;\n  text-decoration: none;\n  \n}\n\n.darkGrey[_ngcontent-%COMP%]{\n background-color:  #4d4e50;\n color: white;\n}\n\n.mat-fab[_ngcontent-%COMP%]{\n  width: 65px;\n  height: 65px;\n  left: 1.5em;\n  outline: none;\n  \n  background-color: #636469 !important;\n}\n\n.header-container[_ngcontent-%COMP%]{\n  \n}\n\n.logo[_ngcontent-%COMP%]{\n  height: 83px !important; \n  width: 167px !important;\n}\n\n.mat-icon[_ngcontent-%COMP%]{\n  height: 100%;\n  width: 100%;\n  font-size: 3em;\n  color:white;\n}\n\n.loc[_ngcontent-%COMP%]{\n  color:#707070;\n  opacity: 0.6;\n  font-family: 'Poppins';\n  margin-top: -13px;\n}\n\n.header-one[_ngcontent-%COMP%]{\n  height: 40px;\n  font-family: 'Poppins', sans-serif;\n  font-weight: 400;\n  font-size: .9em;\n  text-transform: uppercase;\n\n}\n\n.header-one[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n  font-size: 0.75em;\n  \n}\n\n.header-two[_ngcontent-%COMP%]{\n  width: 80%;\n  \n  margin: 0 auto;\n  font-family: 'Poppins', sans-serif;\n  font-weight: 400;\n font-size: 0.8em;\n  color:#4d4e50;  \n  height: 104px;\n}\n\n.header-two[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n  color:#4d4e50; \n}\n\n.header-two[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n  height: 35px;\n  width: 35px;\n}\n\n.header-three[_ngcontent-%COMP%]{\n  \n   \n   min-height: 65px;;\n  margin: 0 auto;\n  border-radius: 50px;\n  font-weight: 200;\n  font-size: .9em;\n  font-family: 'Poppins', sans-serif;\n  z-index: 3;\n  height: auto !important;\n\n    \n    \n  \n}\n\n\n\n\n\n\n\nmat-nav-list.list-horizontal[_ngcontent-%COMP%] {\n  padding: 0;\n  display: contents;\n}\n\nmat-nav-list.list-horizontal[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%] {\n  display: inline-block;\n  \n  height: auto;\n  width: auto;\n}\n\nbutton.mat-menu-item[_ngcontent-%COMP%] {\n  width: 100%;\n  font-weight: 500;\n  font-size: 1em;\n  \n  color: white;\n  text-transform: uppercase;\n  font-family: Montserrat;\n}\n\n\n\n.mat-list-item[_ngcontent-%COMP%]   .mat-list-item-content[_ngcontent-%COMP%] {\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n}\n\n\n\n.locMargin[_ngcontent-%COMP%]{\n  margin-right: auto !important ;\n}\n\n.fullWidth[_ngcontent-%COMP%]{\n  width: 100% !important;\n}\n\n  .mat-list-base .mat-list-item .mat-list-item-content, .mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-list-item-content[_ngcontent-%COMP%]{\n  font-family: 'Poppins', sans-serif;\n  font-weight: 600;\n  font-size: 1em;\n  text-transform: uppercase;\n  padding: 0 5px !important;\n}\n\n\n\n\n\n.footer-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\n  font-family: 'Poppins', sans-serif;\n  color: white;\n  text-transform: uppercase;\n  font-weight: 600;\n  letter-spacing: 1px;\n}\n\n.footer-container[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{\n  width: 13%;\n  text-align: left;\n  margin-left: 0;\n  \n  background: white;\n  height: 2px;\n  font-family: 'Poppins', sans-serif;\n    color: white;\n   \n}\n\n.footer-content[_ngcontent-%COMP%]{\n  font-family: 'Poppins', sans-serif;\n  \n  color: #d6d6d6;\n}\n\nul[_ngcontent-%COMP%], ol[_ngcontent-%COMP%] {\n  list-style: none;\n  text-transform: uppercase;\n  \n  padding: 0;\n  margin: 0;\n}\n\n@media (max-width: 599px){\n  \n\n  .header-two[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 6vw;\n    width: 6vw;\n\n}\n\n.loc[_ngcontent-%COMP%], .main-loc[_ngcontent-%COMP%]{\n  font-size: 12px;\n}\n.mat-icon[_ngcontent-%COMP%] {\n\n  font-size: 35px;\n}\n.header-two[_ngcontent-%COMP%]{\n  height: 63px;\n  padding-top: 19px;\n}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZpZ2F0aW9uLWhlYWRlci9uYXZpZ2F0aW9uLWhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHFDQUFxQztBQUN2Qzs7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBR0E7RUFDRSx5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLFdBQVc7RUFDWCxrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx3QkFBZ0I7RUFBaEIsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTixVQUFVO0FBQ1o7O0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0IsbUNBQW1DLEVBQUUseUJBQXlCO0VBQzlELGlCQUFpQixFQUFFLHlDQUF5QztFQUM1RCxhQUFhLEVBQUUsK0RBQStEO0FBQ2hGOztBQUVBOzs7OztHQUtHOztBQUVIO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxZQUFZO0VBQ1oscUJBQXFCOztBQUV2Qjs7QUFFQTtDQUNDLDBCQUEwQjtDQUMxQixZQUFZO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qix1QkFBdUI7QUFDekI7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0NBQWtDO0VBQ2xDLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YseUJBQXlCOztBQUUzQjs7QUFHQTtFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSxVQUFVOztFQUVWLGNBQWM7RUFDZCxrQ0FBa0M7RUFDbEMsZ0JBQWdCO0NBQ2pCLGdCQUFnQjtFQUNmLGFBQWE7RUFDYixhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUNBO0VBQ0U7SUFDRTtHQUNELDZEQUE2RDtHQUM3RCxnQkFBZ0I7RUFDakIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtDQUFrQztFQUNsQyxVQUFVO0VBQ1YsdUJBQXVCOztJQUVyQix5QkFBeUI7SUFDekI7MEJBQ3NCOztBQUUxQjs7QUFDQTs7R0FFRzs7QUFDSDs7O0dBR0c7O0FBRUg7Ozs7OztHQU1HOztBQUVIO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLHdDQUF3QztFQUN4QyxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLHVCQUF1QjtBQUN6Qjs7QUFFQTs7R0FFRzs7QUFDRjtFQUNDLDRCQUE0QjtFQUM1Qiw2QkFBNkI7QUFDL0I7O0FBQ0E7Ozs7RUFJRTs7QUFHRjtFQUNFLDhCQUE4QjtBQUNoQzs7QUFDQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLHlCQUF5QjtFQUN6Qix5QkFBeUI7QUFDM0I7O0FBR0E7Ozs7O0dBS0c7O0FBQ0g7Ozs7Ozs7O0dBUUc7O0FBRUg7RUFDRSxrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsa0NBQWtDO0lBQ2hDLFlBQVk7O0FBRWhCOztBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDLHVCQUF1QjtFQUN2QixjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6Qjs7bUJBRWlCO0VBQ2pCLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRTs7S0FFRzs7RUFFSDtJQUNFLFdBQVc7SUFDWCxVQUFVOztBQUVkOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBOztFQUVFLGVBQWU7QUFDakI7QUFDQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7QUFDQTs7QUFDQTtHQUNHIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZpZ2F0aW9uLWhlYWRlci9uYXZpZ2F0aW9uLWhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2lkZW5hdiB7XG4gIHdpZHRoOiAyODBweDtcbiAgYm94LXNoYWRvdzogM3B4IDAgNnB4IHJnYmEoMCwwLDAsLjI0KTtcbn1cbi5sb2dvMXtcbiAgaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cblxuLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcbiAgLyogYmFja2dyb3VuZDogaW5oZXJpdDsgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogICM0ZDRlNTA7XG4gIGNvbG9yOndoaXRlO1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEuMmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDg7XG59XG46Om5nLWRlZXAgbWF0LXRvb2xiYXIgLnN0aWNreS10b29sYmFyIHtcbiAgcG9zaXRpb246IHN0aWNreSAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3kgIWltcG9ydGFudDsgLyogRm9yIG1hY09TL2lPUyBTYWZhcmkgKi9cbiAgdG9wOiAwICFpbXBvcnRhbnQ7IC8qIFNldHMgdGhlIHN0aWNreSB0b29sYmFyIHRvIGJlIG9uIHRvcCAqL1xuICB6LWluZGV4OiAxMDAwOyAvKiBFbnN1cmUgdGhhdCB5b3VyIGFwcCdzIGNvbnRlbnQgZG9lc24ndCBvdmVybGFwIHRoZSB0b29sYmFyICovXG59XG5cbi8qIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuc2lkZW5hdiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG59ICovXG5cbi5oaWRkZW57XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zcGFjZXJ7XG4gIGZsZXg6MSAxIGF1dG87XG59XG5cbm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5tYXQtdG9vbGJhciBhIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgMTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIFxufVxuXG4uZGFya0dyZXl7XG4gYmFja2dyb3VuZC1jb2xvcjogICM0ZDRlNTA7XG4gY29sb3I6IHdoaXRlO1xufVxuXG4ubWF0LWZhYntcbiAgd2lkdGg6IDY1cHg7XG4gIGhlaWdodDogNjVweDtcbiAgbGVmdDogMS41ZW07XG4gIG91dGxpbmU6IG5vbmU7XG4gIC8qIGNvbG9yOiAjNjM2NDY5OyAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjM2NDY5ICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXItY29udGFpbmVye1xuICAvKiBoZWlnaHQ6IDIwNXB4OyAqL1xufVxuXG4ubG9nb3tcbiAgaGVpZ2h0OiA4M3B4ICFpbXBvcnRhbnQ7IFxuICB3aWR0aDogMTY3cHggIWltcG9ydGFudDtcbn1cbi5tYXQtaWNvbntcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAzZW07XG4gIGNvbG9yOndoaXRlO1xufVxuLmxvY3tcbiAgY29sb3I6IzcwNzA3MDtcbiAgb3BhY2l0eTogMC42O1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xuICBtYXJnaW4tdG9wOiAtMTNweDtcbn1cblxuLmhlYWRlci1vbmV7XG4gIGhlaWdodDogNDBweDtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAuOWVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG59XG5cblxuLmhlYWRlci1vbmUgYXtcbiAgZm9udC1zaXplOiAwLjc1ZW07XG4gIC8qIGZvbnQtd2VpZ2h0OiAwMDsgKi9cbn1cbi5oZWFkZXItdHdve1xuICB3aWR0aDogODAlO1xuICBcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gZm9udC1zaXplOiAwLjhlbTtcbiAgY29sb3I6IzRkNGU1MDsgIFxuICBoZWlnaHQ6IDEwNHB4O1xufVxuLmhlYWRlci10d28gYXtcbiAgY29sb3I6IzRkNGU1MDsgXG59XG4uaGVhZGVyLXR3byBpbWd7XG4gIGhlaWdodDogMzVweDtcbiAgd2lkdGg6IDM1cHg7XG59XG4uaGVhZGVyLXRocmVle1xuICAvKiB3aWR0aDogODAlO1xuICAgKi9cbiAgIC8qIHRyYW5zaXRpb246IDAuMzVzIGFsbCBjdWJpYy1iZXppZXIoMC42NSwgMC4wNSwgMC4zNiwgMSk7ICovXG4gICBtaW4taGVpZ2h0OiA2NXB4OztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIGZvbnQtc2l6ZTogLjllbTtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgei1pbmRleDogMztcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG5cbiAgICAvKiBib3JkZXItcmFkaXVzOiAzMHB4OyAqL1xuICAgIC8qIGNvbG9yOiAjZmZmZmZmO1xuICAgIGJhY2tncm91bmQ6ICM0ZDRlNTA7ICovXG4gIFxufVxuLyogLm1hdC10b29sYmFyLXJvdywgLm1hdC10b29sYmFyLXNpbmdsZS1yb3cge1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbn0gKi9cbi8qIDo6bmctZGVlcCBtYXQtdG9vbGJhciBtYXQtdG9vbGJhci1yb3cuaGVhZGVyLXRocmVlIHtcbiAgcG9zaXRpb246IHN0aWNreSAhaW1wb3J0YW50O1xuICB0b3A6IHZhcigtLWRlZmF1bHQtaGVpZ2h0KTtcbn0gKi9cblxuLyogLmhlYWRlci10aHJlZS10cmlhbHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLWxlZnQ6IDQ1cHg7XG59ICovXG5cbm1hdC1uYXYtbGlzdC5saXN0LWhvcml6b250YWwge1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBjb250ZW50cztcbn1cbm1hdC1uYXYtbGlzdC5saXN0LWhvcml6b250YWwgLm1hdC1saXN0LWl0ZW0ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIC8qIGhlaWdodDogYXV0bzsgKi9cbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogYXV0bztcbn1cbmJ1dHRvbi5tYXQtbWVudS1pdGVtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICAvKiBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmOyAqL1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xufVxuXG4vKiAubWF0LXRvb2xiYXItcm93LCAubWF0LXRvb2xiYXItc2luZ2xlLXJvd3tcbiAgaGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xufSAqL1xuIC5tYXQtbGlzdC1pdGVtIC5tYXQtbGlzdC1pdGVtLWNvbnRlbnQge1xuICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbn1cbi8qXG4ubmF2YmFyLW5hdntcbiAgcGFkZGluZzogMjBweCAwO1xuICB0cmFuc2l0aW9uOiAwLjM1cyBhbGwgY3ViaWMtYmV6aWVyKDAuNjUsIDAuMDUsIDAuMzYsIDEpO1xufSovXG5cblxuLmxvY01hcmdpbntcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQgO1xufVxuLmZ1bGxXaWR0aHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1pdGVtIC5tYXQtbGlzdC1pdGVtLWNvbnRlbnQsIC5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1vcHRpb24gLm1hdC1saXN0LWl0ZW0tY29udGVudHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBhZGRpbmc6IDAgNXB4ICFpbXBvcnRhbnQ7XG59XG5cblxuLyogQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5sb2N7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cblxufSAqL1xuLyogQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KXtcbiAgLmxvY3tcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5oZWFkZXItdHdve1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59ICovXG5cbi5mb290ZXItaGVhZGVyIGg0e1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG4uZm9vdGVyLWNvbnRhaW5lciBocntcbiAgd2lkdGg6IDEzJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIC8qIGNvbG9yOiB3aGl0ZTsgKi9cbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDogMnB4O1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgIFxufVxuLmZvb3Rlci1jb250ZW50e1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICAvKiBmb250LXNpemU6IDAuODNlbTsgKi9cbiAgY29sb3I6ICNkNmQ2ZDY7XG59XG51bCwgb2wge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAvKiBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDAuOGVtO1xuICBjb2xvcjogI2Q2ZDZkNjsgKi9cbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufSBcblxuQG1lZGlhIChtYXgtd2lkdGg6IDU5OXB4KXtcbiAgLyogbWF0LXRvb2xiYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5NSwgMTczLCAxMTgpO1xuICB9ICovXG5cbiAgLmhlYWRlci10d28gaW1nIHtcbiAgICBoZWlnaHQ6IDZ2dztcbiAgICB3aWR0aDogNnZ3O1xuXG59XG5cbi5sb2MsIC5tYWluLWxvY3tcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLm1hdC1pY29uIHtcblxuICBmb250LXNpemU6IDM1cHg7XG59XG4uaGVhZGVyLXR3b3tcbiAgaGVpZ2h0OiA2M3B4O1xuICBwYWRkaW5nLXRvcDogMTlweDtcbn1cbn1cbi8qIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbn0gKi8iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navigation-header',
                templateUrl: './navigation-header.component.html',
                styleUrls: ['./navigation-header.component.css']
            }]
    }], function () { return [{ type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/why-dialog/why-dialog.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/why-dialog/why-dialog.component.ts ***!
  \***************************************************************/
/*! exports provided: WhyDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhyDialogComponent", function() { return WhyDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function WhyDialogComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Why ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Vitapure");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Premium produce ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta aut ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "No Contamination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta aut a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Always Fresh ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta aut ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Everyday Delivery ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta aut a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Text Title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta aut ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WhyDialogComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Why ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Vitapure");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Premium produce ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta aut ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "No Contamination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta aut a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Always Fresh ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta aut ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Everyday Delivery ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta aut a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Text Title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta aut ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class WhyDialogComponent {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isTab$ = this.breakpointObserver.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Tablet, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Small])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(result => result.matches), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])());
    }
    ngOnInit() {
    }
}
WhyDialogComponent.ɵfac = function WhyDialogComponent_Factory(t) { return new (t || WhyDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"])); };
WhyDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WhyDialogComponent, selectors: [["app-why-dialog"]], decls: 5, vars: 6, consts: [["class", "why-img1", "style", "position: relative;", 4, "ngIf"], ["class", "why-img", "style", "position: relative;", 4, "ngIf"], [1, "why-img1", 2, "position", "relative"], ["src", "../../../assets/Horizontal Why Vitapure.png", "alt", "", "width", "100%", "height", "100%"], [1, "why-content1"], [1, "content-top1"], [1, "why-title"], [1, "why-desc", "mt-1"], [1, "content-bottom1"], [1, "content-top2"], [1, "content-bottom2"], [1, "content-top3"], [1, "why-img", 2, "position", "relative"], ["src", "../../../assets/whyVitaPure.png", "alt", "", "width", "100%"], [1, "why-content"], [1, "content-right1"], [1, "content-left1"], [1, "content-right2"], [1, "content-left2"], [1, "content-right3"]], template: function WhyDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WhyDialogComponent_div_1_Template, 31, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WhyDialogComponent_div_3_Template, 31, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx.isTab$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, ctx.isTab$));
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: [".mat-dialog-content[_ngcontent-%COMP%] {\r\n    max-height: 89vh;\r\n    margin: 0%;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n   outline: none !important;\r\n}\r\n\r\n.why-img[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    font-size: 1.8vw;\r\n    line-height: 2.2vw;\r\n}\r\n\r\n.why-content[_ngcontent-%COMP%]{\r\n    font-size: 4vw !important;\r\n    right: 24vw;\r\n    text-transform: uppercase;\r\n    top: 2em;\r\n}\r\n\r\n.content-right1[_ngcontent-%COMP%]{\r\n    top: 20vw;\r\n    width: 25vw;\r\n    right: 4vw;\r\n    \r\n}\r\n\r\n.content-left1[_ngcontent-%COMP%]{\r\n    top: 48vw;\r\n    width: 25vw;\r\n    left: 7vw;\r\n}\r\n\r\n.content-right2[_ngcontent-%COMP%]{\r\n    top: 67vw;\r\n    width: 25vw;\r\n    right: 4vw;\r\n}\r\n\r\n.content-left2[_ngcontent-%COMP%]{\r\n    top: 89vw;\r\n    width: 25vw;\r\n    left: 7vw;\r\n}\r\n\r\n.content-right3[_ngcontent-%COMP%]{\r\n    top: 108vw;\r\n    width: 25vw;\r\n    right: 4vw;\r\n}\r\n\r\n.why-content1[_ngcontent-%COMP%]{\r\n    top: 1.5em;\r\n    font-size: 2.7vw !important;\r\n    width: 100% !important;\r\n    text-transform: uppercase;\r\n    justify-content: center;\r\n    text-align: center;\r\n}\r\n\r\n.why-img1[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    font-size: 1em;     \r\n    width: 12vw;\r\n    line-height: 1em;\r\n    \r\n    \r\n}\r\n\r\n.content-top1[_ngcontent-%COMP%]{\r\n    top: 13em;  \r\n    left: 10vw;\r\n}\r\n\r\n.content-bottom1[_ngcontent-%COMP%]{\r\n    bottom: 8em;\r\n    left: 24vw;\r\n}\r\n\r\n.content-top2[_ngcontent-%COMP%]{\r\n    top: 13em;  \r\n    left: 34vw;\r\n}\r\n\r\n.content-bottom2[_ngcontent-%COMP%]{\r\n    bottom: 8em;\r\n    right:  18vw;\r\n}\r\n\r\n.content-top3[_ngcontent-%COMP%]{\r\n    top: 13em;  \r\n    right:  6vw;\r\n}\r\n\r\n@media (max-width: 599px){\r\n.why-img[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    font-size: .7em;\r\n    line-height: 1.3em;\r\n    \r\n}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93aHktZGlhbG9nL3doeS1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixVQUFVO0FBQ2Q7O0FBRUE7R0FDRyx3QkFBd0I7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLFFBQVE7QUFDWjs7QUFDQTtJQUNJLFNBQVM7SUFDVCxXQUFXO0lBQ1gsVUFBVTtJQUNWLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsV0FBVztJQUNYLFNBQVM7QUFDYjs7QUFDQTtJQUNJLFNBQVM7SUFDVCxXQUFXO0lBQ1gsVUFBVTtBQUNkOztBQUVBO0lBQ0ksU0FBUztJQUNULFdBQVc7SUFDWCxTQUFTO0FBQ2I7O0FBQ0E7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLFVBQVU7QUFDZDs7QUFHQTtJQUNJLFVBQVU7SUFDViwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0Qix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztJQUNYLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLFNBQVM7SUFDVCxXQUFXO0FBQ2Y7O0FBR0E7QUFDQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsd0JBQXdCO0FBQzVCO0FBQ0EiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3doeS1kaWFsb2cvd2h5LWRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1kaWFsb2ctY29udGVudCB7XHJcbiAgICBtYXgtaGVpZ2h0OiA4OXZoO1xyXG4gICAgbWFyZ2luOiAwJTtcclxufVxyXG5cclxuYnV0dG9ue1xyXG4gICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi53aHktaW1nIGRpdntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGZvbnQtc2l6ZTogMS44dnc7XHJcbiAgICBsaW5lLWhlaWdodDogMi4ydnc7XHJcbn1cclxuLndoeS1jb250ZW50e1xyXG4gICAgZm9udC1zaXplOiA0dncgIWltcG9ydGFudDtcclxuICAgIHJpZ2h0OiAyNHZ3O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHRvcDogMmVtO1xyXG59XHJcbi5jb250ZW50LXJpZ2h0MXtcclxuICAgIHRvcDogMjB2dztcclxuICAgIHdpZHRoOiAyNXZ3O1xyXG4gICAgcmlnaHQ6IDR2dztcclxuICAgIC8qIHRvcDogMzB2dzsgKi9cclxufVxyXG5cclxuLmNvbnRlbnQtbGVmdDF7XHJcbiAgICB0b3A6IDQ4dnc7XHJcbiAgICB3aWR0aDogMjV2dztcclxuICAgIGxlZnQ6IDd2dztcclxufVxyXG4uY29udGVudC1yaWdodDJ7XHJcbiAgICB0b3A6IDY3dnc7XHJcbiAgICB3aWR0aDogMjV2dztcclxuICAgIHJpZ2h0OiA0dnc7XHJcbn1cclxuXHJcbi5jb250ZW50LWxlZnQye1xyXG4gICAgdG9wOiA4OXZ3O1xyXG4gICAgd2lkdGg6IDI1dnc7XHJcbiAgICBsZWZ0OiA3dnc7XHJcbn1cclxuLmNvbnRlbnQtcmlnaHQze1xyXG4gICAgdG9wOiAxMDh2dztcclxuICAgIHdpZHRoOiAyNXZ3O1xyXG4gICAgcmlnaHQ6IDR2dztcclxufVxyXG5cclxuXHJcbi53aHktY29udGVudDF7XHJcbiAgICB0b3A6IDEuNWVtO1xyXG4gICAgZm9udC1zaXplOiAyLjd2dyAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ud2h5LWltZzEgZGl2e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZm9udC1zaXplOiAxZW07ICAgICBcclxuICAgIHdpZHRoOiAxMnZ3O1xyXG4gICAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICAgIC8qIGZvbnQtc2l6ZTogMS44dnc7ICovXHJcbiAgICAvKiBsaW5lLWhlaWdodDogMi4ydnc7ICovXHJcbn1cclxuXHJcbi5jb250ZW50LXRvcDF7XHJcbiAgICB0b3A6IDEzZW07ICBcclxuICAgIGxlZnQ6IDEwdnc7XHJcbn1cclxuXHJcbi5jb250ZW50LWJvdHRvbTF7XHJcbiAgICBib3R0b206IDhlbTtcclxuICAgIGxlZnQ6IDI0dnc7XHJcbn1cclxuXHJcbi5jb250ZW50LXRvcDJ7XHJcbiAgICB0b3A6IDEzZW07ICBcclxuICAgIGxlZnQ6IDM0dnc7XHJcbn1cclxuXHJcbi5jb250ZW50LWJvdHRvbTJ7XHJcbiAgICBib3R0b206IDhlbTtcclxuICAgIHJpZ2h0OiAgMTh2dztcclxufVxyXG4uY29udGVudC10b3Aze1xyXG4gICAgdG9wOiAxM2VtOyAgXHJcbiAgICByaWdodDogIDZ2dztcclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1OTlweCl7XHJcbi53aHktaW1nIGRpdiB7XHJcbiAgICBmb250LXNpemU6IC43ZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS4zZW07XHJcbiAgICAvKiBsaW5lLWhlaWdodDogMi4ydnc7ICovXHJcbn1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WhyDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-why-dialog',
                templateUrl: './why-dialog.component.html',
                styleUrls: ['./why-dialog.component.css']
            }]
    }], function () { return [{ type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"] }]; }, null); })();


/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");














const Material = [
    _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"],
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
    _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
    _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"],
    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
];
class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [[Material], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"]], exports: [_angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [Material],
                exports: [Material]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\divya.gopal\Desktop\Current\vitapure\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map