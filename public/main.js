(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_services/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _notify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notify.service */ "./src/app/_services/notify.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _schema_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../schema/user */ "./src/app/schema/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










// interface User {
//   uid: string;
//   email?: string | null;
//   photoURL?: string;
//   displayName?: string;
// }
var AuthService = /** @class */ (function () {
    function AuthService(afAuth, afs, afStorage, router, notify) {
        this.afAuth = afAuth;
        this.afs = afs;
        this.afStorage = afStorage;
        this.router = router;
        this.notify = notify;
        this.startUserUpdates();
    }
    AuthService.prototype.startUserUpdates = function () {
        var _this = this;
        this.PlatifyingUser = this.afAuth.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (user) {
            if (user) {
                return _this.afs.doc("users/" + user.uid).valueChanges();
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(null);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(function (user) {
            user = user;
            if (user != null) {
                _this.plantifyUser = user;
                localStorage.setItem('currentUser', JSON.stringify(user));
                console.log(user);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(JSON.parse(localStorage.getItem('currentUser')) ? JSON.parse(localStorage.getItem('currentUser')) : new _schema_user__WEBPACK_IMPORTED_MODULE_9__["default"]));
    };
    ////// OAuth Methods /////
    AuthService.prototype.googleLogin = function () {
        var provider = new firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider();
        return this.oAuthLogin(provider);
    };
    AuthService.prototype.facebookLogin = function () {
        var provider = new firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].FacebookAuthProvider();
        return this.oAuthLogin(provider);
    };
    AuthService.prototype.oAuthLogin = function (provider) {
        var _this = this;
        return this.afAuth.auth
            .signInWithPopup(provider)
            .then(function (credential) {
            _this.notify.update('Welcome to Plantify!!!', 'success');
            return credential;
        });
    };
    //// Anonymous Auth ////
    AuthService.prototype.anonymousLogin = function () {
        var _this = this;
        return this.afAuth.auth
            .signInAnonymously()
            .then(function (credential) {
            _this.notify.update('Welcome to Plantify!!!', 'success');
            return credential;
        });
    };
    //// Email/Password Auth ////
    AuthService.prototype.emailSignUp = function (newUser, password) {
        var _this = this;
        return this.afAuth.auth
            .createUserWithEmailAndPassword(newUser.email, password)
            .then(function (credential) {
            console.log(credential);
            newUser.id = credential.user.uid;
            return _this.updateUserData(newUser);
        });
    };
    AuthService.prototype.emailLogin = function (email, password) {
        var _this = this;
        return this.afAuth.auth
            .signInWithEmailAndPassword(email, password)
            .then(function (credentials) {
            // localStorage.setItem('currentUser', JSON.stringify(user.data));
            return credentials;
        })
            .then(function (user) {
            _this.notify.update('Welcome to plantify!!!', 'success');
            return user;
        });
    };
    // Sends email allowing user to reset password
    AuthService.prototype.resetPassword = function (email) {
        var _this = this;
        var fbAuth = firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]();
        return fbAuth
            .sendPasswordResetEmail(email)
            .then(function () { return _this.notify.update('Password update email sent', 'info'); })
            .catch(function (error) { return _this.handleError(error); });
    };
    AuthService.prototype.logOut = function () {
        var _this = this;
        this.afAuth.auth.signOut().then(function () {
            _this.router.navigate(['/login']);
        });
    };
    AuthService.prototype.getCurrentUsser = function () {
        return JSON.parse(localStorage.getItem('currentUser'));
    };
    // user related...
    AuthService.prototype.updateIsDoctor = function (isReallyADoctor) {
        var a = {};
        a.isDoctor = isReallyADoctor;
        return this.afs.doc("users/" + this.afAuth.auth.currentUser.uid).ref.update(a);
    };
    AuthService.prototype.updateProfile = function (user) {
        var a = {};
        a.displayName = user.displayName;
        a.email = user.email;
        console.log("in auth update method");
        return this.afs.doc("users/" + this.afAuth.auth.currentUser.uid).ref.update(JSON.parse(JSON.stringify(a)));
    };
    AuthService.prototype.updateRxTemplate = function (temp, savePersonal) {
        var a = {};
        a['doctor.rxTemplate'] = JSON.parse(JSON.stringify(temp));
        if (savePersonal) {
            a['doctor.personalRxTemplate'] = JSON.parse(JSON.stringify(temp));
        }
        a['doctor.usingClinicRxTemplate'] = savePersonal;
        return this.afs.doc("users/" + this.afAuth.auth.currentUser.uid).ref.update(a);
    };
    AuthService.prototype.uploadDp = function (upload) {
        var _this = this;
        var ref = this.afStorage.ref("userdps/" + this.plantifyUser.id);
        return ref.put(upload.file)
            .then(function (snapshot) {
            console.log("dpupload method then 1");
            return snapshot.ref.getDownloadURL();
        })
            .then(function (downloadUrl) {
            console.log("dpupload method then 2");
            return _this.saveDpSrc(downloadUrl);
        });
    };
    AuthService.prototype.saveDpSrc = function (url) {
        var a = {};
        a.dpSrc = url;
        return this.afs.doc("users/" + this.afAuth.auth.currentUser.uid).ref.update(a)
            .then(function () {
            return url;
        });
    };
    // If error, console log and notify user
    AuthService.prototype.handleError = function (error) {
        console.error(error);
        this.notify.update(error.message, 'error');
    };
    AuthService.prototype.getLoggedInUpdates = function () {
        return this.afAuth.user;
    };
    AuthService.prototype.getCurrentUserUpdates = function () {
        return this.PlatifyingUser;
    };
    AuthService.prototype.updateUserData = function (user) {
        console.log(user);
        var userRef = this.afs.doc("users/" + user.id);
        var temp = JSON.stringify(user);
        temp = JSON.parse(temp);
        if (!temp.createdAt) {
            temp.createdAt = firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"].FieldValue.serverTimestamp();
        }
        else {
            temp.updatedAt = firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"].FieldValue.serverTimestamp();
        }
        return userRef.set(temp);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
            angularfire2_storage__WEBPACK_IMPORTED_MODULE_8__["AngularFireStorage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _notify_service__WEBPACK_IMPORTED_MODULE_5__["NotifyService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/_services/main.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/main.service.ts ***!
  \*******************************************/
/*! exports provided: MainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainService", function() { return MainService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainService = /** @class */ (function () {
    function MainService(db) {
        this.db = db;
    }
    MainService.prototype.getByIdAndCollection = function (collection, id) {
        var _this = this;
        console.log("i was called");
        return new Promise(function (resolve, reject) {
            _this.db.collection(collection).doc(id).ref.get()
                .then(function (snapshot) {
                if (snapshot.exists) {
                    resolve(snapshot.data());
                }
                else {
                    reject('could not find');
                }
            })
                .catch(function (err) {
                reject(err);
            });
        });
    };
    MainService.prototype.getUserCollection = function (collection, userId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.collection(collection).ref.where('authorId', '==', userId).get()
                .then(function (snapshot) {
                if (!snapshot.empty) {
                    var result_1 = [];
                    snapshot.docs.forEach(function (doc) {
                        result_1.push(doc.data());
                    });
                    resolve(result_1);
                }
                else {
                    reject('could not find');
                }
            })
                .catch(function (err) {
                reject(err);
            });
        });
    };
    MainService.prototype.getCollection = function (collection) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.collection(collection).ref.get()
                .then(function (snapshot) {
                if (!snapshot.empty) {
                    var result_2 = [];
                    snapshot.docs.forEach(function (doc) {
                        result_2.push(doc.data());
                    });
                    resolve(result_2);
                }
                else {
                    reject('could not find');
                }
            })
                .catch(function (err) {
                reject(err);
            });
        });
    };
    MainService.prototype.getDocument = function (path) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.doc(path).ref.get()
                .then(function (snapshot) {
                if (snapshot.exists) {
                    resolve(snapshot.data());
                }
                else {
                    reject('could not find');
                }
            })
                .catch(function (err) {
                reject(err);
            });
        });
    };
    MainService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], MainService);
    return MainService;
}());



/***/ }),

/***/ "./src/app/_services/notify.service.ts":
/*!*********************************************!*\
  !*** ./src/app/_services/notify.service.ts ***!
  \*********************************************/
/*! exports provided: NotifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifyService", function() { return NotifyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotifyService = /** @class */ (function () {
    function NotifyService(snackBar) {
        this.snackBar = snackBar;
        this._msgSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.msg = this._msgSource.asObservable();
    }
    NotifyService.prototype.update = function (content, style) {
        var msg = { content: content, style: style };
        this._msgSource.next(msg);
        this.snackBar.open(content, null, {
            duration: 2000,
        });
    };
    NotifyService.prototype.clear = function () {
        this._msgSource.next(null);
    };
    NotifyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], NotifyService);
    return NotifyService;
}());



/***/ }),

/***/ "./src/app/_services/profile.service.ts":
/*!**********************************************!*\
  !*** ./src/app/_services/profile.service.ts ***!
  \**********************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _notify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notify.service */ "./src/app/_services/notify.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileService = /** @class */ (function () {
    function ProfileService(db, notifyService) {
        this.db = db;
        this.notifyService = notifyService;
    }
    ProfileService.prototype.getByEmail = function (email) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.collection('users').ref.where('email', '==', email).get()
                .then(function (snapshot) {
                if (!snapshot.empty) {
                    resolve(snapshot.docs.pop().data());
                }
                else {
                    reject('could not find');
                }
            })
                .catch(function (err) {
                reject(err);
            });
        });
    };
    ProfileService.prototype.getById = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.collection('users').doc(id).ref.get()
                .then(function (snapshot) {
                if (snapshot.exists) {
                    resolve(snapshot.data());
                }
                else {
                    reject('could not find');
                }
            })
                .catch(function (err) {
                reject(err);
            });
        });
    };
    ProfileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"],
            _notify_service__WEBPACK_IMPORTED_MODULE_2__["NotifyService"]])
    ], ProfileService);
    return ProfileService;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/


