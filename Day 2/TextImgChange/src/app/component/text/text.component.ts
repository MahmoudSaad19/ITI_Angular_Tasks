import { Component } from '@angular/core';

@Component({
    selector: 'app-text',
    templateUrl: './text.component.html',
    styleUrls: ['./text.component.css']
})
export class TextComponent {
    title = 'Type something cool!';

    keypress(e){
        this.title = e.target.value;
    }

    change(){
        this.title = 'This is my title of project';
    }
}
