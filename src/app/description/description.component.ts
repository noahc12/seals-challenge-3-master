import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent {
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
      name: 'My Hero Academia',
      url: 'assets/anime/mha.jpg',
      gif: 'assets/anime/mha.gif',
      des: 'Izuku has dreamt of being a hero all his life—a lofty goal for anyone, but especially challenging for a kid with no superpowers. That’s right, in a world where eighty percent of the population has some kind of super-powered “quirk,” Izuku was unlucky enough to be born completely normal. But that’s not enough to stop him from enrolling in one of the world’s most prestigious hero academies.',
      rating: [1, 2, 3, 4],
      ratingL: [4],
      sub: 'http://www.crunchyroll.com/my-hero-academia',
      dub: 'http://www.crunchyroll.com/my-hero-academia'
    },
    {
      name: 'Akame ga Kill!',
      url: 'assets/anime/agk.jpg',
      gif: 'assets/anime/agk.gif',
      des: 'Under the rule of a tyrannical empire, Tatsumi, a young swordsman, leaves his home to save his poverty stricken village. He meets a girl named Akame, an assassin who was bought, brainwashed and trained to kill by the Empire. Akame is a member of the secret assassin group called “Night Raid” who use special weapons called Teigu. Together, Tatsumi and the members of Night Raid confront the corrupt empire.',
      rating: [1, 2, 3, 4],
      ratingL: [4],
      sub: 'http://www.crunchyroll.com/akame-ga-kill',
      dub: 'http://www.crunchyroll.com/akame-ga-kill'
    },
    {
      name: 'Bungou Stray Dogs',
      url: 'assets/anime/bsd.jpg',
      gif: 'assets/anime/bsd.gif',
      des: 'Kicked out of his orphanage and on the verge of starving to death, Nakajima Atsushi meets some strange men. One of them, Dazai Osamu, is a suicidal man attempting to drown himself in broad daylight. The other, bespectacled Kunikida Doppo, nervously stands by flipping through a notepad. Both are members of the "Armed Detective Agency" said to solve incidents that even the military and police wont touch. Atsushi ends up accompanying them on a mission to eliminate a man-eating tiger thats been terrorizing the population.',
      rating: [1, 2, 3, 4],
      ratingL: [4],
      sub: 'http://www.crunchyroll.com/bungo-stray-dogs',
      dub: 'http://www.crunchyroll.com/bungo-stray-dogs'
    },
    {
      name: 'JoJo\'s Bizarre Adventure',
      url: 'assets/anime/jojo.jpg',
      gif: 'assets/anime/jojo.gif',
      des: ' In ancient Mexico, people of Aztec had prospered. They had historic and strange "Stone Mask". It was a miraculous mask which brings eternal life and the power of authentic ruler. But the mask suddenly disappeared. A long time after that, in late 19th centuries when the thought and life of people were suddenly changing, Jonathan Joestar met with Dio Brando―. They spend time together through boyhood to youth, and the "Stone Mask" brings curious fate to them.',
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
