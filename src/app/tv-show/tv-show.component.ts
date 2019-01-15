import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.css']
})
export class TvShowComponent implements OnInit {
    public anime = [
      {
        name: 'Chilling Adventures of Sabrina',
        url: 'assets/tv-shows/sabrina.jpg',
        des: 'This adaptation of the "Sabrina the Teenage Witch" tale is a dark coming-of-age story that traffics in horror and the occult. In the reimagined origin story, Sabrina Spellman wrestles to reconcile her dual nature -- half-witch, half-mortal -- while standing against the evil forces that threaten her, her family '
      },
      {
        name: 'The Walking Dead',
        url: 'assets/tv-shows/twd.jpg',
        des: 'Based on the comic book series written by Robert Kirkman, this gritty drama portrays life in the months and years that follow a zombie apocalypse. Led by former police officer Rick Grimes, his family and a group of other survivors find themselves constantly on the move in search of a safe and secure home.'
      },
      {
        name: 'Westworld',
        url: 'assets/tv-shows/westworld.jpg',
        des: 'Westworld isnt your typical amusement park. Intended for rich vacationers, the futuristic park -- which is looked after by robotic "hosts" -- allows its visitors to live out their fantasies through artificial consciousness. No matter how illicit the fantasy may be, there are no consequences for the parks guests, allowing for any wish to be indulged. '
      },
      {
        name: 'Titans',
        url: 'assets/tv-shows/titans.jpg',
        des: 'Young heroes from around the DC Universe come of age in this gritty take on the "Teen Titans" franchise.'
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
      {
        key: 'Stranger Things',
        value: ['Tokyo Ghoul']
      },
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
      this.router.navigate(['list', id]);
    }
  
  
  }
  