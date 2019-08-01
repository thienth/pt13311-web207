import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../services/category.service';
import {Router, ActivatedRoute} from "@angular/router"
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  constructor(private cateService: CategoryService,
  				private route: ActivatedRoute,
  				private router: Router) { }
  model = {
  	name: new FormControl(''),
  	image: new FormControl('')
  }
  ngOnInit() {
  	let cateId = this.route.snapshot.params.id;
  	this.cateService.getCategoryById(cateId)
  		.subscribe(data => {
  			this.model.name.setValue(data.name);
  			this.model.image.setValue(data.image);
  		});
  }

}
