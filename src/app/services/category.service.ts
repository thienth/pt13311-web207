import { Injectable } from '@angular/core';
import { HttpClient, 
		HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  private categoryApiUrl 
  	= 'http://5d2eb2852e225b0014209039.mockapi.io/categories';

  getCategoryList(){
  	return this.http.get<any[]>(this.categoryApiUrl);
  }
  
  addCategory(categories){
    return this.http.post(this.categoryApiUrl, categories);
  }


  removeCategory(cateId){
  	let removeCateUrl = `${this.categoryApiUrl}/${cateId}`;
  	return this.http.delete<any>(removeCateUrl);
  }

}

