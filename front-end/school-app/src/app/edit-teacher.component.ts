import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SchooldbService } from './schooldb.service';

@Component({
  selector: 'app-edit-teacher',
  template: `
    <div class="content">
      
      <label for="edit-teacher-from">Add/Edit Teacher:</label>
      <div class="form-container">
        <form [formGroup]="teacherForm" (ngSubmit)="submitEditTeacher()" class="form">
          <input formControlName="id" type="text" placeholder = "teacher id">
          <input formControlName="name" type="text" placeholder = "name">
          <input formControlName="department" type="text" placeholder = "department">
          <span>
            <button [disabled]="!teacherForm.valid"class="submit" type = "submit">Submit</button>
            <button class = "back-button" [routerLink]="['/','schools']">Back</button>
          </span>
      </form>
      </div>
    </div>
  `,
  styleUrls: ['../styles.css']
})
export class EditTeacherComponent implements OnDestroy {

  teacherForm!: FormGroup;
  queryparameters;
  id!: number;
  name!: string;
  department!: string;
  school: string = 'MIU'; //TODO, put in query params
  newTeachFlag: boolean = false;

  constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private dbservice: SchooldbService) {
    this.teacherForm = formBuilder.group({
      'id': ['', Validators.required],
      'name': ['', Validators.required],
      'department': ['', Validators.required]
    })
    this.queryparameters = this.activatedRoute.queryParams
      .subscribe(params => {
        this.id = params['id'];
        this.name = params['name'];
        this.department = params['department'];
      })
    // console.log(`Query params: ${this.id} - ${this.name} - ${this.department}`)
    this.teacherForm.setValue({
      id: [this.id],
      name: [this.name],
      department: [this.department]
    })
    if (this.id == undefined || this.name == undefined)
      this.newTeachFlag = true
  }

  ngOnDestroy(): void {
    console.log(`destroying 'edit teachers'`)
    this.queryparameters.unsubscribe()
  }
  submitEditTeacher() {
    const id = this.pullFirst(this.teacherForm.value.id)
    const name = this.pullFirst(this.teacherForm.value.name)
    const department = this.pullFirst(this.teacherForm.value.department)
    if(id == "" || id == undefined || name == "" || name == undefined){
      console.log('bad request')
      return
    }
    const teach = JSON.parse(`{ "id": "${id}", "name": "${name}", "department": "${department}" }`)
    if (this.newTeachFlag) {
      this.dbservice.newTeacher(this.school, teach).subscribe(res => console.log("new" + res))
    } else {
      this.dbservice.editTeacher(this.school, id, teach).subscribe(res => console.log("edit" + res));
    }
    //TODO: update school-details local array
    //redirect on submit?
  }
  pullFirst(object: Object) {
    if (object instanceof Array)
      return object[0]
    else
      return object
  }


}
