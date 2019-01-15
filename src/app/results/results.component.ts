import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute, Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
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
      name: 'My Hero Academia',
      url: 'assets/anime/mha.jpg',
      des: 'Izuku has dreamt of being a hero all his life—a lofty goal for anyone, but especially challenging for a kid with no superpowers. That’s right, in a world where eighty percent of the population has some kind of super-powered “quirk,” Izuku was unlucky enough to be born completely normal. But that’s not enough to stop him from enrolling in one of the world’s most prestigious hero academies.'
    },
    {
      name: 'Akame ga Kill!',
      url: 'assets/anime/agk.jpg',
      des: 'Under the rule of a tyrannical empire, Tatsumi, a young swordsman, leaves his home to save his poverty stricken village. He meets a girl named Akame, an assassin who was bought, brainwashed and trained to kill by the Empire. Akame is a member of the secret assassin group called “Night Raid” who use special weapons called Teigu. Together, Tatsumi and the members of Night Raid confront the corrupt empire.'
    },
    {
      name: 'Bungou Stray Dogs',
      url: 'assets/anime/bsd.jpg',
      des: 'Kicked out of his orphanage and on the verge of starving to death, Nakajima Atsushi meets some strange men. One of them, Dazai Osamu, is a suicidal man attempting to drown himself in broad daylight. The other, bespectacled Kunikida Doppo, nervously stands by flipping through a notepad. Both are members of the "Armed Detective Agency" said to solve incidents that even the military and police wont touch. Atsushi ends up accompanying them on a mission to eliminate a man-eating tiger thats been terrorizing the population.'
    },
    {
      name: 'JoJo\'s Bizarre Adventure',
      url: 'assets/anime/jojo.jpg',
      des: ' In ancient Mexico, people of Aztec had prospered. They had historic and strange "Stone Mask". It was a miraculous mask which brings eternal life and the power of authentic ruler. But the mask suddenly disappeared. A long time after that, in late 19th centuries when the thought and life of people were suddenly changing, Jonathan Joestar met with Dio Brando―. They spend time together through boyhood to youth, and the "Stone Mask" brings curious fate to them.'
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
    this.router.navigate(['description', id]);
  }

}
