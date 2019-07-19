import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cate-item',
  templateUrl: './cate-item.component.html',
  styleUrls: ['./cate-item.component.css']
})
export class CateItemComponent implements OnInit {
  @Input() cate: any;
  constructor() { }

  ngOnInit() {

  }

}