/***/ }),

/***/ "./src/app/_services/upload.ts":
/*!*************************************!*\
  !*** ./src/app/_services/upload.ts ***!
  \*************************************/
/*! exports provided: Upload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Upload", function() { return Upload; });
var Upload = /** @class */ (function () {
    function Upload(file) {
        this.createdAt = new Date();
        this.file = file;
    }
    return Upload;
}());



/***/ }),

/***/ "./src/app/a-main/a-main.component.css":
/*!*********************************************!*\
  !*** ./src/app/a-main/a-main.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title{\r\nfont-size: 4ch;\r\nfont-family: Verdana, Geneva, Tahoma, sans-serif;\r\npadding: 15px;\r\nmargin: 20% 20% ;\r\nbox-sizing: border-box;\r\n-ms-grid-row-align: center;\r\n    align-self: center;\r\n-ms-grid-row-align: auto;\r\n    align-self: auto;\r\nalign-content: center\r\n}\r\n.example-card {\r\n    max-width: 400px;\r\n    -ms-grid-row-align: center;\r\n        align-self: center;\r\n    margin: 0% 30%;\r\n  }\r\n.example-header-image {\r\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n    background-size: cover;\r\n  }\r\nlist-item-wrapper{\r\n    padding: 10px 10px;\r\n  }\r\n@media (max-width: 600px) {\r\n    .module {\r\n      font-size: 10px;\r\n      max-height: 75px; }\r\n  }\r\n@media (max-width: 1024px) {\r\n    .grid {\r\n      margin: 0;\r\n    }\r\n    .module {\r\n      min-width: 60px;\r\n    }\r\n  }"

/***/ }),

/***/ "./src/app/a-main/a-main.component.html":
/*!**********************************************!*\
  !*** ./src/app/a-main/a-main.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-header></app-header> -->\r\n<div class=\"row\">\r\n\r\n  <div class=\"col-for-sides\" ></div>\r\n\r\n  <div class=\"col-for-page padding-responsive\">\r\n\r\n    <div *ngIf=\"isLoggedIn\">WELCOME</div>\r\n    \r\n    <div *ngIf=\"!isLoggedIn\">not logged in</div>\r\n\r\n\r\n    <div class=\"list-item-wrapper\" *ngFor=\"let article of articlesList\">\r\n      <mat-card class=\"task-card\">\r\n        <mat-card-header>\r\n          <div mat-card-avatar>\r\n\r\n            <!-- <cl-image public-id=\"{{task.dpImgUrl}}\">\r\n              <cl-transformation width=\"40\" height=\"40\" gravity=\"face\" radius=\"100\" crop=\"thumb\">\r\n              </cl-transformation>\r\n\r\n\r\n\r\n            </cl-image> -->\r\n\r\n\r\n          </div>\r\n          <mat-card-title><h1><markdown [data]=\"article.title \"></markdown></h1></mat-card-title>\r\n                        <mat-card-subtitle>      <markdown [data]=\"article.author\"></markdown>\r\n                               </mat-card-subtitle>\r\n        </mat-card-header>\r\n        <mat-card-content>\r\n        \r\n            <markdown   [data]=\"article.description\" ></markdown>\r\n           \r\n         <mat-tab-group headerPosition=\"above\">\r\n  <mat-tab ><ng-template mat-tab-label><i class=\"material-icons\">\r\n    add_comment\r\n</i> </ng-template> New Solutions\r\n\r\n <div class=\"list-item-wrapper\" *ngFor=\"let comment of article.comments \">\r\n            <markdown [data] =\"comment\">\r\n            \r\n            \r\n            </markdown>\r\n\r\n            </div>\r\n            \r\n\r\n </mat-tab>\r\n\r\n\r\n<mat-tab ><ng-template mat-tab-label><i class=\"material-icons\">\r\n    check\r\n</i> </ng-template> Existing Solutions </mat-tab>\r\n\r\n\r\n\r\n</mat-tab-group>\r\n        </mat-card-content>\r\n         <mat-card-actions>\r\n    <button mat-button (click)=\"liking(article.id)\" >LIKE</button>\r\n    <button mat-button>SHARE</button>\r\n  </mat-card-actions>\r\n      </mat-card>\r\n\r\n\r\n    </div>\r\n\r\n\r\n    <mat-paginator [length]=\"noOfAssignments\"\r\n              [pageSize]=\"pageSize\"\r\n              [pageSizeOptions]=\"pageSizeOptions\"\r\n              >\r\n              <!-- (page)=\"pageEvent = $event\" -->\r\n    </mat-paginator>\r\n\r\n\r\n\r\n\r\n\r\n  </div>\r\n\r\n \r\n\r\n\r\n\r\n\r\n</div>\r\n\r\n\r\n \r\n  \r\n   "

/***/ }),

/***/ "./src/app/a-main/a-main.component.ts":
/*!********************************************!*\
  !*** ./src/app/a-main/a-main.component.ts ***!
  \********************************************/
/*! exports provided: AMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AMainComponent", function() { return AMainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/main.service */ "./src/app/_services/main.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _schema_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../schema/user */ "./src/app/schema/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/profile.service */ "./src/app/_services/profile.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AMainComponent = /** @class */ (function () {
    function AMainComponent(mainService, authService, db, router, route, profileService) {
        this.mainService = mainService;
        this.authService = authService;
        this.db = db;
        this.router = router;
        this.route = route;
        this.profileService = profileService;
        this.tasks = [];
        this.pageSizeOptions = [20];
        this.loading = true;
        this.isLoggedIn = false;
        this.user = new _schema_user__WEBPACK_IMPORTED_MODULE_4__["default"];
    }
    AMainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mainService.getCollection("articles")
            .then(function (list) {
            _this.articlesList = list;
            list.forEach(function (list) {
                console.log('Found subcollection with id:', list.id);
            });
        })
            .then(function (list) {
            //this.articlesList = list;
            console.log(_this.articlesList);
            return "got documents from database";
        })
            .then(function (temp) {
            console.log("this is temp" + temp);
        })
            .catch(function (err) {
            console.log(err);
        });
        this.authService.getLoggedInUpdates().subscribe(function (user) {
            if (user == null || user == undefined) {
                _this.isLoggedIn = false;
            }
            else {
                _this.isLoggedIn = true;
            }
        });
    };
    AMainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-a-main',
            template: __webpack_require__(/*! ./a-main.component.html */ "./src/app/a-main/a-main.component.html"),
            styles: [__webpack_require__(/*! ./a-main.component.css */ "./src/app/a-main/a-main.component.css")]
        }),
        __metadata("design:paramtypes", [_services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"]])
    ], AMainComponent);
    return AMainComponent;
}());



/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- <td-text-editor [value]=\"Some Text\" [options]=\"options\" #textEditor></td-text-editor> -->\n\n\n<p>\n  about \n</p>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.options = {
            lineWrapping: true,
            toolbar: false,
        };
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _a_main_a_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./a-main/a-main.component */ "./src/app/a-main/a-main.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/signin/signin.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _article_new_article_new_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./article-new/article-new.component */ "./src/app/article-new/article-new.component.ts");
/* harmony import */ var _articles_my_articles_my_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./articles-my/articles-my.component */ "./src/app/articles-my/articles-my.component.ts");
/* harmony import */ var _my_map_my_map_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./my-map/my-map.component */ "./src/app/my-map/my-map.component.ts");
/* harmony import */ var _markerdetail_markerdetail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./markerdetail/markerdetail.component */ "./src/app/markerdetail/markerdetail.component.ts");
/*
* This file decides the navigation of the app.
*/
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { ArifMainComponent } from './arif-main/arif-main.component';








