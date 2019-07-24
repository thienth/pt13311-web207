import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CateItemComponent } from './components/cate-item/cate-item.component';
import { CateEditFormComponent } from './components/cate-edit-form/cate-edit-form.component';
import { HomeComponent } from './screens/home/home.component';
import { CateDetailComponent } from './screens/cate-detail/cate-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CateItemComponent,
    CateEditFormComponent,
    HomeComponent,
    CateDetailComponent,
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
