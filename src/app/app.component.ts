import {Component} from '@angular/core';
import {CategoryService} from './services/category.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    category = [];
    categories = {
        id: 0,
        name: '',
        avatar: '',
    };

    title = 'pt13311';

    constructor(private cateService: CategoryService) {
    }

    ngOnInit() {
        this.cateService.getCategoryList().subscribe((data) => {
            this.category = data.reverse();
        });
    }

    removeCategory(cate) {
        this.cateService.removeCategory(cate.id)
            .subscribe((data) => {
                this.category = this.category.filter(
                    (item) => item.id !== cate.id
                );
            });
    }

    addCategory = () => {
        this.categories.id = this.getNewId();
        // this.category.push({...this.categories});
        this.cateService.addCategory(this.categories).subscribe((data) => {
        });
        this.category.unshift({...this.categories});
        this.clear();
    }

    updateCategory = (cateId) => {
        const index = this.category.map(
            (h) => h.id
        ).indexOf(this.categories.id);
        // @ts-ignore
        this.category[index] = {...this.categories};
        this.cateService.updateCategory(cateId, this.categories).subscribe((data) => {
        });
        this.clear();
    }

    update = (cate) => {
        this.categories = {...cate};
    }
    //
    clear = () => {
        this.categories = {
            id: 0,
            name: '',
            avatar: ''
        };
    }

    private getNewId = () => {
        // console.log(this.category.length);
        let maxId = 0;
        for (let i = 0; i < this.category.length; ++i) {
            maxId = this.category[i].id;
            console.log(maxId);
        }
        // console.log(Number(maxId + 1));
        return Number(maxId) + 1;

    }
}
