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
    name: 'nguyen tri the',
    age: 20,
    address: '15 dong quan',
    hometown: 'ha nam'
  }
  heroTmp = {
    id:0,
    name: "",
    image: ""
  }

  heroList = [
    { 
      id: 11, 
      name: 'Dr Nice', 
      image: 'https://vignette.wikia.nocookie.net/doraemon/images/b/b8/Doraemon_2005.PNG/revision/latest?cb=20151207094313&path-prefix=en'
    },
    { 
      id: 12, 
      name: 'Narco', 
      image: 'https://vignette.wikia.nocookie.net/doraemon/images/b/b8/Doraemon_2005.PNG/revision/latest?cb=20151207094313&path-prefix=en'},
    { 
      id: 13, 
      name: 'Bombasto', 
      image: 'https://vignette.wikia.nocookie.net/doraemon/images/b/b8/Doraemon_2005.PNG/revision/latest?cb=20151207094313&path-prefix=en'},
    { 
      id: 14, 
      name: 'Celeritas', 
      image: 'https://vignette.wikia.nocookie.net/doraemon/images/b/b8/Doraemon_2005.PNG/revision/latest?cb=20151207094313&path-prefix=en'},
    { 
      id: 15, 
      name: 'Magneta', 
      image: 'https://vignette.wikia.nocookie.net/doraemon/images/b/b8/Doraemon_2005.PNG/revision/latest?cb=20151207094313&path-prefix=en'},
    { 
      id: 16, 
      name: 'RubberMan', 
      image: 'https://vignette.wikia.nocookie.net/doraemon/images/b/b8/Doraemon_2005.PNG/revision/latest?cb=20151207094313&path-prefix=en'},
    { 
      id: 17, 
      name: 'Dynama', 
      image: 'https://vignette.wikia.nocookie.net/doraemon/images/b/b8/Doraemon_2005.PNG/revision/latest?cb=20151207094313&path-prefix=en'},
    { 
      id: 18, 
      name: 'Dr IQ', 
      image: 'https://vignette.wikia.nocookie.net/doraemon/images/b/b8/Doraemon_2005.PNG/revision/latest?cb=20151207094313&path-prefix=en'},
    { 
      id: 19, 
      name: 'Magma', 
      image: 'https://vignette.wikia.nocookie.net/doraemon/images/b/b8/Doraemon_2005.PNG/revision/latest?cb=20151207094313&path-prefix=en'},
    { 
      id: 20, 
      name: 'Tornado', 
      image: 'https://vignette.wikia.nocookie.net/doraemon/images/b/b8/Doraemon_2005.PNG/revision/latest?cb=20151207094313&path-prefix=en'}
  ];

  save = () => {
    if(this.heroTmp.id == 0){
      this.heroTmp.id = this.getNewId();
      this.heroList.push({...this.heroTmp});
    }else{
      var index = this.heroList.map(
                      (h) => h.id 
                    ).indexOf(this.heroTmp.id);
      this.heroList[index] = {...this.heroTmp};
    }
    this.clear();
  }

  clear = () => {
    this.heroTmp = {
      id:0,
      name: "",
      image: ""
    }
  }

  update = (hero) => {
    this.heroTmp = {...hero};
  }

  private getNewId = () => {
    // tim so id lon nhat
      let maxId = 0;
      for (var i = 0; i < this.heroList.length; ++i) {
        if(this.heroList[i].id >= maxId){
          maxId = this.heroList[i].id
        }
      }
      return maxId+1;
  }

  // arrow function 
  removeHero = (heroId) => {
    this.heroList = this.heroList.filter(
      (item) => item.id != heroId
    );
  }

  keyupHeroName = (event) => {
    if(event.keyCode === 13){
      

      // tao hero moi
      let item = {
        name: event.target.value,
        id: this.getNewId(),
        image: ""
      }

      // add hero moi vao mang
      this.heroList.push(item);
      // lam trong the input
      event.target.value = "";
    }
  }




}






