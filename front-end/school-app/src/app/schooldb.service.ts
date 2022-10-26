import { Injectable, NgIterable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchooldbService {
  baseUrl: string = 'http://localhost:3000/schools/'

  constructor(private http: HttpClient) { }

  getSchools(): Observable<School[]> { //Not currently used
    return this.http.get<School[]>(`${this.baseUrl}all`)
  }

  getSchoolDetails(school_name: string): Observable<School[]> {
    return this.http.get<School[]>(`${this.baseUrl}${school_name}`)
  }

  deleteTeacher(school_name: string, teacher_id: number): Observable<mongoResponse> {
    return this.http.delete<mongoResponse>(`${this.baseUrl}${school_name}/teachers/${teacher_id}`)
  }

}

export interface School {
  name: string
  teachers?: Array<Teacher>
  courses?: Array<Course>
}
export interface Teacher {
  id: number
  name: string
  department?: string
}
export interface Course {
  id: string
  title: string
  students?: Array<Student>
}
export interface Student {
  id: number
  name: string
  department?: string
  grade?: number
}
export interface mongoResponse {
  acknowledged: boolean,
  modifiedCount: number,
  upsertedId: any,
  upsertedCount: number,
  matchedCount: number
}