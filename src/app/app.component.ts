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
        {id: 11, name: 'Dr Nice'},
        {id: 12, name: 'Narco'},
        {id: 13, name: 'Bombasto'},
        {id: 14, name: 'Celeritas'},
        {id: 15, name: 'Magneta'},
        {id: 16, name: 'RubberMan'},
        {id: 17, name: 'Dynama'},
        {id: 18, name: 'Dr IQ'},
        {id: 19, name: 'Magma'},
        {id: 20, name: 'Tornado'}
    ];
    // arrow function
    removeHero = (heroId) => {
        // this.heroList = this.heroList.filter((item) => item.id !== heroId);
    }
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
            };
            this.heroList.push(item);
            event.target.value = '';
        }
        console.log(event.keyCode);
        console.log(event.target.value);
    }
}
