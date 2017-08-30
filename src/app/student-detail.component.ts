import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Student }        from './student';
import { StudentService } from './student.service';

@Component({
  selector: 'student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: [ './student-detail.component.css' ]
})
export class StudentDetailComponent implements OnInit {
  student: Student;

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.studentService.getStudent(+params.get('id')))
      .subscribe(student => this.student = student);
  }

  save(): void {
    this.studentService.update(this.student)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}