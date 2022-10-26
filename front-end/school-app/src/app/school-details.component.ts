import { Component, OnInit } from '@angular/core';
import { SchooldbService, School, Teacher, Course, Student, mongoResponse } from './schooldb.service';

@Component({
  selector: 'app-school-details',
  template: `
    <div *ngIf="school_details == undefined">
    <!-- <input  placeholder = 'Search By School Initials' #searchInput> -->
    <!-- <button (click)="getSchool(searchInput.value)">Get School Data</button> -->
    <!-- v Temporary button for ease of dev, reenable search bar ^ later -->
    <button (click) = "getSchool('MIU')">Get MIU Data</button><br> 
    </div>
    <div class="table"  *ngIf="school_details !== undefined; else empty_table_message">
        <label class="table-title">{{school_details.name || "school name missing"}}</label><br><br>

        <label for="teacher-table" class="teacher-label">Teachers:</label>
        <table>
          <thead>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th><button id="new-teacher-button"(click)="newTeacher(school_details.name)">  New  </button></th>
          </thead>
          <tr *ngFor="let t of school_details.teachers">
            <td>{{t.id}}</td>
            <td>{{t.name}}</td>
            <td>{{t.department}}</td>
            
            <!-- would be nice to add a tooltip on single click -->
            <td><button id="delete" (dblclick)="deleteTeacher(t.id)">Delete</button></td>
          </tr>
        </table><br>
        <label for="course-table" class="course-label">Courses:</label>
        <table>
          <thead>
            <th>ID</th>
            <th>Title</th>
            <th>Students</th>
          </thead>
          <tr *ngFor="let c of school_details.courses">
            <td>{{c.id}}</td>
            <td>{{c.title}}</td>
            <td><button id="view-students" (click)="viewStudentsInCourse(c.id)">View Students</button></td>
          </tr>
        </table>
    </div>
    <ng-template #empty_table_message>~No Data Loaded~</ng-template>
  `,
  styleUrls: ['../styles.css']
})
export class SchoolDetailsComponent implements OnInit {

  school_details!: School;

  constructor(private service: SchooldbService) { }

  ngOnInit(): void { }

  getSchool(school_name: string) {
    const valid_name = school_name.toUpperCase().slice(0, 3) //Backend takes 3 letter acronyms
    this.service.getSchoolDetails(valid_name).subscribe(
      school => {
        this.school_details = school[0]; //getSchool() was returning an array, even with get<School>() specified
      }
    )
  }

  deleteTeacher(teacher_id: number) {
    const school_name = this.school_details.name
    this.service.deleteTeacher(school_name, teacher_id).subscribe(
      res => {
        if (res.modifiedCount === 1) {
          this.school_details.teachers =
            this.school_details.teachers?.filter(t => (t.id !== teacher_id))
          console.log(`Deleted teacher ${teacher_id}`)
          this.getSchool(this.school_details.name)
        } else {
          console.log(`Teacher ${teacher_id} not found`)
        }
      }
    )
  }

  newTeacher(school_name: string) {
    console.log('TODO - build a new teacher page')
  }

  viewStudentsInCourse(course_id: string) {
    console.log('TODO - build redirect to student page')
  }
}
