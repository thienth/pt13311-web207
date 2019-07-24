import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from "./screens/home/home.component";
import {CateDetailComponent} 
		from "./screens/cate-detail/cate-detail.component";

const routes: Routes = [
	{
		path: "",
		component: HomeComponent
	},
	{
		path: "detail/:id",
		component: CateDetailComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
