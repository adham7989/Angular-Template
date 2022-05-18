"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignInComponent = void 0;
const core_1 = require("@angular/core");
// declare function login() : any
let SignInComponent = class SignInComponent {
    constructor() {
        this.user = {};
        this.mail = '';
        this.password = '';
    }
    ngOnInit() {
    }
    submitData() {
        // console.log(`email :- ${this.mail} - password :- ${this.password}`);
        if (localStorage.getItem('email') == this.mail && localStorage.getItem('password') == this.password) {
            alert('login success');
            window.location.href = 'home';
        }
        else if (localStorage.getItem('email') == null || localStorage.getItem('password') == null) {
            alert('You Have to Register First');
            window.location.href = 'signup';
        }
        else if (localStorage.getItem('email') != this.mail) {
            alert('this email is not found');
        }
        else if (localStorage.getItem('password') != this.password) {
            alert('password is incorrect');
        }
    }
    resetData() {
        this.mail = '';
        this.password = '';
    }
};
SignInComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-sign-in',
        templateUrl: './sign-in.component.html',
        styleUrls: ['./sign-in.component.css'],
    })
], SignInComponent);
exports.SignInComponent = SignInComponent;
