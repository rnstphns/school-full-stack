import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <p>
      Temporary Login Bypass from Home page <button [routerLink]="['/','schools']">Go to School Details</button>
    </p>
   
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur earum necessitatibus saepe provident maiores quam ipsa sapiente eligendi, sunt veniam suscipit dolorem deserunt natus voluptas deleniti modi dolore commodi corporis.</p>
    
  `,
  styleUrls: ['../styles.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
}
