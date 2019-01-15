import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { FormsModule, ReactiveFormsModule, Form} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  text;

  constructor(public router: Router) {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0);
  });
  }

  test() {
    this.router.navigate(['tv-show', this.text ]);
  }
}


