import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchCoursesComponent } from './components/search-courses/search-courses.component';
import { UserEnrolledCourseComponent } from './components/user-enrolled-course/user-enrolled-course.component';
import { NoResultComponent } from './components/no-result/no-result.component';
import { CardviewComponent } from './components/cardview/cardview.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchCoursesComponent,
    UserEnrolledCourseComponent,
    NoResultComponent,
    CardviewComponent,
    AddCourseComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
