import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor() { }

inputName: string;
  inputAge: number;


@Output() myEvent = new EventEmitter();

  addStudent() {
    let student = {
      name: this.inputName,
      age: this.inputAge
    };
    this.myEvent.emit(student);
    console.log(student);
    this.inputName = '';
    this.inputAge = null;
    // this.students.push(student);
    // console.log(this.students);
  }
}
