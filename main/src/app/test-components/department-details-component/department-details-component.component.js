"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentDetailsComponentComponent = void 0;
const core_1 = require("@angular/core");
let DepartmentDetailsComponentComponent = class DepartmentDetailsComponentComponent {
    constructor(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        let id = this.activatedRoute.snapshot.params['id'];
        this.departmentID = id;
        //  let course = this.activatedRoute.snapshot.params['course'];
        //  this.courseName = course;
    }
    // ngOnInit(): void {
    //     this.activatedRoute.params.subscribe((params : Params)=> {
    //       let id = parseInt(params['id']);
    //       this.departmentID = id ;
    //     }
    //     )
    // }
    goPrevious() {
        let previousId = (this.departmentID = this.departmentID - 1);
        this.router.navigate(['/departments', previousId]);
    }
    goNext() {
        let nextId = (this.departmentID = this.departmentID + 1);
        this.router.navigate(['/departments', nextId]);
    }
};
DepartmentDetailsComponentComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-department-details-component',
        templateUrl: './department-details-component.component.html',
        styleUrls: ['./department-details-component.component.css']
    })
], DepartmentDetailsComponentComponent);
exports.DepartmentDetailsComponentComponent = DepartmentDetailsComponentComponent;
