import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchooldbService {
  baseUrl: string = 'http://localhost:3000/schools/'

  schoolList!: School[];
  currentSchool!: School;

  constructor(private http: HttpClient) { }

  getSchools(): School[] {
    this.http.get(`${this.baseUrl}all`)
    .subscribe((res) => {
      console.log(res) 
      this.schoolList = res
    }) 
    console.log(`All Schools loaded into service: ${this.schoolList}`)
    return this.schoolList
  }

  getSchoolDetails(school_name: string): School {
    this.http.get<School>(`${this.baseUrl}${school_name}`)
    .subscribe((school: School) => this.currentSchool = school)
    console.log(this.currentSchool)
    return this.currentSchool
  }

}

export class School {
  name!: string
  teachers!: Array<Teacher>
  courses!: Array<Course>
}
class Teacher {
  id!: number
  name!: string
  department!: string
}
class Course {
  id!: string
  title!: string
  students!: Array<Student>
}
class Student {
  id!: number
  name!: string
  department!: string
}