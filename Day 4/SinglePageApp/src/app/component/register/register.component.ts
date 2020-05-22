import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [],
})
export class RegisterComponent implements OnInit {
  constructor() {}

  regForm = new FormGroup({
    name : new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
    ]),
    age: new FormControl(null, [
      Validators.required,
      Validators.max(60),
      Validators.min(18),
    ]),
    // tslint:disable-next-line: max-line-length
    email : new FormControl(null, [ Validators.pattern( '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$' ) , Validators.required ])
  });

  @Output() myEvent = new EventEmitter();

  ngOnInit(): void {}
  get ageStatus() {
    return this.regForm.controls.age.valid;
  }

  get nameStatus(){
      return this.regForm.controls.name.valid;
  }

  get emailStatus(){
    return this.regForm.controls.email.valid;
}

  success(){
    if ( this.emailStatus && this.ageStatus && this.nameStatus) {
      alert('registered succesfully');
    }
  }
}
