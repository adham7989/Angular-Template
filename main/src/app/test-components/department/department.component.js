"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentComponent = void 0;
const core_1 = require("@angular/core");
let DepartmentComponent = class DepartmentComponent {
    constructor(router) {
        this.router = router;
        this.departments = [
            { "id": 1, "course": "Angular" },
            { "id": 2, "course": "React" },
            { "id": 3, "course": "Node" },
            { "id": 4, "course": "CSS3" },
        ];
    }
    onSelect(dept) {
        this.router.navigate(['/departments', dept.id]);
    }
    ngOnInit() {
    }
};
DepartmentComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-department',
        templateUrl: './department.component.html',
        styleUrls: ['./department.component.css']
    })
], DepartmentComponent);
exports.DepartmentComponent = DepartmentComponent;
