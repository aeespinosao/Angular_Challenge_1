import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  uri1:string = 'https://api.adorable.io/avatars/500/';
  uri2:string = '@adorable.io.png';
  number:number = Math.random();
  constructor() {
    setInterval(() => { this.setface(); }, 2000);
  }

  setface = function () {
    this.number = Math.random();
  }

}
