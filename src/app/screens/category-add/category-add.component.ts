import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../services/category.service';
import {Router} from "@angular/router"
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
  }

  get name() { return this.model.get('name'); }
  get image() { return this.model.get('image'); }

  save(){
    if(this.model.valid){
      this.cateService.addCategory(this.model.value)
            .subscribe(data => {
              console.log(data);
              this.model.value.name = ""
              this.model.value.image = ""
              this.router.navigate(['/']);
            })
    }else{
      this.validateAllFormFields(this.model); //{7}
    }
  }

  validateAllFormFields(formGroup: FormGroup) {         //{1}
    Object.keys(formGroup.controls).forEach(field => {  //{2}
      const control = formGroup.get(field);             //{3}
      if (control instanceof FormControl) {             //{4}
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {        //{5}
        this.validateAllFormFields(control);            //{6}
      }
    });
  }

}
