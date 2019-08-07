import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from "./screens/home/home.component";
import {CateDetailComponent} 
		from "./screens/cate-detail/cate-detail.component";
import {CategoryAddComponent} 
		from "./screens/category-add/category-add.component";
import{CategoryEditComponent} 
		from"./screens/category-edit/category-edit.component";
import{HotelComponentComponent}
 from "./hotel-component/hotel-component.component";

const routes: Routes = [
	{
		path: "",
		component: HomeComponent
	},
	{
		path: "category/add",
		component: CategoryAddComponent
	},
	{
		path: "detail/:id",
		component: CateDetailComponent
	},
	{
		path: "category/edit/:id",
		component: CategoryEditComponent
	},
	{
		path:"hotel",
		component: HotelComponentComponent
		
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
