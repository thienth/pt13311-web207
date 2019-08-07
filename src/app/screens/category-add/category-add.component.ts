import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Router } from "@angular/router";
import { Validators, FormGroup, FormControl } from '@angular/forms';
@Component({
	selector: 'app-category-add',
	templateUrl: './category-add.component.html',
	styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {

	constructor(private cateService: CategoryService,
		private router: Router) { }
	model = new FormGroup({
		'name': new FormControl('', [
			Validators.required,
			Validators.minLength(4)
		]),
		'image': new FormControl('', [
			Validators.required
		])
	});
	ngOnInit() {
		get name() { return this.model.get('name'); }
		get Image() { return this.model.get('image'); }

	}

	save() {
		this.cateService.addCategory(this.model.value)
			.subscribe(data => {
				console.log(data);
				this.model.value.name = ""
				this.model.value.image = ""
				this.router.navigate(['/']);
			})
	}

}
