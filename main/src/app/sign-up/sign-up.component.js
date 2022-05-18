"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignUpComponent = void 0;
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
let SignUpComponent = class SignUpComponent {
    constructor(fb) {
        this.fb = fb;
        this.registrationForm = this.fb.group({
            firstName: ['adham', [forms_1.Validators.required]],
            lastName: ['azzet', [forms_1.Validators.required]],
            email: ['adham@gmail', [forms_1.Validators.required, forms_1.Validators.email]],
            password: ['default', [forms_1.Validators.required]],
        });
    }
    ngOnInit() {
    }
    resetData() {
        this.registrationForm.setValue({
            firstName: (''),
            lastName: (''),
            email: (''),
            password: (''),
        });
    }
    submitData() {
        if (this.registrationForm.valid) {
            console.log(this.registrationForm.value);
            localStorage.setItem('firstName', this.registrationForm.value.firstName);
            localStorage.setItem('lastName', this.registrationForm.value.lastName);
            localStorage.setItem('email', this.registrationForm.value.email);
            localStorage.setItem('password', this.registrationForm.value.password);
            window.location.href = 'signin';
        }
        else {
            alert('fill the data first');
        }
    }
    // getter methods for all formControl
    get getFirstName() {
        return this.registrationForm.get('firstName');
    }
    get getLastName() {
        return this.registrationForm.get('lastName');
    }
    get getEmail() {
        return this.registrationForm.get('email');
    }
    get getPassword() {
        return this.registrationForm.get('password');
    }
};
SignUpComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-sign-up',
        templateUrl: './sign-up.component.html',
        styleUrls: ['./sign-up.component.css']
    })
], SignUpComponent);
exports.SignUpComponent = SignUpComponent;
