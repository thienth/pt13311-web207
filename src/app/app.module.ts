// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { HttpClientModule }    from '@angular/common/http';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//   ],
//   imports: [
//     BrowserModule,
//     HttpClientModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CateItemComponent } from './components/cate-item/cate-item.component';
import { HomeComponent } from './screen/home/home.component';
import { CateDetailComponent } from './screen/cate-detail/cate-detail.component';
import { CategoryAddComponent } from './screen/category-add/category-add.component';
import { CateEditFormComponent } from './screen/cate-edit-form/cate-edit-form.component';
import { ProEditFormComponent } from './screen/pro-edit-form/pro-edit-form.component';


@NgModule({
  declarations: [
    AppComponent,
    CateItemComponent,
    CateEditFormComponent,
    HomeComponent,
    CateDetailComponent,
    CategoryAddComponent,
    ProEditFormComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }