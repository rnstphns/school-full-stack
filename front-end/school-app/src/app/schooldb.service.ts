import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SchooldbService {
  baseUrl: string = 'http://localhost:3000/'
  response: any;
  schoolList!: School[];

  constructor(private http: HttpClient) { }
  
  getSchools() {
    this.http.get(`${this.baseUrl}all`).subscribe( res => {
      console.log(res)
      this.response = res
      this.schoolList = this.response
    })
  }

}

class School {
  name!: string
  teachers!: Array<Teacher>
  courses!: Array<Course>
}
class Teacher{
  id!: string
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