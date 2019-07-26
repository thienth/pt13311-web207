import { Injectable } from '@angular/core';
import { HttpClient, 
		HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  private categoryApiUrl 
  	= 'http://5d2c2c478c90070014972095.mockapi.io/categories';

  getCategoryList(){
  	return this.http.get<any[]>(this.categoryApiUrl);
  }
  removeCategory(cateId){
  	let removeCateUrl = `${this.categoryApiUrl}/${cateId}`;
  	return this.http.delete<any>(removeCateUrl);
  }
  addCategory(data){
    return this.http.post<any>(this.categoryApiUrl, data);
  }
}
