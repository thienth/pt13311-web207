import { Injectable } from '@angular/core';
import { HttpClient, 
		HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor( private http: HttpClient){}
  private hotelApiUrl='http://5d2c2c5b8c900700149720d8.mockapi.io/Hotels';
  getHotel(){
  	return this.http.get<any[]>(this.hotelApiUrl);
  }
  removeHotel(HotelId){
  	let removeHotelUrl = `${this.hotelApiUrl}/${HotelId}`;
  	return this.http.delete<any>(removeHotelUrl);
  }
}
