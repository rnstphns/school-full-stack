import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header>
      login header will go here
    </header>
    <div style="text-align:center">
      <h1>
        Welcome to {{title}}!
      </h1>
       <app-school-details></app-school-details>

    </div>     
  `,
  styles: []
})
export class AppComponent implements OnInit {
  title = 'The School App';

  constructor() {

  }

  ngOnInit() {

  }

}
