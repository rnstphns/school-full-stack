import { Component, OnInit } from '@angular/core';
import { SchooldbService } from './schooldb.service';

@Component({
  selector: 'app-root',
  template: `
    <div style="text-align:center" class="content">
      <h1>
        Welcome to {{title}}!
      </h1>
      <textarea [defaultValue]="this.populated" ></textarea>
    </div>    
  `,
  styles: []
})
export class AppComponent implements OnInit{
  title = 'school-app';
  populated: Array<any>;
  constructor(private service: SchooldbService) {
    this.populated = []
   }

  ngOnInit(){
    this.populated = this.service.getSchools()
  }


}
