import { Component, OnInit } from '@angular/core';
import { StudentAPIService } from 'src/app/services/student-api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private service: StudentAPIService, private route: Router) { }

  defaultImage = 'assets/why_angular_sucks.png';
  subscriber;
  std: { Name: string, Age: number, Email: string, Image} = {
    Name : 'Angular hell' ,
    Age : 18,
    Email : 'typescript@angular.hell',
    Image: null
    };
    
  regForm = new FormGroup({
    name : new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
    ]),
    age: new FormControl(null, [
      Validators.required,
      Validators.max(60),
      Validators.min(18),
    ]),
    email : new FormControl(null, [ Validators.pattern( '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$' ) , Validators.required ])
  });

  selectedFile = null;
  imageSrc: any = `${this.defaultImage}`;

  pic(e){
    this.selectedFile = e.target.files[0];
    
    //Show image preview
    var reader = new FileReader();
    reader.onload = (event) => {
      this.imageSrc = event.target.result;
    }
    reader.readAsDataURL(this.selectedFile);
  }

  ngOnInit(): void {
  }

  clearinputs(){
    this.regForm.controls.name.setValue('');
    this.regForm.controls.age.setValue('');
    this.regForm.controls.email.setValue('');
    this.imageSrc = this.defaultImage;
  }

  add(){
    
    this.std = {
      Name : this.regForm.controls.name.value ,
      Age : this.regForm.controls.age.value,
      Email : this.regForm.controls.email.value,
      Image: this.selectedFile
    };

    console.log(this.std);
    if ( this.isFormValid) {
      this.service.addStudent(this.std).subscribe(
        (data) => {
          this.clearinputs();
          document.getElementById('closemodal').click();
          this.route.navigateByUrl( '/students');
          location.reload();
        },
        (err) => {
          alert('Not added successfully ' + err);
          console.log(err);
        }
      );
    }
  }

//#region form validation status properties
get ageStatus() {
  return this.regForm.controls.age.valid;
}

get nameStatus(){
    return this.regForm.controls.name.valid;
}

get emailStatus(){
  return this.regForm.controls.email.valid;
}

get imageStatus(){
  return this.imageSrc != this.defaultImage;
}

get isFormValid(){
  return this.ageStatus && this.emailStatus && this.nameStatus && this.imageStatus ;
}
//#endregion
}
