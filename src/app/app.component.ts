import { Component } from '@angular/core';
// import {DetailComponent} from './components/detail/detail.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pt13311';

  user = {
    name: 'nguyen tri dien',
    age: 20,
    address: '15 dong quan',
    hometown: 'ha nam'
  }

  heroList = [
    { id: 11, name: 'Dr Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];

  // arrow function 
  removeHero = (heroId) => {
    this.heroList = this.heroList.filter(
      (item) => item.id != heroId
    );
  }

  keyupHeroName = (event) => {
    if(event.keyCode === 13){
      // tim so id lon nhat
      let maxId = 0;
      for (var i = 0; i < this.heroList.length; ++i) {
        if(this.heroList[i].id >= maxId){
          maxId = this.heroList[i].id
        }
      }

      // tao hero moi
      let item = {
        name: event.target.value,
        id: maxId + 1
      }

      // add hero moi vao mang
      this.heroList.push(item);
      // lam trong the input
      event.target.value = "";
    }
  }




}






