import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpSvc: HttpClient) { }

  getCourses() {
    return this.httpSvc.get("/api/courses");
  }

  saveCourse(courseObj) {
    return this.httpSvc.post("/api/courses", courseObj);
  }
}
