webpackJsonp([0],{

/***/ 145:
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
webpackEmptyAsyncContext.id = 145;

/***/ }),

/***/ 188:
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
webpackEmptyAsyncContext.id = 188;

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, alertCtrl, actionSheetCtrl, afDatabase, afAuth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.afDatabase = afDatabase;
        this.afAuth = afAuth;
        this.songsRef = afDatabase.list('songs');
        this.songs = this.songsRef.valueChanges();
        afAuth.authState.subscribe(function (user) {
            if (!user) {
                _this.currentUser = null;
                return;
            }
            _this.currentUser = { uid: user.uid, photoURL: user.photoURL };
        });
    }
    HomePage.prototype.addSong = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Publicacion',
            message: "Ingrese publicación",
            inputs: [
                {
                    name: 'title',
                    placeholder: 'Title',
                }
            ],
            buttons: [
                {
                    text: 'Privado',
                    handler: function (data) {
                        var newSongRef = _this.songsRef.push({});
                        newSongRef.set({
                            id: newSongRef.key,
                            title: data.title,
                            estado: 'priv',
                            uid: _this.currentUser.uid
                        });
                    }
                }, {
                    text: 'Mis amigos',
                    handler: function (data) {
                        var newSongRef = _this.songsRef.push({});
                        newSongRef.set({
                            id: newSongRef.key,
                            title: data.title,
                            estado: 'amigo',
                            uid: _this.currentUser.uid
                        });
                    }
                },
                {
                    text: 'Publico',
                    handler: function (data) {
                        var newSongRef = _this.songsRef.push({});
                        newSongRef.set({
                            id: newSongRef.key,
                            title: data.title,
                            estado: 'publ',
                            uid: _this.currentUser.uid
                        });
                    }
                }, {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        prompt.present();
    };
    HomePage.prototype.showOptions = function (songId, songTitle) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: '¿Qué quieres hacer?',
            buttons: [
                {
                    text: 'Eliminar publicación',
                    role: 'destructive',
                    handler: function () {
                        _this.removeSong(songId);
                    }
                }, {
                    text: 'Actualizar publicación',
                    handler: function () {
                        _this.updateSong(songId, songTitle);
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    HomePage.prototype.removeSong = function (songId) {
        this.songsRef.remove(songId);
    };
    HomePage.prototype.updateSong = function (songId, songTitle) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Publicación',
            message: "Editar publicación",
            inputs: [
                {
                    name: 'title',
                    placeholder: 'Title',
                    value: songTitle
                },
            ],
            buttons: [
                {
                    text: 'Privado',
                    handler: function (data) {
                        _this.songsRef.update(songId, {
                            title: data.title, estado: 'priv', lastUpdatedBy: _this.currentUser.uid
                        });
                    }
                },
                {
                    text: 'Mis amigoss',
                    handler: function (data) {
                        _this.songsRef.update(songId, {
                            title: data.title, estado: 'amigo', lastUpdatedBy: _this.currentUser.uid
                        });
                    }
                },
                {
                    text: 'Publico',
                    handler: function (data) {
                        _this.songsRef.update(songId, {
                            title: data.title, estado: 'publ', lastUpdatedBy: _this.currentUser.uid
                        });
                    }
                },
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        prompt.present();
    };
    HomePage.prototype.login = function () {
        var _this = this;
        this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"].GoogleAuthProvider())
            .then(function (response) {
            console.log('resultado login google:', response);
            var userRef = _this.afDatabase.list('users');
            console.log(userRef);
            userRef.update(response.user.uid, {
                userId: response.user.uid,
                displayName: response.user.displayName,
                photoURL: response.user.photoURL,
                email: response.user.email
            });
            //userRef.push({userId: xx.user.uid, displayName: xx.user.displayName}).then((xx)=>{
            //});
        });
    };
    HomePage.prototype.loginWithEmail = function () {
        this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"].EmailAuthProvider()).then(function (xx) {
        });
    };
    HomePage.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\romel\Economia\af2-lists\src\pages\home\home.html"*/'<ion-header>\n    <ion-navbar>\n        <!--ion-buttons end *ngIf="afAuth.authState | async">\n          <button color="primary" ion-button icon-only (click)="addSong()">\n            <ion-icon name="add-circle"></ion-icon>\n          </button>\n        </ion-buttons-->\n\n        <ion-title>\n            <ion-item class="item item-trns text-center">\n                EXAMEN DE ECONOMIA DIGITAL\n                <ion-navbar item-end *ngIf="afAuth.authState | async as user">\n                    <button ion-button menuToggle>\n                            <ion-icon name="menu"></ion-icon>\n                         </button>\n                    <ion-title>Hello {{ user.displayName }}!</ion-title>\n                </ion-navbar>\n                <ion-avatar item-end *ngIf="afAuth.authState | async">\n                    <img src={{currentUser.photoURL}}>\n                </ion-avatar>\n            </ion-item>\n\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <div *ngIf="afAuth.authState | async as user; else showLogin">\n        <label></label>\n        <h1>Mis publicaciones</h1>\n        <ion-list>\n            <div *ngFor="let song of songs | async" (click)="showOptions(song.id, song.title)">\n                <ion-item *ngIf="song.uid == currentUser.uid">\n                    <ion-card>\n                        <ion-card-content>\n                            {{song.title}}\n                        </ion-card-content>\n                    </ion-card>\n                </ion-item>\n            </div>\n        </ion-list>\n        <ion-fab right bottom>\n            <button ion-fab (click)="addSong()">\n            <ion-icon name="add" ></ion-icon>\n          </button>\n        </ion-fab>\n\n    </div>\n    <ng-template #showLogin>\n        <p>INICIAR SESION.</p>\n        <button ion-button color="danger" full (click)="login()" icon-right>\n          <ion-icon name="logo-googleplus"></ion-icon>\n          &nbsp; Login with Google\n        </button>\n    </ng-template>\n</ion-content>'/*ion-inline-end:"C:\romel\Economia\af2-lists\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _e || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserPage = (function () {
    function UserPage(navCtrl, alertCtrl, actionSheetCtrl, afDatabase, afAuth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.afDatabase = afDatabase;
        this.afAuth = afAuth;
        this.seguRef = afDatabase.list('segui');
        this.segui = this.seguRef.valueChanges();
        this.userRef = afDatabase.list('users');
        this.users = this.userRef.valueChanges();
        afAuth.authState.subscribe(function (user) {
            if (!user) {
                _this.currentUser = null;
                return;
            }
            _this.currentUser = { uid: user.uid, photoURL: user.photoURL };
        });
    }
    UserPage.prototype.showOptions = function (usersID) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: '¿Qué quieres hacer?',
            buttons: [
                {
                    text: 'Seguir Usuario',
                    handler: function () {
                        _this.seguidor(usersID);
                    }
                },
                {
                    text: 'Dejar Usuario',
                    role: 'destructive',
                    handler: function () {
                        _this.seguidor(usersID);
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    UserPage.prototype.seguidor = function (userId) {
        var newSeguRef = this.seguRef.push({});
        newSeguRef.set({
            id: newSeguRef.key,
            seguido: userId,
            uid: this.currentUser.uid
        });
    };
    UserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"C:\romel\Economia\af2-lists\src\pages\user\user.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <!--ion-buttons end *ngIf="afAuth.authState | async">\n\n          <button color="primary" ion-button icon-only (click)="addSong()">\n\n            <ion-icon name="add-circle"></ion-icon>\n\n          </button>\n\n        </ion-buttons-->\n\n\n\n        <ion-title>\n\n            <ion-item class="item item-trns text-center">\n\n                EXAMEN DE ECONOMIA DIGITAL\n\n                <ion-navbar item-end *ngIf="afAuth.authState | async as user;">\n\n                    <button ion-button menuToggle>\n\n                            <ion-icon name="menu"></ion-icon>\n\n                         </button>\n\n                    <ion-title>Hello {{ user.displayName }}!</ion-title>\n\n                </ion-navbar>\n\n                <ion-avatar item-end *ngIf="afAuth.authState | async">\n\n                    <img src={{currentUser.photoURL}}>\n\n                </ion-avatar>\n\n            </ion-item>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n    <div *ngIf="afAuth.authState | async as user">\n\n        <label></label>\n\n        <h1>Usuarios Registrados</h1>\n\n        <ion-list>\n\n            <ion-item *ngFor="let user of users | async" (click)="showOptions(user.userId)">\n\n                <ion-card>\n\n                    <ion-card-content>\n\n                        <ion-avatar item-end *ngIf="afAuth.authState | async">\n\n                            <img src={{user.photoURL}}>\n\n                        </ion-avatar> {{user.displayName}}\n\n                    </ion-card-content>\n\n                </ion-card>\n\n\n\n\n\n            </ion-item>\n\n        </ion-list>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\romel\Economia\af2-lists\src\pages\user\user.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _e || Object])
    ], UserPage);
    return UserPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(303);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_user_user__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// Import the AF2 Module



// AF2 Settings
var firebaseConfig = {
    apiKey: "AIzaSyDfWdHp_RrkEuZTSDNrFrkZjAQUIl-pyoQ",
    authDomain: "ionecfirebase.firebaseapp.com",
    databaseURL: "https://ionecfirebase.firebaseio.com",
    projectId: "ionecfirebase",
    storageBucket: "ionecfirebase.appspot.com",
    messagingSenderId: "681089089815"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_user_user__["a" /* UserPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_8_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__["b" /* AngularFireAuthModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_user_user__["a" /* UserPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_user_user__ = __webpack_require__(281);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, afAuth) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.afAuth = afAuth;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */] },
            { title: 'User', component: __WEBPACK_IMPORTED_MODULE_6__pages_user_user__["a" /* UserPage */] }
        ];
    }
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.logaup = function () {
        this.afAuth.auth.signOut();
        this.nav.setRoot({ title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */] }.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]) === "function" && _a || Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\romel\Economia\af2-lists\src\app\app.html"*/'<ion-menu [content]="content">\n    <ion-header>\n        <ion-toolbar>\n            <ion-title>Menu</ion-title>\n        </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n        <ion-list>\n            <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n                {{p.title}}\n            </button>\n            <button menuClose ion-item (click)="logaup()">Cerrar Sesión</button>\n        </ion-list>\n    </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\romel\Economia\af2-lists\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _e || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[282]);
//# sourceMappingURL=main.js.map