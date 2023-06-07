import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '03-Country-App';
  show:boolean = false;

  toggleBar(){
    this.show = !this.show;
  }
}
