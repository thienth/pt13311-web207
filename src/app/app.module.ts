import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CateItemComponent } from './components/cate-item/cate-item.component';
import { CateEditFormComponent } from './components/cate-edit-form/cate-edit-form.component';
import { HomeComponent } from './screens/home/home.component';
import { CateDetailComponent } from './screens/cate-detail/cate-detail.component';
import { CategoryAddComponent } from './screens/category-add/category-add.component';
import { CategoryEditComponent } from './screens/category-edit/category-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    CateItemComponent,
    CateEditFormComponent,
    HomeComponent,
    CateDetailComponent,
    CategoryAddComponent,
    CategoryEditComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
