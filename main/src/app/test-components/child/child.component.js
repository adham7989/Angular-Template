"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChildComponent = void 0;
const core_1 = require("@angular/core");
let ChildComponent = class ChildComponent {
    constructor() {
        this.age = 22;
        this.newItemEvent = new core_1.EventEmitter();
        this.loggedIn = false;
    }
    ngOnInit() {
    }
    addNewItem(value) {
        this.newItemEvent.emit(value);
    }
    set loggedInSetter(value) {
        this.loggedIn = value;
        if (value == true) {
            this.message = 'Welcome Back adham ';
        }
        else {
            this.message = 'please log in ';
        }
    }
    get loggedInGetter() {
        return this.loggedIn;
    }
};
__decorate([
    (0, core_1.Input)()
], ChildComponent.prototype, "userName", void 0);
__decorate([
    (0, core_1.Output)()
], ChildComponent.prototype, "newItemEvent", void 0);
__decorate([
    (0, core_1.Input)()
], ChildComponent.prototype, "loggedInSetter", null);
ChildComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-child',
        templateUrl: './child.component.html',
        styleUrls: ['./child.component.css']
    })
], ChildComponent);
exports.ChildComponent = ChildComponent;
