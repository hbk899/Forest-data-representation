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

/***/ "./src/app/_services/animation.ts":
/*!****************************************!*\
  !*** ./src/app/_services/animation.ts ***!
  \****************************************/
/*! exports provided: fade, imagechange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fade", function() { return fade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imagechange", function() { return imagechange; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var fade = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])("fade", [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])("active", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])("inactive", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("* <=> *", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(2000)])
]);
var imagechange = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])("fade", [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])("inactive", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])("active", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("* <=> *", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(2000)])
]);


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

module.exports = "<!-- <app-header></app-header> -->\r\n\r\n<div class=\"container\" style=\"min-height:90vh;\">\r\n  <div class=\"mx-auto\" style=\"text-align: center ;\"><h1>Coming Soon</h1></div>\r\n\r\n\r\n\r\n</div>\r\n\r\n\r\n"

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

module.exports = "agm-map{\r\n\r\n  height: 100vh;\r\n}\r\n"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- <td-text-editor [value]=\"Some Text\" [options]=\"options\" #textEditor></td-text-editor> -->\n\n\n <div class=\"container\" style=\"height: 100vh;\"></div>\n\n\n"

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
/* harmony import */ var _my_map_my_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-map/my-map.component */ "./src/app/my-map/my-map.component.ts");
/* harmony import */ var _markerdetail_markerdetail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./markerdetail/markerdetail.component */ "./src/app/markerdetail/markerdetail.component.ts");
/* harmony import */ var _title_title_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./title/title.component */ "./src/app/title/title.component.ts");
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
    { path: 'publications', component: _a_main_a_main_component__WEBPACK_IMPORTED_MODULE_2__["AMainComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] },
    { path: 'signin', component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_4__["SigninComponent"] },
    { path: '', component: _title_title_component__WEBPACK_IMPORTED_MODULE_7__["TitleComponent"] },
    { path: 'map', component: _my_map_my_map_component__WEBPACK_IMPORTED_MODULE_5__["MyMapComponent"] },
    { path: 'markerdetail', component: _markerdetail_markerdetail_component__WEBPACK_IMPORTED_MODULE_6__["MarkerdetailComponent"] },
    { path: 'markerdetail/:type/:id', component: _markerdetail_markerdetail_component__WEBPACK_IMPORTED_MODULE_6__["MarkerdetailComponent"] },
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

module.exports = "example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n.example-is-mobile .example-toolbar {\r\n  position: fixed;\r\n  /* Make sure the toolbar will stay on top of the content as it scrolls past. */\r\n  z-index: 2;\r\n}\r\n\r\n.basic-container {\r\n  padding: 30px;\r\n}\r\n\r\n.toolbar{\r\n   overflow: hidden;\r\n   padding: 20px 10px;\r\n   text-decoration: none\r\n }\r\n\r\n.toolbar a{\r\n  padding: 12px;\r\n  text-decoration: none;\r\n }\r\n\r\n.toolbar a.active {\r\n  background-color: dodgerblue;\r\n  color: white;\r\n}\r\n\r\n#snav{\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n}\r\n\r\n.menu{\r\n  max-width: 250px;\r\n  margin-top: 20px;\r\n  text-align: center;\r\n  overflow: hidden;\r\n}\r\n\r\nnav a,p{\r\n  width: 100%;\r\n  text-decoration: none;\r\n  background-color: #eee;\r\n}\r\n\r\nnav a{\r\n  text-align: left;\r\n  font-size: 120%;\r\n  padding: 5px 10px;\r\n}\r\n\r\n/* nav *:visited, a:link {\r\n} */\r\n\r\nnav a.active {\r\n  color: #039be5;\r\n}\r\n\r\n.section-heading{\r\n  text-align: center;\r\n  padding: 0px 10px;\r\n  font-weight: bold;\r\n  \r\n}\r\n\r\n.app-toolbar {\r\n  position: sticky;\r\n  position: -webkit-sticky; /* For macOS/iOS Safari */\r\n  top:  0; /* Sets the sticky toolbar to be on top */\r\n  z-index: 1000; /* Ensure that your app's content doesn't overlap the toolbar */\r\n}\r\n\r\n.pwa{\r\n  padding: 5px;\r\n  font-size: 80%;\r\n  text-align: center;\r\n  position: relative;\r\n  bottom: 0;\r\n}\r\n\r\n@media only screen and (min-width: 600px) {\r\n    /* For tablets: */\r\n\r\n    nav a:hover {\r\n    color: #314947;\r\n    background-color: #CFD8DC;\r\n  }\r\n    \r\n}\r\n\r\n.footer{\r\n  position: sticky;\r\n  position: -webkit-sticky; \r\n  bottom: 0;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\r\n\r\n<head>\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0 ,height=device-height\">\r\n</head>\r\n\r\n<body *ngIf=\"!loading\">\r\n\r\n\r\n  <!--this is toolbar-->\r\n  <mat-toolbar class=\"toolbar app-toolbar\" color=\"primary\" (window:resize)=\"refresh()\">\r\n    <span class=\"header-padding\"></span>\r\n    <a *ngIf=\"isMobile\" (click)=\"snav.toggle()\">\r\n      <mat-icon>menu</mat-icon>\r\n    </a>\r\n    <!--<a  routerLink=\"/signin\" *ngIf=\"!loggedIn\">Sign In</a>-->\r\n    <a *ngIf=\"!isMobile\" routerLink=\"/\">Home</a>\r\n    <a *ngIf=\"!isMobile\" routerLink=\"/map\">Our Map</a>\r\n    <a *ngIf=\"!isMobile\" routerLink=\"/publications\">Our Publications </a>\r\n    <a *ngIf=\"!isMobile\" routerLink=\"/about\">About</a>\r\n    <span style=\"flex: 1 0 auto;\"></span>\r\n    <a routerLink=\"/profile\" *ngIf=\"loggedIn\"><i class=\"fas fa-user \"></i>{{ \" \"+username}} </a>\r\n    <span class=\"header-padding\"></span>\r\n  </mat-toolbar>\r\n  <mat-sidenav-container class=\"nav-container\" autosize>\r\n    <mat-sidenav #snav [(mode)]=\"sideNavMode\" [(opened)]=\"sideNavOpened\" fullscreen>\r\n      <nav class=\"menu\">\r\n        <a mat-button routerLink=\"/map\" (click)=\"snav.toggle()\"> <i class=\"fas fa-map-marker-alt\"></i>&nbsp;&nbsp;Our\r\n          Map</a>\r\n        <a mat-button routerLink=\"/publications\" (click)=\"snav.toggle()\"> <i\r\n            class=\"fas fa-edit\"></i>&nbsp;&nbsp;Publications</a>\r\n        <p class=\"section-heading\">Personal</p>\r\n        <a mat-button routerLink=\"/about\" (click)=\"snav.toggle()\"><i class=\"fas fa-user \"></i>&nbsp;&nbsp; About Us</a>\r\n        <a mat-button (click)=\"snav.toggle()\"><i class=\"far fa-comment-dots\"></i>&nbsp;&nbsp; Feedback</a>\r\n      </nav>\r\n    </mat-sidenav>\r\n    <mat-sidenav-content>\r\n      <router-outlet></router-outlet>\r\n\r\n    </mat-sidenav-content>\r\n  </mat-sidenav-container>\r\n<footer>\r\n  <mat-toolbar class=\"toolbar footer\" color=\"primary\" (window:resize)=\"refresh()\" *ngIf=\"!loading\">\r\n\r\n    <!-- <span class=\"header-padding\"></span>\r\n\r\n    <a>Footer 1</a>\r\n    <a>Footer 2</a>\r\n    <a>Footer 3</a>\r\n    <span style=\"flex: 1 0 auto;\"></span> -->\r\n\r\n\r\n    <!-- Footer -->\r\n\r\n\r\n\r\n\r\n  <!-- Footer Links -->\r\n\r\n  <!-- Copyright -->\r\n  <div   class=\"mx-auto\" style=\"text-align: center ;\">© 2018 Copyright:\r\n    <a href=\"https://tukl.seecs.nust.edu.pk/\"> TUKL SEECS</a>\r\n  </div>\r\n  <!-- Copyright -->\r\n\r\n\r\n<!-- Footer -->\r\n  </mat-toolbar>\r\n</footer>\r\n</body>\r\n\r\n</html>\r\n\r\n\r\n<!--\r\nCopyright 2017-2018 Google Inc. All Rights Reserved.\r\nUse of this source code is governed by an MIT-style license that\r\ncan be found in the LICENSE file at http://angular.io/license\r\n-->\r\n"

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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
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
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/signin/signin.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_notify_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./_services/notify.service */ "./src/app/_services/notify.service.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! angularx-qrcode */ "./node_modules/angularx-qrcode/dist/index.js");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/ngx-image-cropper.es5.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _my_map_my_map_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./my-map/my-map.component */ "./src/app/my-map/my-map.component.ts");
/* harmony import */ var _markerdetail_markerdetail_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./markerdetail/markerdetail.component */ "./src/app/markerdetail/markerdetail.component.ts");
/* harmony import */ var _title_title_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./title/title.component */ "./src/app/title/title.component.ts");
/* harmony import */ var _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @ngmodule/material-carousel */ "./node_modules/@ngmodule/material-carousel/fesm5/ngmodule-material-carousel.js");
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
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _a_main_a_main_component__WEBPACK_IMPORTED_MODULE_13__["AMainComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_14__["AboutComponent"],
                _signin_signin_component__WEBPACK_IMPORTED_MODULE_15__["SigninComponent"],
                _my_map_my_map_component__WEBPACK_IMPORTED_MODULE_27__["MyMapComponent"],
                _markerdetail_markerdetail_component__WEBPACK_IMPORTED_MODULE_28__["MarkerdetailComponent"],
                _title_title_component__WEBPACK_IMPORTED_MODULE_29__["TitleComponent"],
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_5__["DemoMaterialModule"],
                ngx_image_cropper__WEBPACK_IMPORTED_MODULE_25__["ImageCropperModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_23__["RouterModule"].forRoot([]),
                _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_30__["MatCarouselModule"].forRoot(),
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_22__["AngularFireAuthModule"],
                _node_modules_angularfire2_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestoreModule"].enablePersistence(),
                ngx_markdown__WEBPACK_IMPORTED_MODULE_8__["MarkdownModule"].forRoot(),
                _covalent_text_editor__WEBPACK_IMPORTED_MODULE_6__["CovalentTextEditorModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_18__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebase),
                angularfire2__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebase, 'my-app-name'),
                _node_modules_angularfire2_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestoreModule"].enablePersistence(),
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_22__["AngularFireAuthModule"],
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_12__["AngularFireStorageModule"],
                angularx_qrcode__WEBPACK_IMPORTED_MODULE_24__["QRCodeModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_26__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyBt4GWgutgc8URi0kHpyRT_S720WGONf8s'
                }),
            ],
            providers: [_services_main_service__WEBPACK_IMPORTED_MODULE_10__["MainService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_19__["AuthService"], _services_notify_service__WEBPACK_IMPORTED_MODULE_20__["NotifyService"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_22__["AngularFireAuthModule"], _node_modules_angularfire2_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestore"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/markerdetail/markerdetail.component.css":
/*!*********************************************************!*\
  !*** ./src/app/markerdetail/markerdetail.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.image-container{\r\n\r\n    padding: 10px\r\n}\r\n.detail-card{\r\n   min-height: 70%;\r\n   height: auto;\r\n   margin: auto;\r\n}\r\n.my-container {\r\n  border: 0px solid green;\r\n  margin :20px;\r\n  padding-left:2% ;\r\n  background: white;\r\n\r\n}\r\n.my-row {\r\n  border: 0px solid rgb(190, 34, 34);\r\n\r\n\r\n}\r\n.my-col {\r\n  border: 0px dotted blue;\r\n}\r\n.header-less-tabs.mat-tab-group .mat-tab-header {\r\n display: none;\r\n  }\r\n@media (max-width: 600px) {\r\n    .module {\r\n      font-size: 10px;\r\n      max-height: 75px; }\r\n  }\r\n@media (max-width: 1024px) {\r\n    .grid {\r\n      margin: 0;\r\n    }\r\n    .module {\r\n      min-width: 60px;\r\n    }\r\n  }\r\n.myblock {\r\n    background-color: green;\r\n    width: 300px;\r\n    height: 250px;\r\n    border-radius: 5px;\r\n    margin: 5rem;\r\n}\r\n.card{\r\n border: 0px;\r\n  background-image:\"https://gph.is/2gESFHh\"\r\n}\r\n.m-3{\r\nmargin :5px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/markerdetail/markerdetail.component.html":
/*!**********************************************************!*\
  !*** ./src/app/markerdetail/markerdetail.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"min-height:90vh; width: 70%; \" class=\"container my-container m-5 mx-auto\" *ngIf=\"forest\">\n  <div class=\"row  my-row\">\n\n\n\n    <div class=\"col-7 my-col\">\n      <mat-tab-group class=\"header-less-tabs center-horizontal detail-card\" [selectedIndex]=\"selected.value\"\n        (selectedIndexChange)=\"selected.setValue($event)\">\n        <mat-tab *ngFor=\"let tab of imagearray; let index = index\">\n          <!-- [label]=\"((index <= imagearray.length-2) ? +'2013' +index : 'Change Image')\"> -->\n          <mat-card >\n\n            <mat-spinner class=\"centered-horizontal\" diameter=\"40\" *ngIf=\"loading\"><iframe src=\"https://giphy.com/embed/swhRkVYLJDrCE\" width=\"480\" height=\"270\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></iframe><p><a href=\"https://giphy.com/gifs/google-icon-loading-swhRkVYLJDrCE\">via GIPHY</a></p></mat-spinner>\n            <img mat-card-image  class=\"card\" id=\"anidiv\" src={{imagearray[index]}} *ngIf=\"!loading\" alt=\"Photo of \">\n\n\n\n          </mat-card>\n\n        </mat-tab>\n      </mat-tab-group>\n\n\n\n\n\n\n    </div>\n    <div class=\"col-5 my-col\">\n\n\n\n\n        <mat-card>\n            <mat-card-content>\n                <h1 style=\"align-self:centre\">{{markerdetail.label}}</h1>\n\n                <p>{{markerdetail.Disp}}</p>\n\n              <h1>{{showyear}}\n              </h1>\n\n\n            </mat-card-content>\n\n\n\n            <button mat-raised-button class=\"example-delete-tab-button\" [disabled]=\"selected.value === 0\"\n              (click)=\"previous()\" color=\"green\">\n              Back\n            </button>\n            <button mat-raised-button class=\"example-delete-tab-button\" [disabled]=\"selected.value === imagearray.length -1\"\n            (click)=\"next()\" color=\"accent\" [disableRipple]=\"false\">\n            Next\n          </button>\n\n             <!-- <button mat-raised-button\n               color=\"accent\" [disableRipple]=\"false\" >\n              Animate\n            </button> -->\n          </mat-card>\n       </div>\n\n    <!-- <div class=\"col-md-12 col-sm-12 my-col\">\n\n      <mat-card class=\"example-card\">\n\n        <img mat-card-image [@.disabled]=\"isDisabled\"  src={{imagesrc}} alt=\"Photo of a Shiba Inu\" [@fade]=\"state\"\n          (@fade.done)=\"onAnimationDone($event)\" onClick=\"animat()\">\n\n        <mat-card-actions>\n          <button mat-button (click)=\"animat()\">animate</button>\n          <button mat-button>SHARE</button>\n        </mat-card-actions>\n      </mat-card>\n    </div> -->\n\n  </div>\n\n\n\n\n\n\n\n\n\n</div>\n\n\n\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/main.service */ "./src/app/_services/main.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/animation */ "./src/app/_services/animation.ts");
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
        this.title = "angularanimation01";
        this.toState = "state1";
        this.imagearray = [];
        this.forest = true;
        this.loading = false;
        this.startyear = 2013;
        this.animateclicked = false;
        this.markerdetail = {};
        this.times = 5;
        this.state = "active";
        this.counter = 0;
        this.checked = true;
        this.isDisabled = true;
        this.tabs = ["First", "Second", "Third"];
        this.selected = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](0);
    }
    MarkerdetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.markerid = this.route.snapshot.paramMap.get("id");
        this.type = this.route.snapshot.paramMap.get("type");
        console.log(" got label from other page ", this.markerid);
        if (this.type == "0") {
            this.anusdata = true;
            this.mainService
                .getByIdAndCollection("marker", this.markerid)
                .then(function (list) {
                console.log("here we are");
                _this.markerdetail = list;
                _this.imagearray = list.picurl;
                _this.imagesrc = list.picurl[0];
                _this.years = list.imgyear;
                _this.showyear = list.imgyear[0];
                console.log(_this.markerdetail.lat);
                _this.loading = false;
            })
                .catch(function (err) {
                console.log(err);
            });
        }
        if (this.type == "1") {
            this.anusdata = false;
            this.mainService
                .getByIdAndCollection("marker2", this.markerid)
                .then(function (list) {
                console.log("here we are");
                _this.markerdetail = list;
                _this.imagearray = list.picurl;
                _this.imagesrc = list.picurl[0];
                _this.years = list.imgyear;
                _this.showyear = list.imgyear[0];
                console.log(_this.markerdetail.lat);
                _this.loading = false;
            })
                .catch(function (err) {
                console.log(err);
            });
        }
    };
    MarkerdetailComponent.prototype.next = function () {
        this.loading = true;
        var temp = this.selected.value;
        temp++;
        this.showyear = this.years[temp];
        temp = temp % this.imagearray.length;
        this.selected.setValue(temp);
        console.log("current index", temp);
        this.loading = false;
    };
    MarkerdetailComponent.prototype.previous = function () {
        this.loading = true;
        var temp = this.selected.value;
        temp--;
        this.showyear = this.years[temp];
        temp = temp % this.imagearray.length;
        this.selected.setValue(temp);
        console.log("current index", temp);
        this.loading = false;
    };
    // onAnimationDone($event) {
    //   // call this function at the end of the previous animation.
    //   // run it as many time as defined
    //   if (this.counter < this.times) {
    //     this.state = this.state === 'active' ? 'inactive' : 'active';
    //     this.imagesrc=this.imagearray[this.counter]
    //     this.counter++;
    //   }
    // }
    MarkerdetailComponent.prototype.onAnimationDone = function ($event) {
        console.log("onanimation done called");
        if (this.counter < this.times) {
            this.toggleImg();
        }
        this.toggleState();
    };
    MarkerdetailComponent.prototype.toggleImg = function () {
        console.log("imagetoggle called");
        if (this.counter < this.times) {
            this.imagesrc = this.imagearray[this.counter];
            this.counter++;
        }
    };
    MarkerdetailComponent.prototype.toggleState = function () {
        console.log("togllestate called");
        if (this.counter < this.times) {
            this.state = this.state === "active" ? "inactive" : "active";
        }
        else
            this.state = "active";
    };
    MarkerdetailComponent.prototype.animat = function () {
        console.log("animat called");
        // this.enableAnimation = true;
        this.isDisabled = false;
        this.counter = 0;
        this.toggleState();
        this.counter = 0;
        this.imagesrc = this.imagearray[this.counter];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        __metadata("design:type", Object)
    ], MarkerdetailComponent.prototype, "currentState", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])("anidiv"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])
    ], MarkerdetailComponent.prototype, "animatediv", void 0);
    MarkerdetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-markerdetail",
            template: __webpack_require__(/*! ./markerdetail.component.html */ "./src/app/markerdetail/markerdetail.component.html"),
            styles: [__webpack_require__(/*! ./markerdetail.component.css */ "./src/app/markerdetail/markerdetail.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
            animations: [_services_animation__WEBPACK_IMPORTED_MODULE_5__["fade"]]
        }),
        __metadata("design:paramtypes", [_services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"],
            angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]])
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

