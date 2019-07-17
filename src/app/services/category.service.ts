import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  private categoryApiUrl = 'http://5d2c2c4e8c900700149720b6.mockapi.io/category/';
  getCategoryList(){
  	return this.http.get<any[]>(this.categoryApiUrl);
  }

  removeCategory(cateId){
  	let removeCateUrl = `${this.categoryApiUrl}/${cateId}`;
  	return this.http.delete<any>(removeCateUrl);
  }

}
