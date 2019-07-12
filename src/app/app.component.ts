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
    { 
      id: 11, 
      name: 'Dr Nice', 
      images: 'https://vignette.wikia.nocookie.net/doraemon/images/b/b8/Doraemon_2005.PNG/revision/latest?cb=20151207094313&path-prefix=en'
    },
    { 
      id: 12, 
      name: 'Narco', 
      images: 'https://vignette.wikia.nocookie.net/doraemon/images/b/b8/Doraemon_2005.PNG/revision/latest?cb=20151207094313&path-prefix=en'},
    { 
      id: 13, 
      name: 'Bombasto', 
      images: 'https://vignette.wikia.nocookie.net/doraemon/images/b/b8/Doraemon_2005.PNG/revision/latest?cb=20151207094313&path-prefix=en'},
    { 
      id: 14, 
      name: 'Celeritas', 
      images: 'https://vignette.wikia.nocookie.net/doraemon/images/b/b8/Doraemon_2005.PNG/revision/latest?cb=20151207094313&path-prefix=en'},
    { 
      id: 15, 
      name: 'Magneta', 
      images: 'https://vignette.wikia.nocookie.net/doraemon/images/b/b8/Doraemon_2005.PNG/revision/latest?cb=20151207094313&path-prefix=en'},
    { 
      id: 16, 
      name: 'RubberMan', 
      images: 'https://vignette.wikia.nocookie.net/doraemon/images/b/b8/Doraemon_2005.PNG/revision/latest?cb=20151207094313&path-prefix=en'},
    { 
      id: 17, 
      name: 'Dynama', 
      images: 'https://vignette.wikia.nocookie.net/doraemon/images/b/b8/Doraemon_2005.PNG/revision/latest?cb=20151207094313&path-prefix=en'},
    { 
      id: 18, 
      name: 'Dr IQ', 
      images: 'https://vignette.wikia.nocookie.net/doraemon/images/b/b8/Doraemon_2005.PNG/revision/latest?cb=20151207094313&path-prefix=en'},
    { 
      id: 19, 
      name: 'Magma', 
      images: 'https://vignette.wikia.nocookie.net/doraemon/images/b/b8/Doraemon_2005.PNG/revision/latest?cb=20151207094313&path-prefix=en'},
    { 
      id: 20, 
      name: 'Tornado', 
      images: 'https://vignette.wikia.nocookie.net/doraemon/images/b/b8/Doraemon_2005.PNG/revision/latest?cb=20151207094313&path-prefix=en'}
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






