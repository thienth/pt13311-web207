import { Component, OnInit } from '@angular/core';
import { CategoryService } from './services/category.service';
import { HotelService } from './hotel.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private cateService: CategoryService,
    private hotelService: HotelService
  ) {

  }

  tmpCate = {
    id: 0,
    name: "xxx",
    image: "yyy"
  }

  ngOnInit() {
    this.cateService.getCategoryList()
      .subscribe((data) => {
        this.category = data;
      });
  }
  category = [];
  title = 'pt13311';
  hotel = [];

  removeCategory(cate) {
    this.cateService.removeCategory(cate.id)
      .subscribe((data) => {
        console.log(data);
        this.category = this.category.filter(
          (item) => item.id != cate.id
        )
      });
  }
  removeHotel(hotel) {
    this.hotelService.removeHotel(hotel.id)
      .subscribe((data) => {
        console.log(data);
        this.hotel = this.hotel.filter(
          (item) => item.id != hotel.id
        )
      });
  }

  editCategory(cate) {
    this.tmpCate = { ...cate };
  }


}