var routes = [
    // { path: '', component: ArifMainComponent },
    { path: '', component: _a_main_a_main_component__WEBPACK_IMPORTED_MODULE_2__["AMainComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] },
    { path: 'signin', component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_4__["SigninComponent"] },
    { path: 'articleNew', component: _article_new_article_new_component__WEBPACK_IMPORTED_MODULE_6__["ArticleNewComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"] },
    { path: 'myarticles', component: _articles_my_articles_my_component__WEBPACK_IMPORTED_MODULE_7__["ArticlesMyComponent"] },
    { path: 'mymap', component: _my_map_my_map_component__WEBPACK_IMPORTED_MODULE_8__["MyMapComponent"] },
    { path: 'markerdetail', component: _markerdetail_markerdetail_component__WEBPACK_IMPORTED_MODULE_9__["MarkerdetailComponent"] },
    { path: 'markerdetail/:id', component: _markerdetail_markerdetail_component__WEBPACK_IMPORTED_MODULE_9__["MarkerdetailComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n.example-is-mobile .example-toolbar {\r\n  position: fixed;\r\n  /* Make sure the toolbar will stay on top of the content as it scrolls past. */\r\n  z-index: 2;\r\n}\r\n\r\n.basic-container {\r\n  padding: 30px;\r\n}\r\n\r\n.toolbar{\r\n   overflow: hidden;\r\n   padding: 20px 10px;\r\n   text-decoration: none\r\n }\r\n\r\n.toolbar a{\r\n  padding: 12px;\r\n  text-decoration: none;\r\n }\r\n\r\n.toolbar a.active {\r\n  background-color: dodgerblue;\r\n  color: white;\r\n}\r\n\r\n#snav{\r\n  overflow: hidden;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\r\n<head>\r\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n</head>\r\n\r\n<body *ngIf=\"!loading\">\r\n\r\n\r\n  <!--this is toolbar-->\r\n\t<mat-toolbar class=\"toolbar\" color=\"primary\"   (window:resize)=\"refresh()\">\r\n  \r\n    <span class=\"header-padding\"></span>\r\n    <a  *ngIf=\"isMobile\"  (click)=\"snav.toggle()\"><mat-icon>menu</mat-icon></a>\r\n    <a routerLink=\"/\">Home</a>\r\n    <!--<a  routerLink=\"/signin\" *ngIf=\"!loggedIn\">Sign In</a>-->\r\n    \r\n    \r\n    <a   *ngIf=\"loggedIn&&!isMobile\"   routerLink=\"/myarticles\">My Publications</a>\r\n    <a     routerLink=\"/about\"  >About</a>\r\n    <a    routerLink=\"/mymap\"> MY MAP</a>\r\n    <span style=\"flex: 1 0 auto;\"></span>\r\n   <a routerLink=\"/profile\" *ngIf=\"loggedIn\"><i class=\"fas fa-user \"></i>{{ \" \"+username}} </a>\r\n   \r\n    <a [matMenuTriggerFor]=\"menu\"  ><i class=\"fas fa-cog\"></i></a>\r\n<mat-menu #menu=\"matMenu\"  yPosition=\"below\" [overlapTrigger]=\"false\">\r\n  \r\n  <button  mat-menu-item *ngIf=\"loggedIn\"  (click)=\"logout()\"  >Logout</button>\r\n   <button  mat-menu-item   routerLink=\"/signin\" *ngIf=\"notloggedIn\" >Sign In</button>\r\n</mat-menu>\r\n   \r\n\r\n    <span class=\"header-padding\"></span>\r\n</mat-toolbar>\r\n\r\n\r\n\t<mat-sidenav-container class=\"nav-container\" autosize>\r\n  \t<mat-sidenav #snav [(mode)]=\"sideNavMode\"  [(opened)]=\"sideNavOpened\" fullscreen > \r\n\t\t<app-side-bar></app-side-bar>\t\r\n\t</mat-sidenav>\r\n\t\t<mat-sidenav-content >\r\n\t\t\t\t<router-outlet ></router-outlet>\r\n                \r\n\t\t</mat-sidenav-content>\r\n\t</mat-sidenav-container>\r\n\r\n</body>\r\n\r\n\r\n</html>\r\n\r\n\r\n<!--\r\nCopyright 2017-2018 Google Inc. All Rights Reserved.\r\nUse of this source code is governed by an MIT-style license that\r\ncan be found in the LICENSE file at http://angular.io/license\r\n-->\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _schema_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./schema/user */ "./src/app/schema/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(router, snackBar, dialog, authService) {
        this.router = router;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.authService = authService;
        this.title = 'Plantify.com';
        this.user = new _schema_user__WEBPACK_IMPORTED_MODULE_4__["default"];
        this.username = '';
        this.isDoctor = false;
        this.loggedIn = false;
        this.notloggedIn = true;
        this.loading = false;
        this.sideNavOpened = false;
        this.sideNavMode = 'over';
        this.isMobile = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
        this.resubscribe();
        this.authService.getLoggedInUpdates().subscribe(function (authUser) {
            _this.resubscribe();
            if (authUser != null) {
                _this.loggedIn = true;
                _this.notloggedIn = false;
                _this.username = _this.user.displayName;
            }
            else {
                _this.sideNavOpened = false;
            }
        });
        this.refresh();
        this.loading = false;
    };
    AppComponent.prototype.refresh = function () {
        var w = window, d = document, e = d.documentElement, g = d.getElementsByTagName('body')[0], x = w.innerWidth || e.clientWidth || g.clientWidth, y = w.innerHeight || e.clientHeight || g.clientHeight;
        console.log(x);
        if (x > 600) {
            this.isMobile = false;
            this.sideNavOpened = false;
            this.sideNavMode = 'closed';
        }
        else {
            this.sideNavMode = 'over';
            this.sideNavOpened = false;
            this.isMobile = true;
        }
    };
    AppComponent.prototype.resubscribe = function () {
        var _this = this;
        this.loading = true;
        console.log('resubscribing');
        this.authService.getCurrentUserUpdates().subscribe(function (user) {
            if (!user) {
                return;
            }
            _this.user = user;
            console.log(user);
            _this.loading = false;
        });
    };
    AppComponent.prototype.logout = function () {
        localStorage.clear();
        this.userId = 0;
        this.loggedIn = false;
        this.notloggedIn = true;
        this.username = '';
        this.authService.logOut();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _covalent_text_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @covalent/text-editor */ "./node_modules/@covalent/text-editor/esm5/covalent-text-editor.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/fesm5/ngx-markdown.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_services/main.service */ "./src/app/_services/main.service.ts");
/* harmony import */ var _node_modules_angularfire2_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../node_modules/angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _node_modules_angularfire2_firestore__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_node_modules_angularfire2_firestore__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _a_main_a_main_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./a-main/a-main.component */ "./src/app/a-main/a-main.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./side-bar/side-bar.component */ "./src/app/side-bar/side-bar.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _article_new_article_new_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./article-new/article-new.component */ "./src/app/article-new/article-new.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/signin/signin.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_notify_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./_services/notify.service */ "./src/app/_services/notify.service.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! angularx-qrcode */ "./node_modules/angularx-qrcode/dist/index.js");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/ngx-image-cropper.es5.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _articles_my_articles_my_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./articles-my/articles-my.component */ "./src/app/articles-my/articles-my.component.ts");
/* harmony import */ var _my_map_my_map_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./my-map/my-map.component */ "./src/app/my-map/my-map.component.ts");
/* harmony import */ var _markerdetail_markerdetail_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./markerdetail/markerdetail.component */ "./src/app/markerdetail/markerdetail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//import { ServiceWorkerModule } from '@angular/service-worker';



















//import { AuthGuard } from "./_services/auth.gaurd";















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _a_main_a_main_component__WEBPACK_IMPORTED_MODULE_13__["AMainComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_14__["AboutComponent"],
                _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_15__["SideBarComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"],
                _article_new_article_new_component__WEBPACK_IMPORTED_MODULE_17__["ArticleNewComponent"],
                _signin_signin_component__WEBPACK_IMPORTED_MODULE_18__["SigninComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_19__["ProfileComponent"],
                _articles_my_articles_my_component__WEBPACK_IMPORTED_MODULE_31__["ArticlesMyComponent"],
                _my_map_my_map_component__WEBPACK_IMPORTED_MODULE_32__["MyMapComponent"],
                _markerdetail_markerdetail_component__WEBPACK_IMPORTED_MODULE_33__["MarkerdetailComponent"],
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_5__["DemoMaterialModule"],
                ngx_image_cropper__WEBPACK_IMPORTED_MODULE_29__["ImageCropperModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_27__["RouterModule"].forRoot([]),
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_26__["AngularFireAuthModule"],
                _node_modules_angularfire2_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestoreModule"].enablePersistence(),
                ngx_markdown__WEBPACK_IMPORTED_MODULE_8__["MarkdownModule"].forRoot(),
                _covalent_text_editor__WEBPACK_IMPORTED_MODULE_6__["CovalentTextEditorModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_22__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebase),
                angularfire2__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebase, 'my-app-name'),
                _node_modules_angularfire2_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestoreModule"].enablePersistence(),
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_26__["AngularFireAuthModule"],
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_12__["AngularFireStorageModule"],
                angularx_qrcode__WEBPACK_IMPORTED_MODULE_28__["QRCodeModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_30__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyBt4GWgutgc8URi0kHpyRT_S720WGONf8s'
                }),
            ],
            providers: [_services_main_service__WEBPACK_IMPORTED_MODULE_10__["MainService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_23__["AuthService"], _services_notify_service__WEBPACK_IMPORTED_MODULE_24__["NotifyService"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_26__["AngularFireAuthModule"], _node_modules_angularfire2_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestore"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/article-new/article-new.component.css":
/*!*******************************************************!*\
  !*** ./src/app/article-new/article-new.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* @import '~dropzone/dist/min/dropzone.min.css'; */\r\n.form {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n.form > * {\r\n    width: 100%;\r\n  }\r\n.textarea-description{\r\n    height: 100px;\r\n  }\r\n.demo-chip-list {\r\n    width: 100%;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/article-new/article-new.component.html":
/*!********************************************************!*\
  !*** ./src/app/article-new/article-new.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"row\">\r\n<div *ngIf=\"!isLoggedIn\"> Please signin to write article <a routerLink=\"../signin\" *ngIf=\"!isLoggedIn\">Sign In</a></div>\r\n<div *ngIf=\"isLoggedIn\">\r\n  <div class=\"col-for-sides\" *ngIf=\"isLoggedIn\"></div>\r\n\r\n  <div class=\"col-for-page padding-responsive\">\r\n\r\n\r\n    <div class=\"form\">\r\n\r\n        <h2>Post a article.</h2>\r\n\r\n          <mat-form-field>\r\n            <input matInput  [(ngModel)]=\"title\"  placeholder=\"Title\">\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <input matInput  [(ngModel)]=\"author\"  placeholder=\"Author\">\r\n          </mat-form-field>\r\n\r\n\r\n\r\n\r\n<!--\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"Select\">\r\n              <mat-option value=\"option\">Option</mat-option>\r\n            </mat-select>\r\n          </mat-form-field> -->\r\n\r\n          <form>\r\n            <mat-form-field class=\"demo-chip-list\">\r\n              <mat-chip-list #chipList>\r\n                  <mat-chip\r\n                  *ngFor=\"let tag of tags\"\r\n                  [selectable]=\"selectable\"\r\n                  [removable]=\"removable\"\r\n                  (removed)=\"remove(tag)\">\r\n                  {{tag}}\r\n                  <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n                </mat-chip>\r\n                <input\r\n                  placeholder=\"Tags...\"\r\n                  #tagInput\r\n                  [formControl]=\"tagCtrl\"\r\n                  [matAutocomplete]=\"auto\"\r\n                  [matChipInputFor]=\"chipList\"\r\n                  [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n                  [matChipInputAddOnBlur]=\"addOnBlur\"\r\n                  (matChipInputTokenEnd)=\"add($event)\"\r\n                />\r\n              </mat-chip-list>\r\n              <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\r\n                <mat-option *ngFor=\"let tag of filteredTags | async\" [value]=\"tag\">\r\n                  {{ tag }}\r\n                </mat-option>\r\n              </mat-autocomplete>\r\n            </mat-form-field>\r\n          </form>\r\n\r\n          <td-text-editor id=\"editor\" [(ngModel)]=\"description\"  [options]=\"simplemdeoptions\"></td-text-editor>\r\n\r\n\r\n\r\n          <!-- <mat-form-field class=\"form-element\" appearance=\"outline\">\r\n            <mat-label>External Attachment</mat-label>\r\n            <input matInput [(ngModel)]=\"externalAttachment\" type=\"text\" placeholder=\"Paste link\" >\r\n            <mat-icon matSuffix>link</mat-icon>\r\n            <mat-hint>You may usse Google Drive, Dropbox etc.<a href=\"https://files.fm/\" target=\"blank\">File.fm</a> is nice tool.\r\n              <br>Use <a href=\"https://stackblitz.com\" target=\"blank\">Stak blitz</a> and <a href=\"https://codepen.io\" target=\"blank\">Code pen</a> etc for code purposes\r\n\r\n\r\n            </mat-hint>\r\n\r\n          </mat-form-field> -->\r\n          <br>\r\n\r\n            <div class=\"button-row\">\r\n              <button class=\"centered-horizontal\" mat-raised-button color=\"accent\" *ngIf=\"!loading\" (click)=\"posting()\" >Submit</button>\r\n              <mat-spinner class=\"centered-horizontal\"   diameter=\"30\"  *ngIf=\"loading\"></mat-spinner>\r\n            </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n  </div>\r\n \r\n\r\n\r\n\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/article-new/article-new.component.ts":
/*!******************************************************!*\
  !*** ./src/app/article-new/article-new.component.ts ***!
  \******************************************************/
/*! exports provided: ArticleNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleNewComponent", function() { return ArticleNewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/main.service */ "./src/app/_services/main.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/profile.service */ "./src/app/_services/profile.service.ts");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _schema_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../schema/user */ "./src/app/schema/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ArticleNewComponent = /** @class */ (function () {
    function ArticleNewComponent(mainService, db, authService, router, route, profileService) {
        this.mainService = mainService;
        this.db = db;
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.profileService = profileService;
        this.title = "";
        this.article_data = "";
        this.description = "";
        this.user = new _schema_user__WEBPACK_IMPORTED_MODULE_8__["default"];
        this.author = "";
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = false;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["COMMA"]];
        this.tagCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.tags = [];
        this.allTags = [
            'computers',
            'writing',
            'accounting',
            'angular',
            'android-developement',
            'ios-developement0',
            'maths',
            'physics',
            'digital-logic-design',
            'health',
            'medical-sciences'
        ];
        this.simplemdeoptions = {
            // autofocus: true,
            autoDownloadFontAwesome: true,
            autosave: {
                enabled: true,
                uniqueId: "MyUniqueID",
                delay: 1000,
            },
            // element: document.getElementById("MyID"),
            forceSync: true,
            // hideIcons: ["guide", "heading"],
            // indentWithTabs: false,
            // initialValue: "Hello world!",
            // lineWrapping: false,
            placeholder: "Description here...",
            promptURLs: true,
            // renderingConfig: {
            // 	singleLineBreaks: false,
            // 	codeSyntaxHighlighting: true,
            // },
            shortcuts: {
                drawTable: "Cmd-Alt-T"
            },
            showIcons: ["code"],
            // spellChecker: true,
            styleSelectedText: false,
            tabSize: 4,
        };
    }
    ArticleNewComponent.prototype.add = function (event) {
        var input = event.input;
        var value = event.value;
        // Add our tag
        if ((value || '').trim()) {
            this.tags.push(value.trim());
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
        this.tagCtrl.setValue(null);
    };
    ArticleNewComponent.prototype.remove = function (tag) {
        var index = this.tags.indexOf(tag);
        if (index >= 0) {
            this.tags.splice(index, 1);
        }
    };
    ArticleNewComponent.prototype.filter = function (name) {
        return this.allTags.filter(function (tag) {
            return tag.toLowerCase().indexOf(name.toLowerCase()) === 0;
        });
    };
    ArticleNewComponent.prototype.selected = function (event) {
        this.tags.push(event.option.viewValue);
        this.tagInput.nativeElement.value = '';
        this.tagCtrl.setValue(null);
    };
    ArticleNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getLoggedInUpdates().subscribe(function (user) {
            if (user == null || user == undefined) {
                _this.isLoggedIn = false;
            }
            else {
                _this.isLoggedIn = true;
            }
        });
        this.userId = this.route.snapshot.paramMap.get('id');
        this.authService.getCurrentUserUpdates().subscribe(function (user) {
            if (!user) {
                return;
            }
            if (user.id === _this.userId || !_this.userId) {
                _this.me = true;
            }
            else {
                _this.getUser();
                _this.me = false;
            }
            _this.user = user;
        });
    };
    ArticleNewComponent.prototype.getUser = function () {
        var _this = this;
        this.loading = true;
        this.profileService.getById(this.userId)
            .then(function (user) {
            _this.user = user;
            //  console.log(user);
            _this.loading = false;
        })
            .catch(function (err) {
            _this.loading = false;
        });
    };
    ArticleNewComponent.prototype.posting = function () {
        var _this = this;
        var addDoc = this.db.collection('articles').add({
            title: this.title,
            description: this.description,
            tags: this.tags,
            author: this.user.displayName,
            authorId: this.user.id
        }).then(function (ref) {
            console.log('Added document with ID: ', ref.id);
            var addid = _this.db.collection('articles').doc(ref.id).update({
                id: ref.id
            });
            console.log(' the first tag is ', _this.tags[0]);
            console.log('the id of author is', _this.user.id);
            _this.router.navigateByUrl('/');
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tagInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ArticleNewComponent.prototype, "tagInput", void 0);
    ArticleNewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-article-new',
            template: __webpack_require__(/*! ./article-new.component.html */ "./src/app/article-new/article-new.component.html"),
            styles: [__webpack_require__(/*! ./article-new.component.css */ "./src/app/article-new/article-new.component.css")]
        }),
        __metadata("design:paramtypes", [_services_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"],
            angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"]])
    ], ArticleNewComponent);
    return ArticleNewComponent;
}());



/***/ }),

/***/ "./src/app/articles-my/articles-my.component.css":
/*!*******************************************************!*\
  !*** ./src/app/articles-my/articles-my.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/articles-my/articles-my.component.html":
/*!********************************************************!*\
  !*** ./src/app/articles-my/articles-my.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n\n  <div class=\"col-for-sides\" ></div>\n\n  <div class=\"col-for-page padding-responsive\">\n\n    <div *ngIf=\"isLoggedIn\">WELCOME</div>\n    \n    <div *ngIf=\"!isLoggedIn\">not logged in</div>\n\n\n    <div class=\"list-item-wrapper\" *ngFor=\"let article of articlesList\">\n      <mat-card class=\"task-card\">\n        <mat-card-header>\n          <div mat-card-avatar>\n\n            <!-- <cl-image public-id=\"{{task.dpImgUrl}}\">\n              <cl-transformation width=\"40\" height=\"40\" gravity=\"face\" radius=\"100\" crop=\"thumb\">\n              </cl-transformation>\n\n\n\n            </cl-image> -->\n\n\n          </div>\n          <mat-card-title><h1><markdown [data]=\"article.title \"></markdown></h1> by<markdown [data]=\"article.author\"></markdown></mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n            <markdown   [data]=\"article.description\" ></markdown>\n          \n\n        </mat-card-content>\n      </mat-card>\n\n\n    </div>\n\n\n    <mat-paginator [length]=\"noOfAssignments\"\n              [pageSize]=\"pageSize\"\n              [pageSizeOptions]=\"pageSizeOptions\"\n              >\n              <!-- (page)=\"pageEvent = $event\" -->\n    </mat-paginator>\n\n\n\n\n\n  </div>\n\n \n\n\n\n\n</div>\n\n\n \n  \n   "

/***/ }),

/***/ "./src/app/articles-my/articles-my.component.ts":
/*!******************************************************!*\
  !*** ./src/app/articles-my/articles-my.component.ts ***!
  \******************************************************/
/*! exports provided: ArticlesMyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesMyComponent", function() { return ArticlesMyComponent; });
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_services/main.service */ "./src/app/_services/main.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_notify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/notify.service */ "./src/app/_services/notify.service.ts");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/profile.service */ "./src/app/_services/profile.service.ts");
/* harmony import */ var _schema_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../schema/user */ "./src/app/schema/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ArticlesMyComponent = /** @class */ (function () {
    function ArticlesMyComponent(authService, route, profileService, notify, mainService) {
        this.authService = authService;
        this.route = route;
        this.profileService = profileService;
        this.notify = notify;
        this.mainService = mainService;
        this.loading = false;
        this.user = new _schema_user__WEBPACK_IMPORTED_MODULE_6__["default"];
        this.tasks = [];
        this.pageSizeOptions = [20];
        this.isLoggedIn = false;
    }
    ArticlesMyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = this.route.snapshot.paramMap.get('id');
        this.authService.getCurrentUserUpdates().subscribe(function (user) {
            if (!user) {
                return;
            }
            if (user.id === _this.userId || !_this.userId) {
                _this.me = true;
            }
            else {
                _this.getUser();
                _this.me = false;
            }
            _this.user = user;
        });
        this.mainService.getUserCollection("articles", this.userId)
            .then(function (list) {
            _this.articlesList = list;
            //  console.log(this.articlesList);
            return "got documents from database";
        })
            .then(function (temp) {
            console.log(temp);
        })
            .catch(function (err) {
            console.log(err);
        });
        this.authService.getLoggedInUpdates().subscribe(function (user) {
            if (user == null || user == undefined) {
                _this.isLoggedIn = false;
            }
            else {
                _this.isLoggedIn = true;
            }
        });
    };
    ArticlesMyComponent.prototype.getUser = function () {
        var _this = this;
        this.loading = true;
        this.profileService.getById(this.userId)
            .then(function (user) {
            _this.user = user;
            //  console.log(user);
            _this.loading = false;
        })
            .catch(function (err) {
            _this.loading = false;
        });
    };
    ArticlesMyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-articles-my',
            template: __webpack_require__(/*! ./articles-my.component.html */ "./src/app/articles-my/articles-my.component.html"),
            styles: [__webpack_require__(/*! ./articles-my.component.css */ "./src/app/articles-my/articles-my.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"],
            _services_notify_service__WEBPACK_IMPORTED_MODULE_4__["NotifyService"],
            _services_main_service__WEBPACK_IMPORTED_MODULE_0__["MainService"]])
    ], ArticlesMyComponent);
    return ArticlesMyComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Style the header with a grey background and some padding */\r\n\r\n\r\n\r\n\r\n.topnav {\r\n  overflow: hidden;\r\n  background-color: black;\r\n  color: white;\r\n  margin-bottom: 100px;\r\n}\r\n\r\n\r\n\r\n\r\n.topnav a {\r\n  float: left;\r\n  display: block;\r\n  color: white;\r\n  text-align: center;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n  font-size: 17px;\r\n}\r\n\r\n\r\n\r\n\r\n.topnav a:hover {\r\n  background-color: #ddd;\r\n  color: black;\r\n}\r\n\r\n\r\n\r\n\r\n.topnav a.active {\r\n  background-color: rgb(119, 228, 177);\r\n  color: white;\r\n}\r\n\r\n\r\n\r\n\r\n.topnav .search-container {\r\n  float: right;\r\n}\r\n\r\n\r\n\r\n\r\n.topnav input[type=text] {\r\n  padding: 6px;\r\n  margin-top: 8px;\r\n  font-size: 17px;\r\n  border: none;\r\n}\r\n\r\n\r\n\r\n\r\n.topnav .search-container button {\r\n  float: right;\r\n  padding: 6px 10px;\r\n  margin-top: 8px;\r\n  margin-right: 16px;\r\n  background: #ddd;\r\n  font-size: 17px;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n\r\n\r\n.topnav .search-container button:hover {\r\n  background: #ccc;\r\n}\r\n\r\n\r\n\r\n\r\n@media screen and (max-width: 600px) {\r\n  .topnav .search-container {\r\n    float: none;\r\n  }\r\n  .topnav a, .topnav input[type=text], .topnav .search-container button {\r\n    float: none;\r\n    display: block;\r\n    text-align: left;\r\n    width: 100%;\r\n    margin: 0;\r\n    padding: 14px;\r\n  }\r\n  .topnav input[type=text] {\r\n    border: 1px solid #ccc;  \r\n  }\r\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head><!-- Global site tag (gtag.js) - Google Analytics -->\r\n  <script async src=\"https://www.googletagmanager.com/gtag/js?id=UA-127453011-1\"></script>\r\n  <script>\r\n    window.dataLayer = window.dataLayer || [];\r\n    function gtag(){dataLayer.push(arguments);}\r\n    gtag('js', new Date());\r\n  \r\n    gtag('config', 'UA-127453011-1');\r\n  </script>\r\n  </head>\r\n<!-- <div class=\"topnav\">\r\n  <a class=\"active\" routerLink=\"\">Home</a>\r\n  \r\n  \r\n  \r\n  <div class=\"search-container\">\r\n    <form action=\"/action_page.php\">\r\n      <input type=\"text\" placeholder=\"Search..\" name=\"search\">\r\n      <button ><i class=\"fa fa-search\"></i></button>\r\n    </form>\r\n  </div>\r\n</div>  -->\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/main.service */ "./src/app/_services/main.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(mainService, authService) {
        this.mainService = mainService;
        this.authService = authService;
        this.isLoggedIn = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getLoggedInUpdates().subscribe(function (user) {
            if (user == null || user == undefined) {
                _this.isLoggedIn = false;
            }
            else {
                _this.isLoggedIn = true;
            }
        });
    };
    HeaderComponent.prototype.logout = function () {
        this.authService.logOut();
    };
    HeaderComponent.prototype.refresh = function () {
        var w = window, d = document, e = d.documentElement, g = d.getElementsByTagName('body')[0], x = w.innerWidth || e.clientWidth || g.clientWidth, y = w.innerHeight || e.clientHeight || g.clientHeight;
        console.log(x);
        if (x > 600) {
            this.isMobile = false;
            this.sideNavOpened = false;
            this.sideNavMode = 'over';
        }
        else {
            this.sideNavMode = 'over';
            this.sideNavOpened = false;
            this.isMobile = true;
        }
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/markerdetail/markerdetail.component.css":
/*!*********************************************************!*\
  !*** ./src/app/markerdetail/markerdetail.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image-container{\r\n\r\n    padding: 10px\r\n}"

/***/ }),

