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
  }

  ngOnDestroy(): void {
    console.log(`destroying 'edit teachers'`)
    this.queryparameters.unsubscribe()
  }
  submitEditTeacher(){
      const id = this.pullFirst(this.teacherForm.value.id)
      const name = this.pullFirst(this.teacherForm.value.name)
      const department = this.pullFirst(this.teacherForm.value.department)
      const teach = `{ "id": "${id}", "name": "${name}", "department": "${department}" }`
      console.log(`submitting ${teach}`)
      //TODO- check if new teacher => newTeacher() else updateTeacher()
      this.dbservice.editTeacher('MIU', id, teach).subscribe(res => console.log(res));
      //TODO: update school-details local array
  }
  pullFirst(object: Object){
    if(object instanceof Array) 
      return object[0]
    else 
      return object
  }

  
}
