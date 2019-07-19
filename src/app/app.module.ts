import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { CateItemComponent } from './components/cate-item/cate-item.component';
import { CateEditFormComponent } from './components/cate-edit-form/cate-edit-form.component';

@NgModule({

  declarations: [
    AppComponent,
    CateItemComponent,
    CateEditFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
