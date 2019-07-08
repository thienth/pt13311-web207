import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular';

  students = [
  	{
  		id: 1,
  		name: 'Viet Anh',
  		age: 30
  	},{
  		id: 2,
  		name: 'Thuy Linh',
  		age: 50
  	},{
  		id: 3,
  		name: 'Chung',
  		age: 10
  	},{
  		id: 4,
  		name: 'Xuan Son',
  		age: 18
  	}
  ];
}
