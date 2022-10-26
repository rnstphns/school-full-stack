import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchooldbService {
  baseUrl: string = 'http://localhost:3000/schools/'

  constructor(private http: HttpClient) { }

  getSchools(): Observable<School[]> {
    return this.http.get<School[]>(`${this.baseUrl}all`)
  }

  getSchoolDetails(school_name: string): Observable<School> {
    return this.http.get<School>(`${this.baseUrl}${school_name}`)
  }

}

export interface School {
  name: string
  teachers?: Array<Teacher>
  courses?: Array<Course>
}
interface Teacher {
  id: number
  name: string
  department?: string
}
interface Course {
  id: string
  title: string
  students?: Array<Student>
}
interface Student {
  id: number
  name: string
  department?: string
  grade?: number
}