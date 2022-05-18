"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BindingComponent = void 0;
const core_1 = require("@angular/core");
let BindingComponent = class BindingComponent {
    constructor() {
        this.data = "binding data from class to template";
        this.imgUrl = "https://picsum.photos/200";
        this.counter = 0;
        this.name = "adham";
    }
    ngOnInit() {
    }
    increament() {
        this.counter++;
    }
    set customerName(value) {
        this.custName = value;
        if (value == 'adham')
            alert('hello adham');
    }
    get customerName() {
        return this.custName;
    }
};
BindingComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-binding',
        templateUrl: './binding.component.html',
        styleUrls: ['./binding.component.css']
    })
], BindingComponent);
exports.BindingComponent = BindingComponent;
