import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../services/category.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private cateService: CategoryService) { }
  categories = [];
  ngOnInit() {
  	this.cateService.getCategoryList()
        .subscribe((data) => {
          this.categories = data;
        });
  }

  removeCategory(cate){
  	this.cateService.removeCategory(cate.id)
  					.subscribe(data => {
  						console.log(data);
  						this.categories = this.categories.filter(obj => obj.id != cate.id);
  					})
  }

}
