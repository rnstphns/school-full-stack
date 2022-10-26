import { Component, OnInit } from '@angular/core';
import { SchooldbService, School } from './schooldb.service';

@Component({
  selector: 'app-school-details',
  template: `
    <input  placeholder = 'Search By School Initials' #searchInput>
    <button (click)="getSchool(searchInput.value)">Get School Data</button>
    <div textAlign = 'center'>
        <span>{{school_details.name}} - {{school_details.teachers}} - {{school_details.courses}}</span>
    </div>
  `,
  styles: [
  ]
})
export class SchoolDetailsComponent implements OnInit {

  school_details!: School;

  constructor(private service: SchooldbService) { }

  ngOnInit(): void { }

  getSchool(school_name: string) {
    const valid_name = school_name.toUpperCase().slice(0, 3) //Backend takes 3 letter acronyms
    this.service.getSchoolDetails(valid_name).subscribe(
      school => {
        this.school_details = school
        // console.log(this.school_details)
      }
    )

  }

  //delete .filter() array

}
