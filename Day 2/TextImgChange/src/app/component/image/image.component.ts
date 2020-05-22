import { Component } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent {
    imgSrc = 'assets/images/';
    imgExtention = '.jpg'; 
    counter = 1;
    
    nextImg(){
        this.counter = this.counter == 4 ? 1 : ++this.counter;
     }

     prevImg(){
      this.counter = this.counter == 1 ? 4 : --this.counter;
   }
}
