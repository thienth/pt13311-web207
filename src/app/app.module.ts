<<<<<<< HEAD
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
=======
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
>>>>>>> master

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

@NgModule({
<<<<<<< HEAD
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
=======
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
>>>>>>> master
})
export class AppModule {
}