/***/ "./src/app/markerdetail/markerdetail.component.html":
/*!**********************************************************!*\
  !*** ./src/app/markerdetail/markerdetail.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n<div class=\"col-for-sides\" >\ns simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\n</div>\n<div class=\"col-for-page padding-responsive\">\n\n  Here we show details of{{markerid}}\n  <div class= \"image-container\"> \n  <img [src]=\"'https://firebasestorage.googleapis.com/v0/b/forest-data-representation.appspot.com/o/forest-yearly-pictures%2Fabbottabad%2F0.png?alt=media&token=89a1a654-7d2e-4a1a-a186-300320b4b842'\">\n</div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/markerdetail/markerdetail.component.ts":
/*!********************************************************!*\
  !*** ./src/app/markerdetail/markerdetail.component.ts ***!
  \********************************************************/
/*! exports provided: MarkerdetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkerdetailComponent", function() { return MarkerdetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/main.service */ "./src/app/_services/main.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MarkerdetailComponent = /** @class */ (function () {
    function MarkerdetailComponent(mainService, db, route) {
        this.mainService = mainService;
        this.db = db;
        this.route = route;
    }
    MarkerdetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.markerid = this.route.snapshot.paramMap.get('id');
        console.log(" got label from other page ", this.markerid);
        this.mainService.getByIdAndCollection('marker', 'zA7WAB5WXymmjWWCGxk0')
            .then(function (list) {
            _this.makerdetail = list;
            console.log(_this.makerdetail);
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    MarkerdetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-markerdetail',
            template: __webpack_require__(/*! ./markerdetail.component.html */ "./src/app/markerdetail/markerdetail.component.html"),
            styles: [__webpack_require__(/*! ./markerdetail.component.css */ "./src/app/markerdetail/markerdetail.component.css")]
        }),
        __metadata("design:paramtypes", [_services_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"],
            angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], MarkerdetailComponent);
    return MarkerdetailComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: DemoMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoMaterialModule", function() { return DemoMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DemoMaterialModule = /** @class */ (function () {
    function DemoMaterialModule() {
    }
    DemoMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            ]
        })
    ], DemoMaterialModule);
    return DemoMaterialModule;
}());



