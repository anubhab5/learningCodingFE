import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-search-courses',
  templateUrl: './search-courses.component.html',
  styleUrls: ['./search-courses.component.css']
})
export class SearchCoursesComponent implements OnInit {

  courseToRegister;

  constructor(private courseSvc: CoursesService) { }

  ngOnInit(): void {
    this.getCourseList();
  }

  getCourseList() {
    this.courseSvc.getCourses().subscribe(
      resp => {
        this.courseToRegister = resp;
      },
      err => {
        debugger
      }
    )
  }

}
