"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var student_service_1 = require("./student.service");
var StudentDetailComponent = (function () {
    function StudentDetailComponent(studentService, route, location) {
        this.studentService = studentService;
        this.route = route;
        this.location = location;
    }
    StudentDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) { return _this.studentService.getStudent(+params.get('id')); })
            .subscribe(function (student) { return _this.student = student; });
    };
    StudentDetailComponent.prototype.save = function () {
        var _this = this;
        this.studentService.update(this.student)
            .then(function () { return _this.goBack(); });
    };
    StudentDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    return StudentDetailComponent;
}());
StudentDetailComponent = __decorate([
    core_1.Component({
        selector: 'student-detail',
        templateUrl: './student-detail.component.html',
        styleUrls: ['./student-detail.component.css']
    }),
    __metadata("design:paramtypes", [student_service_1.StudentService,
        router_1.ActivatedRoute,
        common_1.Location])
], StudentDetailComponent);
exports.StudentDetailComponent = StudentDetailComponent;
//# sourceMappingURL=student-detail.component.js.map