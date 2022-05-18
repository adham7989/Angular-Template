"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParentComponent = void 0;
const core_1 = require("@angular/core");
const child_component_1 = require("../child/child.component");
// import { ChildComponent } from '../child/child.component';
let ParentComponent = class ParentComponent {
    constructor() {
        // for @input
        this.name = "Msg from child component ";
        // for @output
        this.items = ['item1', 'item2', 'item3'];
        // for getters&setters 
        this.userLoggedIn = true;
    }
    ngAfterViewInit() {
        this.nameElementRef.nativeElement.focus();
        console.log(this.nameElementRef);
        // this.childComponentRef.message = 'message from parent component ' ;
    }
    ngOnInit() {
    }
    addNewItem(newItem) {
        this.items.push(newItem);
    }
};
__decorate([
    (0, core_1.ViewChild)('nameRef')
], ParentComponent.prototype, "nameElementRef", void 0);
__decorate([
    (0, core_1.ViewChild)(child_component_1.ChildComponent)
], ParentComponent.prototype, "childComponentRef", void 0);
ParentComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-parent',
        templateUrl: './parent.component.html',
        styleUrls: ['./parent.component.css']
    })
], ParentComponent);
exports.ParentComponent = ParentComponent;
