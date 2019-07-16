import {Component, OnInit} from '@angular/core';
import {CategoryService} from './service/category.service';

// import {DetailComponent} from './components/detail/detail.component';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private cateService: CategoryService) {

    }

    ngOnInit() {
        this.cateService.getCategoryList().subscribe((data) => {
            this.category = data;
        });
    }
    category = [];
    title = 'pt13311';
}
