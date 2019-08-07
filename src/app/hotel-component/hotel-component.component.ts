import { Component, OnInit } from '@angular/core';
import {HotelService} from '../hotel.service';
@Component({
  selector: 'app-hotel-component',
  templateUrl: './hotel-component.component.html',
  styleUrls: ['./hotel-component.component.css']
})
export class HotelComponentComponent implements OnInit {

 constructor(private hotelService: HotelService) { }
  hotels = [];
  ngOnInit() {
  	this.hotelService.getHotel()
        .subscribe((data) => {
          this.hotels = data;
        });
  }

  removeHotel(hotel){
  	this.hotelService.removeHotel(hotel.id)
  					.subscribe(data => {
  						console.log(data);
  						this.hotels = this.hotels.filter(obj => obj.id != hotel.id);
  					})
  }

}
