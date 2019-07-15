import { Component, OnInit } from '@angular/core';
import {CategoryService} from './services/category.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private cateService: CategoryService){

  }

  ngOnInit() {
    this.cateService.getCategoryList()
        .subscribe((data) => {
          this.category = data;
        });
  }
  category = [];
  title = 'pt13311';

  removeCategory(cate){
    this.cateService.removeCategory(cate.id)
        .subscribe((data) => {
          console.log(data);
          this.category = this.category.filter(
            (item) => item.id != cate.id
          )
        });
  } 


}