/***/ }),

/***/ "./src/app/my-map/my-map.component.css":
/*!*********************************************!*\
  !*** ./src/app/my-map/my-map.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n    height: 400px;\r\n    width: 100%;  /* This is really important*/\r\n  }"

/***/ }),

/***/ "./src/app/my-map/my-map.component.html":
/*!**********************************************!*\
  !*** ./src/app/my-map/my-map.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<mat-sidenav-container class=\"example-container\" >\r\n  <mat-sidenav #mapsidenav  >\r\n    <p><button mat-button (click)=\"mapsidenav.toggle()\">Toggle</button></p>\r\n    <h3>{{sidenavdata.label}} </h3>\r\n    \r\n     <a mat-button routerLink=\"/markerdetail/{{sidenavdata.label}}\" >\r\n                        <i class=\"far fa-tree\"></i> &nbsp;&nbsp; Show Details</a>\r\n  \r\n    \r\n  </mat-sidenav>\r\n\r\n  <mat-sidenav-content>\r\n    <agm-map \r\n\r\n  [latitude]=\"lat\"\r\n  [longitude]=\"lng\"\r\n  [zoom]=\"zoom\"\r\n  [disableDefaultUI]=\"false\"\r\n  [zoomControl]=\"true\"\r\n  (mapClick)=\"mapClicked($event)\">\r\n<p>pARA</p>\r\n  <agm-marker \r\n      *ngFor=\"let m of markers; let i = index\"\r\n      (markerClick)=\"mapsidenav.toggle();clickedMarker(m.label, i)\"\r\n      [latitude]=\"m.lat\"\r\n      [longitude]=\"m.lng\"\r\n      [label]=\"\"\r\n      [markerDraggable]=\"m.draggable\"\r\n      (dragEnd)=\"markerDragEnd(m, $event)\">\r\n      \r\n   <!--<agm-info-window>\r\n      <strong>InfoWindow content</strong>\r\n    </agm-info-window> -->\r\n    \r\n  </agm-marker>\r\n  \r\n  <agm-circle [latitude]=\"lat + 0.3\" [longitude]=\"lng\" \r\n      [radius]=\"5000\"\r\n      [fillColor]=\"'red'\"\r\n      [circleDraggable]=\"false\"\r\n      [editable]=\"true\">\r\n  </agm-circle>\r\n\r\n</agm-map>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n\r\n"

/***/ }),

