import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../services/category.service';
import {Router} from "@angular/router"
@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {

  constructor(private cateService: CategoryService,
  				private router: Router) { }
  model = {
  	name: "",
  	image: ""
  }

  ngOnInit() {
  }

  save(){
  	this.cateService.addCategory({...this.model})
  					.subscribe(data => {
  						console.log(data);
  						this.model = {
  							name: "",
  							image: ""
  						};
  						this.router.navigate(['/']);
  					})
  }

}
