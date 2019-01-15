import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

import { Route, ActivatedRoute, Router } from '../../../node_modules/@angular/router';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  animations: [
    // animation triggers go here
  ]
})
export class CategoriesComponent implements OnInit {

  constructor(private router: Router) { }
  // public anime = [
  //   {
  //     name: 'Chilling Adventures of Sabrina',
  //     url: 'assets/tv-shows/sabrina.jpg',
  //     des: 'This adaptation of the "Sabrina the Teenage Witch" tale is a dark coming-of-age story that traffics in horror and the occult. In the reimagined origin story, Sabrina Spellman wrestles to reconcile her dual nature -- half-witch, half-mortal -- while standing against the evil forces that threaten her, her family '
  //   },
  //   {
  //     name: 'The Walking Dead',
  //     url: 'assets/tv-shows/twd.jpg',
  //     des: 'Based on the comic book series written by Robert Kirkman, this gritty drama portrays life in the months and years that follow a zombie apocalypse. Led by former police officer Rick Grimes, his family and a group of other survivors find themselves constantly on the move in search of a safe and secure home.'
  //   },
  //   {
  //     name: 'Westworld',
  //     url: 'assets/tv-shows/westworld.jpg',
  //     des: 'Westworld isnt your typical amusement park. Intended for rich vacationers, the futuristic park -- which is looked after by robotic "hosts" -- allows its visitors to live out their fantasies through artificial consciousness. No matter how illicit the fantasy may be, there are no consequences for the parks guests, allowing for any wish to be indulged. '
  //   },
  //   {
  //     name: 'Titans',
  //     url: 'assets/tv-shows/titans.jpg',
  //     des: 'Young heroes from around the DC Universe come of age in this gritty take on the "Teen Titans" franchise.'
  //   }
  // ];
  ngOnInit() {
  }

}
