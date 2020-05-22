import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DataInteraction';

  studentFromRegister ;
  students: [{name, age}] = [{name: 'Mahmoud', age: 25}];

  reciveData(data){
    this.studentFromRegister = data;
    this.students.push(this.studentFromRegister);
    console.log(this.students);
  }
}
