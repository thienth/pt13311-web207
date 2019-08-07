import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../services/category.service';
import {Router, ActivatedRoute} from "@angular/router"
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
		name: "{{cate.name}}",
		image: "{{cate.image}}"
	}
	id : "0";
	ngOnInit() {
		// this.id = this.route.snapshot.paramMap.get('id');
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
