import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  courseName;
  authorName;
  price;
  rating;
  tagList = [];
  tagName;
  description;


  constructor(private courseSvc: CoursesService, private route: Router) { }

  ngOnInit(): void { }

  addTag() {
    this.tagList.push(this.tagName);
    this.tagName = '';
  }

  addNewCourse() {
    const obj = {
      courseName: this.courseName,
      authorName: this.authorName,
      price: this.price,
      rating: this.rating,
      tags: this.tagList,
      description: this.description
    };
    this.courseSvc.saveCourse(obj)
      .subscribe(
        resp => {
          this.route.navigate(['findnewcourse']);
        },
        err => {
          console.log("Some Error Occured" + err);
        }
      )
  }

}
