import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../services/category.service';
import {Router, ActivatedRoute} from "@angular/router"
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-category-edit',
  templateUrl: '../category-add/category-add.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  constructor(private cateService: CategoryService,
  				private route: ActivatedRoute,
  				private router: Router) { }
  model = new FormGroup({
    name: new FormControl(''),
    image: new FormControl('')
  });
  ngOnInit() {
  	let cateId = this.route.snapshot.params.id;
  	this.cateService.getCategoryById(cateId)
  		.subscribe(data => {
  			this.model.setValue({
  				name: data.name,
  				image: data.image
  			})
  		});
  }

  save(){
  	alert('save function cua edit');
  }

}
