import { Component, OnInit, OnDestroy } from '@angular/core';
import { StudentAPIService } from 'src/app/services/student-api.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit, OnDestroy {

  constructor(private service: StudentAPIService) {   }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }
  students;
  subscriber;

  ngOnInit(): void {

    this.subscriber = this.service.getStudents().subscribe(
      (data) => {
        this.students = data;
        console.log(this.students);
      },
      (err) => {
        alert(err);
      }
    );  
  }
}
