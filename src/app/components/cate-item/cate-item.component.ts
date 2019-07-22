import { Component, OnInit, Input,
		Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cate-item',
  templateUrl: './cate-item.component.html',
  styleUrls: ['./cate-item.component.css']
})
export class CateItemComponent implements OnInit {


	@Input() itemCate: any;
	@Output() removeEvent = new EventEmitter<any>();
	@Output() editEvent = new EventEmitter<any>();
	
	constructor() { }

	ngOnInit() {

	}

	childOnRemove(rmObj){
		this.removeEvent.emit(rmObj);
	}

	childOnEdit(editObj){
		this.editEvent.emit(editObj);
	}

}
