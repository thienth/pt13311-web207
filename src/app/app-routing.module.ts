import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './screen/home/home.component';
import {CateDetailComponent} from './screen/cate-detail/cate-detail.component';
import { CategoryAddComponent } from './screen/category-add/category-add.component';
import { CateEditFormComponent } from './screen/cate-edit-form/cate-edit-form.component';
import { ProEditFormComponent } from './screen/pro-edit-form/pro-edit-form.component';


const routes: Routes = [
	{
		path: "",
		component: HomeComponent
	},
	{
		path: "add-category",
		component: CategoryAddComponent
	},
	{
		path: "edit-category",
		component: CateEditFormComponent
	},
	
	{
		path: "edit-products",
		component: ProEditFormComponent
	},
	{
		path: "detail/:id",
		component: CateDetailComponent
	},
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
