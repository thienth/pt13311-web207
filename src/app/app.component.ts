import { Component, OnInit } from '@angular/core';
import {CategoryService} from './services/category.service';
import {ProductService} from './services/product.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private cateService: CategoryService, proService: ProductService){

  }

  tmpCate = {
    id: 0,
    name: "",
    avatar: ""
  }

  ngOnInit() {
    this.cateService.getCategoryList()
        .subscribe((data) => {
          this.category = data;
        });

   
  }

  category = [];
  title = 'pt13311';

  addCategory = () => {
     this.tmpCate.id = this.getNewId();
     this.cateService.addCategory(this.tmpCate).subscribe((data) => {}); 
     this.category.unshift({...this.tmpCate});
     this.clear();
  }
  removeCategory(cate){
    this.cateService.removeCategory(cate.id)
        .subscribe((data) => {
          console.log(data);
          this.category = this.category.filter(
            (item) => item.id != cate.id
          )
        });
  } 
  editCategory(cate){
    this.tmpCate={...cate};
  }
  
  clear = () => {
    this.tmpCate = {
      id: 0,
      name: '',
      avatar: '',
    };
  }

  private getNewId = () => {
    let maxId = 0;
    for (let i = 0; i < this.category.length; i++) {
      maxId = this.category[i].id;
    }
    return Number(maxId) + 1;
  }
}






