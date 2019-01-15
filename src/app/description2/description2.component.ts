import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute, Router } from '../../../node_modules/@angular/router';
@Component({
  selector: 'app-description2',
  templateUrl: './description2.component.html',
  styleUrls: ['./description2.component.css']
})
export class Description2Component {
  public anime = [
    {
      name: 'Bleach',
      url: 'assets/anime/bleach.jpg',
      gif: 'assets/topShows/bleach.gif',
      des: 'The series ran for a total of 366 episodes. Bleach was produced by Studio Pierrot and directed by Noriyuki Abe.',
      rating: [1, 2, 3],
      ratingL: [1, 2],
      sub: 'http://www.crunchyroll.com/bleach',
      dub: 'http://www.crunchyroll.com/bleach'
    },
    {
      name: 'Boondocks',
      url: 'assets/anime/boondocks.jpg',
      gif: 'assets/topShows/boondocks.gif',
      des: 'Now whether or not its an anime as in made in Japan, no; It\s a cartoon made by Americans and South Koreans.',
      rating: [1, 2, 3, 4],
      ratingL: [1],
      sub: 'http://www.adultswim.com/videos/the-boondocks/',
      dub: 'http://www.adultswim.com/videos/the-boondocks/'
    },
    {
      name: 'Naruto',
      url: 'assets/anime/naruto.jpg',
      gif: 'assets/topShows/naruto.gif',
      des: 'It tells the story of Naruto Uzumaki, an adolescent ninja who searches for recognition from his peers and the village and also dreams of becomming the Hokage.',
      rating: [1, 2, 3, 4, 5],
      ratingL: [],
      sub: 'http://www.crunchyroll.com/naruto-shippuden',
      dub: 'http://www.crunchyroll.com/naruto-shippuden'
    },
    {
      name: 'Dragon Ball Super',
      url: 'assets/anime/dragonball.jpg',
      gif: 'assets/topShows/DBS.gif',
      des: 'Along his journey, Goku makes several friends and battles a wide variety of villians, many of whom also seek the Dragon Balls.',
      rating: [1, 2, 3, 4],
      ratingL: [1],
      sub: 'http://www.crunchyroll.com/dragon-ball-super',
      dub: 'http://www.crunchyroll.com/dragon-ball-super'
    },
    //new anime
    {
      name: 'Mob Psycho 100 II',
      url: 'assets/anime/mob.jpg',
      gif: 'assets/anime/mob.gif',
      des: 'Kageyama Shigeo, a.k.a. "Mob," is a boy who has trouble expressing himself, but who happens to be a powerful esper. Mob is determined to live a normal life and keeps his ESP suppressed, but when his emotions surge to a level of 100%, something terrible happens to him!',
      rating: [1, 2, 3, 4],
      ratingL: [4],
      sub: 'http://www.crunchyroll.com/my-hero-academia',
      dub: 'http://www.crunchyroll.com/my-hero-academia'
    },
    {
      name: 'Black Clover',
      url: 'assets/anime/blackclover.jpg',
      gif: 'assets/anime/blackclover.gif',
      des: 'In a world where magic is everything, Asta and Yuno are both found abandoned at a church on the same day. While Yuno is gifted with exceptional magical powers, Asta is the only one in this world without any. At the age of fifteen, both receive grimoires, magic books that amplify their holder’s magic. Asta’s is a rare Grimoire of Anti-Magic that negates and repels his opponent’s spells. ',
      rating: [1, 2, 3, 4],
      ratingL: [4],
      sub: 'http://www.crunchyroll.com/akame-ga-kill',
      dub: 'http://www.crunchyroll.com/akame-ga-kill'
    },
    {
      name: 'Hunter x Hunter',
      url: 'assets/anime/hxh.jpg',
      gif: 'assets/anime/hxh.gif',
      des: 'Gon, a young boy who lives on Whale Island, dreams of becoming a Hunter like his father, who left when Gon was still young.',
      rating: [1, 2, 3, 4],
      ratingL: [4],
      sub: 'http://www.crunchyroll.com/bungo-stray-dogs',
      dub: 'http://www.crunchyroll.com/bungo-stray-dogs'
    },
    {
      name: 'That Time I Got Reincarnated as a Slime',
      url: 'assets/anime/slime.jpg',
      gif: 'assets/anime/slime.gif',
      des: 'Corporate worker Mikami Satoru is stabbed by a random killer, and is reborn to an alternate world. But he turns out to be reborn a slime! Thrown into this new world with the name Rimuru, he begins his quest to create a world that’s welcoming to all races.',
      rating: [1, 2, 3, 4],
      ratingL: [4],
      sub: 'http://www.crunchyroll.com/jojos-bizarre-adventure',
      dub: 'http://www.crunchyroll.com/jojos-bizarre-adventure'
    }
  ];
  public selectedShow;
  descriptionpic;
  show = false;
  constructor(public route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
       this.selectedShow = this.anime.filter((data) => {
         if (params.id === data.name) {
           return data;
         }
       });

       this.selectedShow = this.selectedShow[0];
       this.descriptionpic = this.selectedShow.url;
    });
   }
   startpreview() {
     this.show = true;
    // this.descriptionpic = this.selectedShow.gif;
  }
  changegif() {
    this.show = false;
    // this.descriptionpic = this.selectedShow.url;
  }


}