module.exports = "\r\n\r\nagm-map{\r\n  height: 90vh;\r\n\r\n  }\r\n  #mapsidenav{\r\n    width: 30%\r\n  }\r\n  .menu{\r\n    max-width: auto;\r\n    margin-top: 20px;\r\n    text-align: center;\r\n    overflow: hidden;\r\n  }\r\n  nav a{\r\n    width: 100%;\r\n    text-decoration: none;\r\n    background-color: #eee;\r\n  }\r\n  nav p{\r\n    width: 100%;\r\n    text-decoration: none;\r\n    background-color: rgb(233, 247, 234);\r\n    text-align: justify;\r\n    padding: 2px;\r\n  }\r\n  nav a{\r\n    text-align: left;\r\n    font-size: 120%;\r\n    padding: 5px 10px;\r\n\r\n  }\r\n  /* nav *:visited, a:link {\r\n  } */\r\n  nav a.active {\r\n    color: #039be5;\r\n  }\r\n\r\n"

/***/ }),

/***/ "./src/app/my-map/my-map.component.html":
/*!**********************************************!*\
  !*** ./src/app/my-map/my-map.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\r\n  <mat-sidenav id=\"mapsidenav\" #mapsidenav>\r\n    <nav class=\"menu\">\r\n      <a mat-button (click)=\"mapsidenav.toggle()\" style=\"text-align:right;\">Close &nbsp;&nbsp;</a>\r\n      <h3>{{sidenavdata.label}} </h3>\r\n      <p>{{sidenavdata.Disp}}</p>\r\n\r\n      <a mat-button routerLink=\"/markerdetail/{{sidenavdata.type}}/{{sidenavdata.id}}\">\r\n        <i class=\"fas fa-tree\"></i> &nbsp;&nbsp; Click for more Details</a>\r\n\r\n    </nav>\r\n  </mat-sidenav>\r\n\r\n  <mat-sidenav-content>\r\n\r\n    <div class=\"col-md-12\" style=\"padding-left: 2px;padding-right: 2px; \">\r\n\r\n\r\n      <agm-map id=\"AgmMap\" (idle)=\"idle()\" (centerChange)=\"centerChange($event)\" [latitude]=\"lat\" [longitude]=\"lng\"\r\n        [zoom]=\"zoom\" [disableDefaultUI]=\"false\" [zoomControl]=\"true\" (mapClick)=\"mapClicked($event)\"\r\n        (zoomChange)=\"handlezoomchange($event)\">\r\n        #AgmMap\r\n        <agm-marker [visible]=\"anusdata\" *ngFor=\"let m of mapdata; let i = index\"\r\n          (markerClick)=\"mapsidenav.toggle();clickedMarker(m,0)\" [latitude]=\"m.lat\"\r\n          [longitude]=\"m.lng\" [label]=\"\" [markerDraggable]=\"false\"\r\n          (dragEnd)=\"markerDragEnd(m, $event)\" [iconUrl]=\"'http://maps.google.com/mapfiles/ms/icons/green-dot.png'\"\r\n          (mouseOver)=\"mouseOver($event)\">\r\n\r\n          >\r\n\r\n\r\n        </agm-marker>\r\n\r\n\r\n        <agm-marker [visible]=\"anusdata\" *ngFor=\"let m of mapdata2; let i = index\"\r\n          (markerClick)=\"mapsidenav.toggle();clickedMarker(m,1)\" [latitude]=\"m.lat\" [longitude]=\"m.lng\" [label]=\"\"\r\n          [markerDraggable]=\"m.draggable\" (dragEnd)=\"markerDragEnd(m, $event)\"\r\n          [iconUrl]=\"'http://maps.google.com/mapfiles/ms/icons/red-dot.png'\" (mouseOver)=\"mouseOver($event)\">\r\n\r\n          >\r\n\r\n\r\n        </agm-marker>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n <agm-polygon *ngFor=\"let m of mapdata; let i = index\" [paths]=\"m.polygon\" strokeWeight=\".5\"\r\n          (polyClick)=\"clickedMarker(m,0);mapsidenav.toggle()\" [visible]=\"showpoly&& anusdata\" [fillColor]=\"'#70F6F1'\">\r\n\r\n\r\n        </agm-polygon>\r\n\r\n        <agm-polygon *ngFor=\"let m of mapdata2; let i = index\" [paths]=\"m.polygon\" strokeWeight=\".5\"\r\n          (polyClick)=\"clickedMarker(m,1);mapsidenav.toggle()\" [visible]=\"showpoly&& anusdata\" [fillColor]=\"'#6BECAD'\">\r\n\r\n\r\n        </agm-polygon>\r\n\r\n        <!-- <agm-marker\r\n        (markerClick)=\"mapsidenav.toggle();\" [latitude]=\"26.4490\"\r\n        [longitude]=\"67.6424\"\r\n         [iconUrl]=\"'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'\"\r\n        (mouseOver)=\"mouseOver($event)\">\r\n\r\n        >\r\n\r\n        </agm-marker> -->\r\n\r\n\r\n        <agm-data-layer [geoJson]=\"geoJsonObject\"  [style]=\"styleFunc\">\r\n        </agm-data-layer>\r\n\r\n      </agm-map>\r\n\r\n\r\n\r\n    </div>\r\n    <div class=\"col-md-2\">\r\n\r\n\r\n\r\n    </div>\r\n\r\n\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n"

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






//import * as jsondata from '../../assets/lakes.json';
var MyMapComponent = /** @class */ (function () {
    //geoJsonObject: Object =
    function MyMapComponent(db, mainService) {
        this.db = db;
        this.mainService = mainService;
        this.zoom = 5;
        this.mapdata = [];
        this.mapdata2 = [];
        this.showpoly = false;
        // initial center position for the map
        this.lat = 30.3753;
        this.lng = 69.3451;
        this.sidenavdata = {
            description: "",
            label: "",
            id: "",
            type: "",
        };
    }
    MyMapComponent.prototype.styleFunc = function (feature) {
        return ({
            clickable: false,
            fillColor: 'red',
            strokeWeight: 1
        });
    };
    MyMapComponent.prototype.ngOnInit = function () {
        //this.postpoly("Km9QzKUwUTMnypEbEemt",dat);
        var _this = this;
        this.mainService.getCollection("marker")
            .then(function (list) {
            list.forEach(function (element) {
                _this.mapdata.push(element);
            });
        })
            .catch(function (err) {
            console.log(err);
        });
        //getting second marker collection
        this.mainService.getCollection("marker2")
            .then(function (list) {
            list.forEach(function (element) {
                _this.mapdata2.push(element);
            });
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    // @HostListener('window:resize')
    //   onWindowResize() {
    //     console.log("calling on resize");
    //     this.onResize();
    //   }
    MyMapComponent.prototype.onResize = function () {
        var _this = this;
        // resize the container for the google map
        this.renderer.setElementStyle(this.wrapper.nativeElement, "height", (window.innerHeight) + 'px');
        // recenters the map to the resized area.
        this.agmMap.triggerResize().then(function () {
            return _this.agmMap._mapsWrapper.setCenter({ lat: _this.centerLat, lng: _this.centerLng });
        });
    };
    // idle fires after paning or zooming is done.
    // This is where we want to capture the center of the map.
    // This way if the user resizes, the center is preserved.
    MyMapComponent.prototype.idle = function () {
        this.centerLat = this.changeLat;
        this.centerLng = this.changeLng;
    };
    // this event fires whenever any event changes the center. Panning, zooming, or resizing.
    MyMapComponent.prototype.centerChange = function (event) {
        if (event) {
            this.changeLat = event.lat;
            this.changeLng = event.lng;
        }
    };
    MyMapComponent.prototype.clickedMarker = function (clickedMarker, type) {
        console.log("clicked the marker: " + clickedMarker.label);
        this.sidenavdata = clickedMarker;
        this.sidenavdata.type = type;
    };
    MyMapComponent.prototype.handlezoomchange = function (znumber) {
        console.log("now zoom is", znumber);
        if (znumber > 6) {
            this.showpoly = true;
        }
        else if (znumber <= 6)
            this.showpoly = false;
    };
    MyMapComponent.prototype.mouseOver = function ($event) {
        console.log("now mouse is", $event);
    };
    MyMapComponent.prototype.mapClicked = function ($event) {
        return;
    };
    MyMapComponent.prototype.markerDragEnd = function (m, $event) {
        console.log('dragEnd', m, $event);
    };
    MyMapComponent.prototype.onPolyclick = function (polygonclicked) {
        console.log("this poly was click", polygonclicked);
        this.sidenavdata = polygonclicked;
    };
    MyMapComponent.prototype.convertToLatLngLiteral = function (array) {
        var result = new Array();
        for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
            var coords = array_1[_i];
            result.push({
                lat: coords[1],
                lng: coords[0]
            });
        }
        console.log("conversion success");
        return result;
    };
    MyMapComponent.prototype.postpoly = function (id, data) {
        console.log("passing data to lat-lng");
        var result = this.convertToLatLngLiteral(data);
        this.db.collection('marker2').doc(id).update({
            polygon: result
        });
    };
    MyMapComponent.prototype.postarray = function (id, data) {
        this.db.collection('marker2').doc(id).update({
            imgyear: data
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('AgmMap'),
        __metadata("design:type", Object)
    ], MyMapComponent.prototype, "agmMap", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('wrapper'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MyMapComponent.prototype, "wrapper", void 0);
    MyMapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-map',
            template: __webpack_require__(/*! ./my-map.component.html */ "./src/app/my-map/my-map.component.html"),
            styles: [__webpack_require__(/*! ./my-map.component.css */ "./src/app/my-map/my-map.component.css")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"]])
    ], MyMapComponent);
    return MyMapComponent;
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
        this.bgUrl = 'https://backgroundcheckall.com/wp-content/uploads/2017/12/background-images-for-registration-page-10.jpg';
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

/***/ "./src/app/title/title.component.css":
/*!*******************************************!*\
  !*** ./src/app/title/title.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2{\r\n\r\n    text-align: center; color:#ffffff; margin-top:8%;\r\n    text-transform: uppercase;\r\n}\r\nh3{\r\n    text-align: center; color:#ffffff; margin:10px auto;\r\n    text-transform: uppercase;\r\n}\r\nh5{\r\n  text-align: center; color:#ffffff;\r\n\r\n}\r\n.slogan{\r\n\r\n  background-color:#333300;\r\n  padding-top: 4%;\r\n  padding-bottom: 4%;\r\n  margin-bottom: 4%;\r\n}\r\np{\r\n\r\n    font: 15px/24px ,Verdana, Geneva, sans-serif;\r\n    color: black;\r\n    font-size: 20px;\r\n}\r\n.stat{\r\n\r\n\r\n    background-color:#66663e;\r\n    padding:2%;\r\n    margin-bottom: 4%;\r\n    box-sizing: border-box;\r\n    align-content: center;\r\n    overflow:hidden;\r\n}\r\n"

/***/ }),

/***/ "./src/app/title/title.component.html":
/*!********************************************!*\
  !*** ./src/app/title/title.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<mat-carousel slides=3\n[loop]='true'\n[hideArrows]='false'>\n  <mat-carousel-slide image='https://lh6.googleusercontent.com/proxy/LPVa1enyku2f8DwStNJGCrLXelyxqO260DBvRod9l1kuzIdKilC6UeZy2AQ7zipRszDobf3ENOF8zfTmUg66Mj_ns_LmCK7-Wf01tTzdvVJNiwEdIpjdSTP3aj5kN4o=s0-d'\n\n\n  >\n  <h2  >Let’s save the greenery for sustainable climate and humanity</h2>\n    <a routerLink=\"/map\"><h3 >Explore our project</h3></a>\n\n\n  </mat-carousel-slide>\n\n  <mat-carousel-slide image='https://images3.alphacoders.com/112/thumb-1920-112487.jpg'>\n<h2 >Making KPK greener and Pakistan brighter</h2>\n  </mat-carousel-slide>\n  <mat-carousel-slide image='https://www.bestfunforall.com/better/imgs/Forest%20nice%20HD%20wallpaper%20%207.jpg'>\n\n  <h2 > Advanced solutions to monitor and overcome deforestation</h2>\n\n\n  </mat-carousel-slide>\n</mat-carousel>\n\n\n <div class=\"slogan\"><h3 style=\"margin: 0 auto;\"> Save trees. Save Planet. Save Humanity</h3></div>\n\n<div class=\"container\" >\n\n\n<p>Forests are like green gold of our country. Pakistan has lost a quarter of its natural\n forest cover over the past two decades and is currently experiencing a deforestation rate\n  of 2 percent a year — one of the highest in the world. This in turn has, intensified the\n  temperature, polluted the atmosphere, and worsened the lives of living beings. Pakistan is\n  in a state of ‘Green Emergency’. The declining forestation calls\n for some immediate measures to monitor and take steps to preserve greenery in our homeland.</p>\n\n\n\n</div>\n<div class=\"stat\">\n<div class=\"col-4\"><h5 style=\" text-transform: none; margin-top:0%;\">\n\n  Deforested Land <br> </h5><h2  style=\" text-transform: none; \"> 150 million Hectares</h2>\n\n</div>\n\n\n<div class=\"col-4\" ><h5  style=\" text-transform: none; margin-top:0%\">\n  Restored Land <br></h5><h2  style=\" text-transform: none;\">384,000 Hectares</h2>\n\n</div>\n<div class=\"col-4\"><h5 style=\" text-transform: none; margin-top:0%\">\n\n  Trees Being Monitored <br> </h5><h2  style=\" text-transform: none;\"> 150 million Hectares</h2>\n\n</div>\n\n\n\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/title/title.component.ts":
/*!******************************************!*\
  !*** ./src/app/title/title.component.ts ***!
  \******************************************/
/*! exports provided: TitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleComponent", function() { return TitleComponent; });
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

var TitleComponent = /** @class */ (function () {
    function TitleComponent() {
    }
    TitleComponent.prototype.ngOnInit = function () {
    };
    TitleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-title',
            template: __webpack_require__(/*! ./title.component.html */ "./src/app/title/title.component.html"),
            styles: [__webpack_require__(/*! ./title.component.css */ "./src/app/title/title.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TitleComponent);
    return TitleComponent;
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