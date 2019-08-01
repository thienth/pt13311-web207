import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../services/category.service';
import {Router} from "@angular/router"
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {

  constructor(private cateService: CategoryService,
  				private router: Router) { }
  model = new FormGroup({
    name: new FormControl(''),
    image: new FormControl('')
  });

  ngOnInit() {
  }

  save(){
  	this.cateService.addCategory(this.model.value)
  					.subscribe(data => {
  						console.log(data);
  						
  						this.router.navigate(['/']);
  					})
  }

}
