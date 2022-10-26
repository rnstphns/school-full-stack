import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header>
      <app-login></app-login>
    </header>
    <div class="content">
      <app-school-details></app-school-details>
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
