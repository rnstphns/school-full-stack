import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SchooldbService {
  baseUrl: string = 'http://localhost:3000/schools/'
  schoolList!: School[];

  constructor(private http: HttpClient) { }

  getSchools(): Array<School> {
    this.http.get(`${this.baseUrl}all`).subscribe(res => {
      try {
        this.schoolList = JSON.parse(JSON.stringify(res));
      }
      catch (err) {
        console.error(err)
      }
      console.log(this.schoolList)
    })
    return this.schoolList
  }

}

class School {
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