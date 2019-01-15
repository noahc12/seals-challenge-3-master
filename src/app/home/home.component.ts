import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { getBootstrapListener } from '../../../node_modules/@angular/router/src/router_module';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

import * as $ from 'jquery';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('carousel') carousel: any;
  @ViewChild('carousel1') carousel1: any;
 public topShows
  public animelist
  constructor(public route: ActivatedRoute, public router: Router) {
    //   this.route.params.subscribe((params) => {
    //      this.topShows = params;
    //      console.log(this.topShows);
    //   });
    //   if (this.topShows.id === 'thirteen-title' || this.topShows.id === 'dead' || this.topShows.id === 'arrow' ) {
    //     this.animelist = this.anime;
    //   }else{
    //     this.animelist = this.anime2;
    //   }
     }

  navigate(id) {
    this.router.navigate(['search', id]);
  }
  ngOnInit() {
  }
  searchText;
  public images = [
    'assets/shows/flash1.jpg',
    'assets/shows/rick2.jpg',
    'assets/shows/super2.jpg',
    'assets/shows/gotham2.jpg',
    'assets/shows/parks2.jpg',
    'assets/shows/spongebob2.jpg',,

  ];

  // public topShows = [
  //   {
  //     id: 'thirteen-title',
  //     url: 'assets/shows/13.jpeg',
  //   },
    /*{
      id: 'The Walking Dead',
      url: 'assets/topShows/dead.jpg',
    },*/
  // ];

  slides: Array<Object> = [
    {'src': 'assets/anime/yona1.jpg'},
    {'src': 'assets/anime/drifter.jpg'},
    {'src': 'assets/anime/basilisk.jpg'},
  ];
  options: Object = {
    clicking: true,
    sourceProp: 'src',
    visible: 7,
    perspective: 1,
    startSlide: 0,
    border: 3,
    dir: 'ltr',
    width: 360,
    height: 270,
    space: 220,
    autoRotationSpeed: 5000,
    loop: true
 };
 slide1: Array<Object> = [
  {'src': 'assets/anime/yona1.jpg'},
  {'src': 'assets/anime/blackclover.jpg'},
  {'src': 'assets/anime/aot.jpg'},
];
options1: Object = {
  clicking: true,
  sourceProp: 'src',
  visible: 7,
  perspective: 1,
  startSlide: 0,
  border: 3,
  dir: 'ltr',
  width: 360,
  height: 270,
  space: 220,
  autoRotationSpeed: 5000,
  loop: true
};
slideClicked (index) {
  this.carousel.slideClicked(index);
  this.carousel1.slideClicked(index);
 }
 show= false
 startpreview() {
  this.show = true;
 // this.descriptionpic = this.selectedShow.gif;
}
changegif() {
 this.show = false;
 // this.descriptionpic = this.selectedShow.url;
}
public anime = [
  {
    name: 'Bleach',
    url: 'assets/anime/bleach.jpg',
    des: 'The series ran for a total of 366 episodes. Bleach was produced by Studio Pierrot and directed by Noriyuki Abe.'
  },
  {
    name: 'Boondocks',
    url: 'assets/anime/boondocks.jpg',
    des: 'Now whether or not its an anime as in made in Japan, no; It\s a cartoon made by Americans and South Koreans.'
  },
  {
    name: 'Naruto',
    url: 'assets/anime/naruto.jpg',
    des: 'It tells the story of Naruto Uzumaki, an adolescent ninja who searches for recognition from his peers and the village and also dreams of becomming the Hokage.'
  },
  {
    name: 'Dragon Ball Super',
    url: 'assets/anime/dragonball.jpg',
    des: 'Along his journey, Goku makes several friends and battles a wide variety of villians, many of whom also seek the Dragon Balls.'
  }
];
public anime2 = [
      {
        name : 'The Devils a Part Timer',
        picture: 'https://img1.ak.crunchyroll.com/i/spire1/84618be75ad3f94f530b2b1e7c821ed61492723563_full.jpg',
        description: 'With no real-world skills, the devil is forced to make ends meet flipping burgers at a fast food joint!',
        pic_height: 150,
        pic_width : 150
      },
      {
        name: 'Shimoneta',
        picture: '../../assets/shimoneta.jpg',
        description: 'In a world where dirty jokes dont exist, a hero must rise up as a symbol for all things lewd and rude.',
        pic_height: 150,
        pic_width : 140
      },
      {
        name: 'Miss Kobayashis Dragon Maid',
        picture: '../../assets/mkd.jpg',
        description: 'Miss Kobayashi is your average office worker who lives a boring life, until she saves the life of a female dragons',
        pic_height: 200,
        pic_width : 200
      },
      {
        name : 'My Hero Academia',
        picture: '../../assets/mha.jpg',
        description: 'Izuku has dreamt of being a hero all his life sespecially challenging for a kid with no superpowers.',
        pic_height: 100,
        pic_width : 100
      },
      {
        name: 'One Punch Man',
        link: '',
        picture: '../../assets/opm.jpg',
        description: 'In a world of superhuman beings, Saitama is a unique hero, he can defeat enemies with a single punch.',
        pic_height: 100,
        pic_width : 100
      },
      {
        name: 'Bungou Stray Dogs',
        picture: '../../assets/bungou.jpg',
        description: 'Kicked out of his orphanage and on the verge of starving to death, Nakajima Atsushi meets some strange men. ',
        pic_height: 100,
        pic_width : 100,
      },
]}
//  

  // public classroom = [
  //   {
  //     name: 'Nate',
  //     age: 15,
  //     status: true
 
  //   },
  //   {
  //     name: 'Kyle',
  //     age: 16,
  //     status: true
 
  //   },
  //   {
  //     name: 'Julian',
  //     age: 16,
  //     status: true
 
  //   },
  //   {
  //     name: 'Victor',
  //     age: 16,
  //     status: true
 
  //   },
  //   {
  //     name: 'David',
  //     age: 15,
  //     status: true
 
  //   },
  // ]
  // checkout() {
  //   for(let item of this.classroom){
  //     if(item.status === true){
  //       item.status = false;
  //     } else{
  //       item.status = true;
  //     }
     
  //   }
  //   console.log(this.classroom)   
  // }




