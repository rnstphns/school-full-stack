import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { SchoolDetailsComponent } from './school-details.component';
import { LoginComponent } from './login.component';
import { EditTeacherComponent } from './edit-teacher.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SchoolDetailsComponent,
    LoginComponent,
    EditTeacherComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent, title: 'Homepage'},
      {path: 'login', component: LoginComponent, title: 'Login'},
      {path: 'schools', component: SchoolDetailsComponent, title: 'School Details'},
      {path: 'teachers', component: EditTeacherComponent, title: 'Edit Teacher'},
      {path: '**', redirectTo: 'home'}
    ])  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
