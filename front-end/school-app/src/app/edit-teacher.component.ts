import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-teacher',
  template: `
    <button class = "back-button" [routerLink]="['/','schools']">Back</button>
    <p>
      edit-teacher works!
      
    </p>
  `,
  styleUrls: ['../styles.css']
})
export class EditTeacherComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
