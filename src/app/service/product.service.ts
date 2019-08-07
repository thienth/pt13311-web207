import { Injectable } from '@angular/core';
import { HttpClient, 
		HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http: HttpClient){}
  private productApiUrl='http://5d2c2c5b8c900700149720d8.mockapi.io/product';
  getProductList(){
  	return this.http.get<any[]>(this.productApiUrl);
  }
}