/***/ "./src/app/my-map/my-map.component.ts":
/*!********************************************!*\
  !*** ./src/app/my-map/my-map.component.ts ***!
  \********************************************/
/*! exports provided: MyMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyMapComponent", function() { return MyMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/main.service */ "./src/app/_services/main.service.ts");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyMapComponent = /** @class */ (function () {
    function MyMapComponent(db, mainService) {
        this.db = db;
        this.mainService = mainService;
        this.zoom = 5;
        // initial center position for the map
        this.lat = 30.3753;
        this.lng = 69.3451;
        this.sidenavdata = {
            description: "",
            label: "",
            id: ""
        };
        this.markers = [
            {
                lat: 34.178519,
                lng: 73.241704,
                label: 'Abbottabad',
                draggable: false
            },
            {
                lat: 34.672185,
                lng: 73.024149,
                label: 'Batagram',
                draggable: false
            },
            {
                lat: 34.530285,
                lng: 72.309277,
                label: 'Buner',
                draggable: false
            }
        ];
    }
    MyMapComponent.prototype.clickedMarker = function (label, index) {
        console.log("clicked the marker: " + index);
        this.sidenavdata.label = label;
        console.log("side nav: ", this.sidenavdata.label);
    };
    MyMapComponent.prototype.mapClicked = function ($event) {
        return;
    };
    MyMapComponent.prototype.markerDragEnd = function (m, $event) {
        console.log('dragEnd', m, $event);
    };
    MyMapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mainService.getCollection("marker")
            .then(function (list) {
            _this.mapdata = list;
            list.forEach(function (list) {
                console.log('Found subcollection with id:', list.id);
            });
        })
            .then(function (list) {
            //this.articlesList = list;
            console.log(_this.mapdata);
            return "got documents from database";
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    MyMapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-map',
            template: __webpack_require__(/*! ./my-map.component.html */ "./src/app/my-map/my-map.component.html"),
            styles: [__webpack_require__(/*! ./my-map.component.css */ "./src/app/my-map/my-map.component.css")]
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"]])
    ], MyMapComponent);
    return MyMapComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.col-dp{\r\n    width: 100%;\r\n    float: left;\r\n    justify-content: center;\r\n  }\r\n  .dp{\r\n    width: 100px; height: 100px; border-radius: 50%; \r\n  }\r\n  .col-info{\r\n    display: block;\r\n  }\r\n  #title-options{\r\n    padding: 10px 0px;\r\n  \r\n  }\r\n  .title-option{\r\n    width: 50%;\r\n    text-align: center;\r\n    padding: 10px 24px; /* Some padding */\r\n    cursor: pointer; /* Pointer/hand icon */\r\n    float: left; /* Float the buttons side by side */\r\n  }\r\n  .profile-img{\r\n    height: 100px;\r\n    width: 100px;\r\n    border-radius:3px;\r\n  \r\n    z-index: -5;\r\n    /* box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 4px 4px 0 rgba(0, 0, 0, 0.2); */\r\n  }\r\n  @media only screen and (min-width: 600px) {\r\n      /* For tablets: */\r\n  \r\n  }\r\n  @media only screen and (min-width: 1200px) {\r\n      /* For desktop: */\r\n      .col-dp{\r\n      width: 20%;\r\n    }\r\n  \r\n    .profile-img{\r\n      width:90%;\r\n        height:90%;\r\n      z-index: -5;\r\n    }\r\n  \r\n    .col-info{\r\n      width: 79%;\r\n    }\r\n  \r\n  \r\n  \r\n    .col-left{\r\n      width: 25%;\r\n      \r\n    }\r\n    .col-middle{\r\n      width: 50%;\r\n    }\r\n    .col-right{\r\n      width: 25%;\r\n    }\r\n    .content{\r\n      max-width: 1600px;\r\n      margin: auto;\r\n    }\r\n  \r\n  \r\n  \r\n  }\r\n  .dp{\r\n    position: absolute;\r\n  }\r\n  .on-dp{\r\n    position: relative;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n  }\r\n  .passthrough{\r\n    pointer-events:none;\r\n  }\r\n  agm-map {\r\n    height: 300px;\r\n  }\r\n  \r\n  "

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"content\">\r\n \r\n\r\n  <div class=\"row\">\r\n\r\n\r\n\r\n      <div class=\"col-right\">\r\n      \r\n\r\n      </div>\r\n      <div class=\"col-middle\">\r\n\r\n          <div class=\"row\">\r\n\r\n\r\n\r\n              <div class=\"col-25p padding-responsive\">\r\n                  <div class=\"centered-horizontal\">\r\n                      <div>\r\n\r\n                          <img src=\"{{user?.dpSrc ? user.dpSrc : defaultDp}}\" class=\"dp \" />\r\n\r\n                          <div class=\"on-dp \" style=\"height: 100px; width: 100%;\">\r\n                              <mat-progress-spinner [value]=\"progressValue\" *ngIf=\"dpUpload\" mode=\"indeterminate\" diameter=\"100\" strokeWidth=\"5\"></mat-progress-spinner>\r\n                          </div>\r\n\r\n\r\n                          <br>\r\n                          <div *ngIf=\"me\">\r\n                              <input id=\"file\" type=\"file\" (change)=\"fileChangeEventDp($event)\" accept=\".png,.jpg\" class=\" inputfile inputfile-3\" />\r\n                              <label for=\"file\">Change photo</label>\r\n\r\n                          </div>\r\n\r\n\r\n                      </div>\r\n\r\n                  </div>\r\n\r\n              </div>\r\n\r\n\r\n              <div class=\"col-75p padding-global\">\r\n                  <h3>{{user.displayName}}</h3>\r\n\r\n              </div>\r\n\r\n\r\n          </div>\r\n\r\n          <mat-spinner class=\"centered-horizontal\" diameter=\"30\" *ngIf=\"loading\"></mat-spinner>\r\n\r\n          <div *ngIf=\"dpChangedEvent\">\r\n\r\n\r\n              <image-cropper [imageChangedEvent]=\"dpChangedEvent\" [maintainAspectRatio]=\"true\" [aspectRatio]=\"1 / 1\" [resizeToWidth]=\"128\"\r\n                  format=\"png\" (imageCropped)=\"imageCropped($event)\" (imageLoaded)=\"imageLoaded()\" (loadImageFailed)=\"loadImageFailed()\"\r\n                  style=\"height: 300px; width: 100%; background: #ddd;\"></image-cropper>\r\n              <div class=\"centered-horizontal\">\r\n                  <button mat-raised-button color=\"accent\" (click)=\"uploadDp()\" class=\"centered-horizontal\">Upload</button>\r\n              </div>\r\n\r\n\r\n\r\n\r\n          </div>\r\n\r\n\r\n          <div *ngIf=\"!me && !loading\">\r\n              \r\n\r\n          </div>\r\n\r\n\r\n          <div *ngIf=\"me\">\r\n              <div class=\"row\">\r\n                  <mat-form-field appearance=\"outline\" class=\"col-3 padding-global\">\r\n                      <mat-label>Name</mat-label>\r\n                      <input matInput [(ngModel)]=\"user.displayName\" placeholder=\"Name\">\r\n                      <!-- <mat-hint>Search</mat-hint> -->\r\n                  </mat-form-field>\r\n\r\n\r\n\r\n                  <mat-form-field appearance=\"outline\" class=\"col-3 padding-global\">\r\n                      <mat-label>Email</mat-label>\r\n                      <input matInput [(ngModel)]=\"user.email\" placeholder=\"Email\" disabled>\r\n                      <!-- <mat-hint>Search</mat-hint> -->\r\n                  </mat-form-field>\r\n\r\n\r\n              </div>\r\n\r\n              <!-- <mat-card style=\"margin:10px 0px; padding: 10px;\"> -->\r\n        \r\n              <div class=\"button-row\">\r\n                <button mat-raised-button (click)=\"saveProfileData()\" color=\"accent\" *ngIf=\"!loading && !error\">Save</button>\r\n                <mat-spinner class=\"centered-horizontal\" diameter=\"30\" *ngIf=\"loading\"></mat-spinner>\r\n            </div>\r\n          </div>\r\n          <!-- </mat-card> -->\r\n      </div>\r\n      <div class=\"col-left\">\r\n\r\n\r\n\r\n      </div>\r\n\r\n\r\n\r\n\r\n\r\n  </div>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/upload */ "./src/app/_services/upload.ts");
/* harmony import */ var _services_notify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/notify.service */ "./src/app/_services/notify.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_services/profile.service */ "./src/app/_services/profile.service.ts");
/* harmony import */ var _schema_user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../schema/user */ "./src/app/schema/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, route, profileService, notify, location) {
        var _this = this;
        this.authService = authService;
        this.route = route;
        this.profileService = profileService;
        this.notify = notify;
        this.location = location;
        this.user = new _schema_user__WEBPACK_IMPORTED_MODULE_10__["default"];
        this.dpChangedEvent = '';
        this.logoChangedEvent = '';
        this.croppedImage = '';
        this.defaultDp = '/assets/dp-placeholder.png';
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["COMMA"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["SPACE"]];
        this.loading = false;
        this.eduTags = [];
        this.allEduTags = [
            'computers',
            'writing',
            'accounting',
            'angular',
            'android-developement',
            'ios-developement0',
            'maths',
            'physics',
            'digital-logic-design',
            'health',
            'medical-sciences'
        ];
        this.eduTagCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]();
        this.lat = 51.673858;
        this.lng = 7.815982;
        this.doctorLocation = {
            lat: 0,
            lng: 0,
            draggable: true
        };
        this.filteredEduTags = this.eduTagCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (tag) { return tag ? _this._filter(tag) : _this.allEduTags.slice(); }));
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = this.route.snapshot.paramMap.get('id');
        this.authService.getCurrentUserUpdates().subscribe(function (user) {
            if (!user) {
                return;
            }
            if (user.id === _this.userId || !_this.userId) {
                _this.me = true;
            }
            else {
                _this.getUser();
                _this.me = false;
            }
            _this.user = user;
        });
    };
    ProfileComponent.prototype.getUser = function () {
        var _this = this;
        this.loading = true;
        this.profileService.getById(this.userId)
            .then(function (user) {
            _this.user = user;
            //  console.log(user);
            _this.loading = false;
        })
            .catch(function (err) {
            _this.loading = false;
        });
    };
    // changeIsDoctor(event): void {
    //   console.log(this.user.isDoctor);
    //   this.authService.updateIsDoctor(this.user.isDoctor);
    // }
    // updateRxTemplate() {
    //   this.authService.updateRxTemplate(this.user.doctor.rxTemplate, true)
    //     .then(() => {
    //       this.notify.update('template data updated succefully', 'success');
    //       this.loading = false;
    //     })
    //     .catch(err => {
    //       this.notify.update('Template to update', 'error');
    //       this.loading = false;
    //     });
    // }
    ProfileComponent.prototype.uploadDp = function () {
        var _this = this;
        this.dpChangedEvent = false;
        console.log(this.croppedImage);
        this.dpUpload = new _services_upload__WEBPACK_IMPORTED_MODULE_5__["Upload"](this.dataURItoBlob(this.croppedImage));
        var id = this.user.id;
        this.authService.uploadDp(this.dpUpload)
            .then(function (downloadUrl) {
            _this.user.dpSrc = downloadUrl;
            _this.dpUpload = null;
        })
            .catch(function (err) {
            console.log(err);
            _this.dpUpload = null;
        });
    };
    /** For Dp  */
    ProfileComponent.prototype.fileChangeEventDp = function (event) {
        if (event.target.files !== undefined && event.target.files.length > 0) {
            this.dpChangedEvent = event;
        }
        else {
            this.dpChangedEvent = false;
        }
    };
    /** For logo */
    ProfileComponent.prototype.fileChangeEventLogo = function (event) {
        if (event.target.files !== undefined && event.target.files.length > 0) {
            this.logoChangedEvent = event;
        }
        else {
            this.logoChangedEvent = false;
        }
    };
    ProfileComponent.prototype.imageCropped = function (image) {
        this.croppedImage = image;
    };
    ProfileComponent.prototype.imageLoaded = function () {
        // show cropper
    };
    ProfileComponent.prototype.loadImageFailed = function () {
        // show message
    };
    ProfileComponent.prototype.addEdu = function (event) {
        var input = event.input;
        var value = event.value;
        // Add our tag
        if ((value || '').trim()) {
            this.eduTags.push(value.trim());
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
        this.eduTagCtrl.setValue(null);
    };
    ProfileComponent.prototype.removeEdu = function (tag) {
        var index = this.eduTags.indexOf(tag);
        if (index >= 0) {
            this.eduTags.splice(index, 1);
        }
    };
    ProfileComponent.prototype._filter = function (name) {
        return this.allEduTags.filter(function (tag) {
            return tag.toLowerCase().indexOf(name.toLowerCase()) === 0;
        });
    };
    ProfileComponent.prototype.eduSelected = function (event) {
        this.eduTags.push(event.option.viewValue);
        this.tagInput.nativeElement.value = '';
        this.eduTagCtrl.setValue(null);
    };
    ProfileComponent.prototype.clickedMarker = function (label, index) {
        console.log("clicked the marker: " + (label || index));
    };
    ProfileComponent.prototype.markerDragEnd = function (m, event) {
        console.log('dragEnd', m, event);
        this.doctorLocation.lat = event.coords.lat;
        this.doctorLocation.lng = event.coords.lng;
    };
    ProfileComponent.prototype.mapClicked = function (event) {
        this.doctorLocation.lat = event.coords.lat;
        this.doctorLocation.lng = event.coords.lng;
    };
    ProfileComponent.prototype.saveProfileData = function () {
        var _this = this;
        this.loading = true;
        this.authService.updateProfile(this.user)
            .then(function (result) {
            _this.loading = false;
            console.log(" updating data");
        })
            .catch(function (err) {
            console.log("error updating data");
            _this.loading = false;
        });
    };
    ProfileComponent.prototype.dataURItoBlob = function (dataURI) {
        // convert base64 to raw binary data held in a string
        // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
        var byteString = atob(dataURI.split(',')[1]);
        // separate out the mime component
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        // write the bytes of the string to an ArrayBuffer
        var ab = new ArrayBuffer(byteString.length);
        // create a view into the buffer
        var ia = new Uint8Array(ab);
        // set the bytes of the buffer to the correct values
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        // write the ArrayBuffer to a blob, and you're done
        var blob = new Blob([ab], { type: mimeString });
        return blob;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tagInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ProfileComponent.prototype, "tagInput", void 0);
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_profile_service__WEBPACK_IMPORTED_MODULE_9__["ProfileService"],
            _services_notify_service__WEBPACK_IMPORTED_MODULE_6__["NotifyService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/schema/user.ts":
/*!********************************!*\
  !*** ./src/app/schema/user.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var PlantifyUser = /** @class */ (function () {
    function PlantifyUser() {
    }
    PlantifyUser.getUserPublic = function (user) {
        var userPublic = {};
        userPublic.id = user.id;
        userPublic.displayName = user.displayName;
        userPublic.dpSrc = user.dpSrc;
        userPublic.dob = user.dob;
        return userPublic;
    };
    return PlantifyUser;
}());
/* harmony default export */ __webpack_exports__["default"] = (PlantifyUser);


/***/ }),

