import { Component, OnInit } from '@angular/core';
import { StudentAPIService } from 'src/app/services/student-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  constructor(private service: StudentAPIService, activatedRoute: ActivatedRoute, private route: Router) {
    this.id = activatedRoute.snapshot.params.id;
  }
  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }
  std;//: {ID: number, Name: string, Age: number, Email: string, Image: any};
  id;
  subscriber;
  editable = false;

  get isEditable(){
    return this.editable;
  }
    
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
  imageSrc;

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
    this.subscriber = this.service.getStudent(this.id).subscribe(
      (data) => {
        if(data){
          this.std = data;
          this.imageSrc = `${this.service.domain}${this.std.Image}`;
        }        
      },
      (err) => {
        alert(err);
      }
    );
  }

  cancel(){
    this.editable = false;
    this.imageSrc = `${this.service.domain}${this.std.Image}`;
  }

  update(){
    this.editable = true;
    this.regForm.controls.name.setValue(this.std.Name);
    this.regForm.controls.age.setValue(this.std.Age);
    this.regForm.controls.email.setValue(this.std.Email);    
  }

  edit(){
    let change = false;
    if(this.selectedFile)
    {
      change = true;
    }
    this.std = {
      ID: this.id,
      Name : this.regForm.controls.name.value ,
      Age : this.regForm.controls.age.value,
      Email : this.regForm.controls.email.value,
      Image: this.selectedFile || this.std.Image,
      imageChanged: change
      };
      if(this.isFormValid)
      {
        console.log(this.std);
        this.subscriber = this.service.editStudent(this.id, this.std).subscribe(
          (success) => {
            this.editable = false;
          },
          (err) => {
            console.log(err);
          }
        );

      }
  }

  delete(){
    this.subscriber = this.service.deleteStudent(this.id).subscribe(
      (success) => {
        this.route.navigateByUrl( '/students');
      },
      (err) => {
        console.log(err);
      }
    );
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
  return this.imageSrc != 'assets/images.jpg';
}

get isFormValid(){
  return this.ageStatus && this.emailStatus && this.nameStatus && this.imageStatus ;
}
//#endregion
}
