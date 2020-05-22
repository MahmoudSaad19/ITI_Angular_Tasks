import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styles: [
  ]
})
export class StudentDetailsComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  goHome(){
    this.route.navigateByUrl( '/students');
  }
}
