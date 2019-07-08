import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pt13311';

  students = [
  	{
  		id: 1,
  		name: 'Que Anh',
  		age: 60
  	},{
  		id: 2,
  		name: 'Tien',
  		age: 21
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
