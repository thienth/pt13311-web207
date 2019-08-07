import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cate-edit-form',
  templateUrl: './cate-edit-form.component.html',
  styleUrls: ['./cate-edit-form.component.css']
})
export class CateEditFormComponent implements OnInit {

	@Input() editItem: any;
  constructor() { }

  ngOnInit() {
  }

}
