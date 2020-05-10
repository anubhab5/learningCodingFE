import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserEnrolledCourseComponent } from './components/user-enrolled-course/user-enrolled-course.component';
import { SearchCoursesComponent } from './components/search-courses/search-courses.component';
import { NoResultComponent } from './components/no-result/no-result.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const routes: Routes = [
  {
    path: "",
    component: DashboardComponent
  },
  {
    path: "mycourses",
    component: UserEnrolledCourseComponent
  },
  {
    path: "findnewcourse",
    component: SearchCoursesComponent
  },
  {
    path: "addnewcourse",
    component: AddCourseComponent
  },
  {
    path: "**",
    component: NoResultComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