/***/ "./src/app/side-bar/side-bar.component.css":
/*!*************************************************!*\
  !*** ./src/app/side-bar/side-bar.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu{\r\n    max-width: 250px;\r\n    margin-top: 20px;\r\n    text-align: center;\r\n    overflow: hidden;\r\n  }\r\n  \r\n  \r\n  nav a,p{\r\n    width: 100%;\r\n    text-decoration: none;\r\n    background-color: #eee;\r\n  }\r\n  \r\n  \r\n  nav a{\r\n    text-align: left;\r\n    font-size: 120%;\r\n    padding: 5px 10px;\r\n  }\r\n  \r\n  \r\n  /* nav *:visited, a:link {\r\n  } */\r\n  \r\n  \r\n  nav a.active {\r\n    color: #039be5;\r\n  }\r\n  \r\n  \r\n  .section-heading{\r\n    text-align: center;\r\n    padding: 0px 10px;\r\n    font-weight: bold;\r\n    \r\n  }\r\n  \r\n  \r\n  .pwa{\r\n    padding: 5px;\r\n    font-size: 80%;\r\n    text-align: center;\r\n    position: relative;\r\n    bottom: 0;\r\n  }\r\n  \r\n  \r\n  @media only screen and (min-width: 600px) {\r\n      /* For tablets: */\r\n  \r\n      nav a:hover {\r\n      color: #314947;\r\n      background-color: #CFD8DC;\r\n    }\r\n      \r\n  }"

/***/ }),

/***/ "./src/app/side-bar/side-bar.component.html":
/*!**************************************************!*\
  !*** ./src/app/side-bar/side-bar.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div style=\"height: 100%;\">\r\n\r\n\r\n  \r\n\r\n  <nav class=\"menu\">\r\n\r\n          <a mat-button routerLink=\"/articleNew\" (click)=\"snav.toggle()\"> <i class=\"fas fa-edit\"></i>&nbsp;&nbsp;Write Article</a>\r\n          <p class=\"section-heading\" >Personal</p>\r\n           <a mat-button  routerLink=\"/profile\" *ngIf=\"isLoggedIn\" (click)=\"snav.toggle()\"><i class=\"fas fa-user \"></i>&nbsp;&nbsp; Profile</a>\r\n          <p class=\"section-heading\" >Other</p>\r\n          <a mat-button routerLink=\"/\" (click)=\"logout()\"> <i class=\"fas fa-edit\"></i>&nbsp;&nbsp;Logout</a>\r\n  </nav>\r\n\r\n\r\n\r\n <!--<p class=\"pwa\">This app is Progressive Web App which means it can run offline and you can add it to homescreen.</p> {% endcomment %}\r\n--> \r\n\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/side-bar/side-bar.component.ts":
/*!************************************************!*\
  !*** ./src/app/side-bar/side-bar.component.ts ***!
  \************************************************/
/*! exports provided: SideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarComponent", function() { return SideBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/main.service */ "./src/app/_services/main.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SideBarComponent = /** @class */ (function () {
    function SideBarComponent(mainService, authService) {
        this.mainService = mainService;
        this.authService = authService;
        this.isLoggedIn = false;
    }
    SideBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getLoggedInUpdates().subscribe(function (user) {
            if (user == null || user == undefined) {
                _this.isLoggedIn = false;
            }
            else {
                _this.isLoggedIn = true;
            }
        });
    };
    SideBarComponent.prototype.logout = function () {
        localStorage.clear();
        this.authService.logOut();
    };
    SideBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-side-bar',
            template: __webpack_require__(/*! ./side-bar.component.html */ "./src/app/side-bar/side-bar.component.html"),
            styles: [__webpack_require__(/*! ./side-bar.component.css */ "./src/app/side-bar/side-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], SideBarComponent);
    return SideBarComponent;
}());



/***/ }),

