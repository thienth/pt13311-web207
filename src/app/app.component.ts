import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'pt13311';

    user = {
        name: 'Vanh',
        age: '20',
        address: 'Ha Noi',
        hometown: 'Ha Noi',
    };

    newHeroName = '';

    heroList = [
        {id: 11, name: 'Dr Nice', image: 'Đây là một cái ảnh'},
        {id: 12, name: 'Narco', image: 'Đây là một cái ảnh'},
        {id: 13, name: 'Bombasto', image: 'Đây là một cái ảnh'},
        {id: 14, name: 'Celeritas', image: 'Đây là một cái ảnh'},
        {id: 15, name: 'Magneta', image: 'Đây là một cái ảnh'},
        {id: 16, name: 'RubberMan', image: 'Đây là một cái ảnh'},
        {id: 17, name: 'Dynama', image: 'Đây là một cái ảnh'},
        {id: 18, name: 'Dr IQ', image: 'Đây là một cái ảnh'},
        {id: 19, name: 'Magma', image: 'Đây là một cái ảnh'},
        {id: 20, name: 'Tornado', image: 'Đây là một cái ảnh'}
    ];

    heroTmp = {
        id: 0,
        name: '',
        image: '',
    }

    // arrow function
    // removeHero = (heroId) => {
    //     console.log(this.heroList[0]);
    //     this.heroList = this.heroList.filter((item) => item.id !== heroId);
    // }

    editHero = (hero, event) => {
        this.heroTmp = {...hero};
    }
    //
    // editHero = (heroId) => {
    //     consl
    // }

    private getNewId = () => {
        let maxId = 0;
        for (var i = 0; i < this.heroList.length; i++) {
            if (this.heroList[i].id >= maxId) {
                maxId = this.heroList[i].id
            }
        }
        return maxId +1;
    };
    keyupHeroName = (event) => {
        if (event.keyCode === 13) {
            let maxId = 0;
            // for (let i = 0; i < this.heroList.length; i++) {
            //     if (this.heroList[i].id >= maxId) {
            //         maxId = this.heroList[i].id;
            //     }
            // }
            let item = {
                name: event.target.value,
                id: this.heroList.length + 1,
                image: "",
            };
            this.heroList.push(item);
            event.target.value = '';
        }
        console.log(event.keyCode);
        console.log(event.target.value);
    }
}
