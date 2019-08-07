import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-cate-detail',
  templateUrl: './cate-detail.component.html',
  styleUrls: ['./cate-detail.component.css']
})
export class CateDetailComponent implements OnInit {

  constructor(
  		private route: ActivatedRoute,
  		private router: Router
  		) { }
  id = "0";
  ngOnInit() {
  	this.id =  this.route.snapshot.paramMap.get('id');
  }

}
