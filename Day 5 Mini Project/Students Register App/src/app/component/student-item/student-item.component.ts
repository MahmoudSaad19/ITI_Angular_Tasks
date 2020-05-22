import { Component, OnInit, Input } from '@angular/core';
import { StudentAPIService } from 'src/app/services/student-api.service';

@Component({
  selector: 'app-student-item',
  templateUrl: './student-item.component.html',
  styleUrls: ['./student-item.component.css']
})
export class StudentItemComponent implements OnInit {

  constructor(private service: StudentAPIService) { }
  
  @Input()
  stdItem;
  ngOnInit(): void {    
    this.stdItem.Image = `${this.service.domain}${this.stdItem.Image}`;
  }

  details(){
    document.getElementById(`std${this.stdItem.ID}`).click();
  }
}
