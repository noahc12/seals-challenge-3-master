import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute, Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-results2',
  templateUrl: './results2.component.html',
  styleUrls: ['./results2.component.css']
})
export class Results2Component implements OnInit {
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
      name: 'Mob Psycho 100 II',
      url: 'assets/anime/mob.jpg',
      des: 'Kageyama Shigeo, a.k.a. "Mob," is a boy who has trouble expressing himself, but who happens to be a powerful esper. Mob is determined to live a normal life and keeps his ESP suppressed, but when his emotions surge to a level of 100%, something terrible happens to him!'
    },
    {
      name: 'Black Clover',
      url: 'assets/anime/blackclover.jpg',
      des: 'In a world where magic is everything, Asta and Yuno are both found abandoned at a church on the same day. While Yuno is gifted with exceptional magical powers, Asta is the only one in this world without any. At the age of fifteen, both receive grimoires, magic books that amplify their holder’s magic. Asta’s is a rare Grimoire of Anti-Magic that negates and repels his opponent’s spells. '
    },
    {
      name: 'Hunter x Hunter',
      url: 'assets/anime/hxh.jpg',
      des: 'Gon, a young boy who lives on Whale Island, dreams of becoming a Hunter like his father, who left when Gon was still young.'
    },
    {
      name: 'That Time I Got Reincarnated as a Slime',
      url: 'assets/anime/slime.jpg',
      des: 'Corporate worker Mikami Satoru is stabbed by a random killer, and is reborn to an alternate world. But he turns out to be reborn a slime! Thrown into this new world with the name Rimuru, he begins his quest to create a world that’s welcoming to all races.'
    }
  ];
  public animelist;
  public selectedShow;
  constructor(public route: ActivatedRoute, public router: Router) {
    this.route.params.subscribe((params) => {
       this.selectedShow = params;
       console.log(this.selectedShow);
    });
    if (this.selectedShow.id === 'dexter' || this.selectedShow.id === 'dead' || this.selectedShow.id === 'arrow' ) {
      this.animelist = this.anime;
    }else{
      this.animelist = this.anime2;
    }
   }

  ngOnInit() {
  }

  navigate(id) {
    this.router.navigate(['description2', id]);
  }

}