/***/ "./src/app/signin/signin.component.css":
/*!*********************************************!*\
  !*** ./src/app/signin/signin.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n.background{\r\n    width: 100%;\r\n    height: 100%;\r\n    position: fixed;\r\n    left: 0;\r\n    \r\n    background-image: url(\"https://www.sevenforums.com/attachments/general-discussion/250721d1486599828t-any-ideas-how-my-login-background-screen-changed-its-own-backgrounddefault.jpg\");\r\n    background-size: cover;\r\n  }\r\n  \r\n  \r\n  .card{\r\n    padding: 100px 10px;\r\n    width: 100%;\r\n    margin: auto;\r\n  }\r\n  \r\n  \r\n  .info{\r\n    width: 100%;\r\n  }\r\n  \r\n  \r\n  .signin-card{\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  \r\n  }\r\n  \r\n  \r\n  .signin-tab-group{\r\n    width: 100%;\r\n  \r\n  }\r\n  \r\n  \r\n  @media only screen and (min-width: 600px) {\r\n      /* For desktop: */\r\n  \r\n    .card{\r\n      width: 40%;\r\n      float: right;\r\n    }\r\n  \r\n    .info{\r\n      width: 60%;\r\n      float: left;\r\n    }\r\n    .signin-card{\r\n      width: 370px;\r\n    }\r\n  \r\n  }\r\n  \r\n  \r\n  .form{\r\n    padding: 20px 20px;\r\n    display: table;\r\n    width: 100%;\r\n    height: 250px;\r\n  }\r\n  \r\n  \r\n  .form-element{\r\n    -ms-grid-row-align: center;\r\n        align-self: center;\r\n    width: 100%;\r\n    margin: auto;\r\n  }\r\n  \r\n  \r\n  .inner-form{\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n  }\r\n  \r\n  \r\n  .table-signin-providers{\r\n    width: 100%;\r\n  }\r\n  \r\n  \r\n  .centered-horizontal {\r\n      display: table;\r\n      margin: 0 auto;\r\n  }\r\n  \r\n  \r\n  /*\r\n  \r\n  .signin-card {\r\n  \r\n  \r\n    float: right;\r\n    clear: both;\r\n  }\r\n  \r\n  .example-header-image {\r\n    background-image: url('https://www.w3schools.com/howto/img_avatar2.png');\r\n    background-size: cover;\r\n  }\r\n  .example-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .example-container > * {\r\n    width: 100%;\r\n  }\r\n  .sign-tab-group{\r\n  \r\n  } */\r\n  "

/***/ }),

/***/ "./src/app/signin/signin.component.html":
/*!**********************************************!*\
  !*** ./src/app/signin/signin.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"background\">\r\n\r\n  <div class=\"card\">\r\n\r\n    <mat-card class=\"signin-card\">\r\n\r\n          <mat-card-content>\r\n\r\n            <mat-tab-group class=\"sign-tab-group\">\r\n\r\n\r\n\r\n\r\n              <mat-tab label=\"sign in\">\r\n                <div class=\"form\">\r\n                  <div class=\"inner-form\">\r\n\r\n\r\n                    <mat-form-field class=\"form-element\">\r\n                      <input matInput  [(ngModel)]=\"user.email\"  placeholder=\"Email\" type=\"email\" [formControl]=\"emailFormControl\">\r\n                      <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\r\n                        Please enter a valid email address\r\n                      </mat-error>\r\n                      <mat-error *ngIf=\"emailFormControl.hasError('required')\">\r\n                        Email is <strong>required</strong>\r\n                      </mat-error>\r\n                    </mat-form-field>\r\n\r\n\r\n\r\n                    <mat-form-field class=\"form-element\">\r\n                      <input  matInput type=\"password\" [(ngModel)]=\"password\" placeholder=\"Password\" type=\"password\" [formControl]=\"passwordFormControl\">\r\n                      <mat-error *ngIf=\"passwordFormControl.hasError('password') && !passwordFormControl.hasError('required')\">\r\n                        Please enter a valid password\r\n                      </mat-error>\r\n                      <mat-error *ngIf=\"passwordFormControl.hasError('required')\">\r\n                        Password is <strong>required</strong>\r\n                      </mat-error>\r\n                    </mat-form-field>\r\n\r\n\r\n\r\n                    <button class=\"centered-horizontal\" mat-raised-button color=\"accent\" (click)=\"signin()\"  *ngIf=\"!loading\">Sign In</button>\r\n                    <mat-spinner class=\"centered-horizontal\"  diameter=\"30\" *ngIf=\"loading\"></mat-spinner>\r\n\r\n                    <table class=\"table-signin-providers\"><tr>\r\n                    <td (click)=\"signinGoogle()\">Sign in with Google</td>\r\n                      <td (click)=\"signinGoogle()\">Sign in with Facebook</td>\r\n                    </tr></table>\r\n\r\n\r\n                  </div>\r\n\r\n                </div>\r\n              </mat-tab>\r\n\r\n\r\n\r\n\r\n\r\n              <mat-tab label=\"sign up\">\r\n                <div class=\"form\">\r\n                  <div class=\"inner-form\">\r\n\r\n                    <mat-form-field class=\"form-element\">\r\n                      <input matInput [(ngModel)]=\"user.displayName\" type=\"text\" placeholder=\"Name\">\r\n                    </mat-form-field>\r\n\r\n\r\n\r\n                    <mat-form-field class=\"form-element\">\r\n                      <input matInput  [(ngModel)]=\"user.email\"  placeholder=\"Email\" type=\"email\" [formControl]=\"emailFormControl\">\r\n                      <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\r\n                        Please enter a valid email address\r\n                      </mat-error>\r\n                      <mat-error *ngIf=\"emailFormControl.hasError('required')\">\r\n                        Email is <strong>required</strong>\r\n                      </mat-error>\r\n                    </mat-form-field>\r\n\r\n\r\n\r\n\r\n                    <mat-form-field class=\"form-element\">\r\n                      <input  matInput type=\"password\" [(ngModel)]=\"password\" placeholder=\"Password\" type=\"password\" [formControl]=\"passwordFormControl\">\r\n                      <mat-error *ngIf=\"passwordFormControl.hasError('password') && !passwordFormControl.hasError('required')\">\r\n                        Please enter a valid password\r\n                      </mat-error>\r\n                      <mat-error *ngIf=\"passwordFormControl.hasError('required')\">\r\n                        Password is <strong>required</strong>\r\n                      </mat-error>\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field class=\"form-element\">\r\n                      <input  matInput type=\"password\" [(ngModel)]=\"confirmPassword\" placeholder=\"confirm Password\" [formControl]=\"confirmPasswordFormControl\">\r\n                      <mat-error *ngIf=\"confirmPasswordFormControl.hasError('password') && !confirmPasswordFormControl.hasError('required')\">\r\n                        *\r\n                      </mat-error>\r\n                      <mat-error *ngIf=\"confirmPasswordFormControl.hasError('required')\">\r\n                        Password is <strong>required</strong>\r\n                      </mat-error>\r\n                    </mat-form-field>\r\n\r\n\r\n\r\n                    <button  class=\"centered-horizontal\"  mat-raised-button color=\"accent\" (click)=\"signup()\" *ngIf=\"!loading\">Sign Up</button>\r\n                    <mat-spinner class=\"centered-horizontal\"   diameter=\"30\"  *ngIf=\"loading\"></mat-spinner>\r\n\r\n                  </div>\r\n\r\n\r\n                </div>\r\n              </mat-tab>\r\n            </mat-tab-group>\r\n          </mat-card-content>\r\n\r\n\r\n\r\n    </mat-card>\r\n\r\n  </div>\r\n\r\n  <div class=\"info\"></div>\r\n\r\n\r\n<div>\r\n"

/***/ }),

/***/ "./src/app/signin/signin.component.ts":
/*!********************************************!*\
  !*** ./src/app/signin/signin.component.ts ***!
  \********************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _schema_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../schema/user */ "./src/app/schema/user.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_notify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/notify.service */ "./src/app/_services/notify.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SigninComponent = /** @class */ (function () {
    function SigninComponent(authService, notifyService, router, snackBar) {
        this.authService = authService;
        this.notifyService = notifyService;
        this.router = router;
        this.snackBar = snackBar;
        this.bgUrl = 'http://backgroundcheckall.com/wp-content/uploads/2017/12/background-images-for-registration-page-10.jpg';
        this.email = '';
        this.password = '';
        this.confirmPassword = '';
        this.user = new _schema_user__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this.loading = false;
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email,
        ]);
        this.passwordFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6),
        ]);
        this.confirmPasswordFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)
        ]);
    }
    SigninComponent.prototype.ngOnInit = function () {
        // this.authService.getLoggedInUpdates().subscribe((user) => {
        //   if (user != null) {
        //     // this.router.navigate(['/explore']);
        //   }
        //   console.log(user);
        // });
    };
    SigninComponent.prototype.signin = function () {
        var _this = this;
        this.loading = true;
        this.authService.emailLogin(this.user.email, this.password)
            .then(function (result) {
            console.log(result);
            if (result) {
                _this.loading = false;
                _this.router.navigate(['']);
            }
            _this.loading = false;
        })
            .catch(function (err) {
            _this.loading = false;
            console.log(err);
        });
    };
    SigninComponent.prototype.signinGoogle = function () {
        this.loading = true;
        this.authService.googleLogin();
    };
    SigninComponent.prototype.signup = function () {
        var _this = this;
        this.loading = true;
        this.authService.emailSignUp(this.user, this.password)
            .then(function () {
            _this.router.navigate(['']);
            _this.loading = false;
        })
            .catch(function (err) {
            _this.loading = false;
            console.log(err);
        });
    };
    SigninComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/signin/signin.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _services_notify_service__WEBPACK_IMPORTED_MODULE_6__["NotifyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], SigninComponent);
    return SigninComponent;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyB_NH5WVCVz8nXRoAcXtUL8EoIxxdMZUJM",
        authDomain: "forest-data-representation.firebaseapp.com",
        databaseURL: "https://forest-data-representation.firebaseio.com",
        projectId: "forest-data-representation",
        storageBucket: "",
        messagingSenderId: "844047942980",
        appId: "1:844047942980:web:54a21b27fc55daf4"
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Bilal Khalid\Desktop\Career\FYP\website\Forest-data-representation\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map