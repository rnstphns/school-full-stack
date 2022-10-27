import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header>
      <app-login></app-login>
    </header>
    <div class="content">
      <router-outlet></router-outlet>
    </div>
    
  `,
  styleUrls: ['../styles.css']
})
export class AppComponent implements OnInit {
  title = 'Good Luck on the Final!';

  constructor() {

  }

  ngOnInit() {

  }

}
