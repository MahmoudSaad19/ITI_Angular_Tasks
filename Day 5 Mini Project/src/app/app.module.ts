import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './component/students/students.component';
import { StudentItemComponent } from './component/student-item/student-item.component';
import { StudentDetailsComponent } from './component/student-details/student-details.component';
import { AboutComponent } from './component/about/about.component';
import { ErrorComponent } from './component/error/error.component';
import { AddStudentComponent } from './component/add-student/add-student.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentItemComponent,
    StudentDetailsComponent,
    AboutComponent,
    ErrorComponent,
    AddStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
