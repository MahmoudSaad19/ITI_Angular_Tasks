import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './component/students/students.component';
import { AboutComponent } from './component/about/about.component';
import { ErrorComponent } from './component/error/error.component';
import { StudentDetailsComponent } from './component/student-details/student-details.component';


const routes: Routes = [
  {path: '', redirectTo: 'students', pathMatch: 'full'},
  {path: 'students', component: StudentsComponent},
  {path: 'students/:id', component: StudentDetailsComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
