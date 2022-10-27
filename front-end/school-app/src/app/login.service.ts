import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //Mock data for testing, implement user service in database
  valid_users = [{ email: "admin@example.com", password: "1234" }]
  validated = false;

  constructor() { }

  validate_login(email: string, password: string): boolean {
    if (email in this.valid_users && password in this.valid_users)
      return true
    else return false
  }
  //go back to when prof talked about guards
}
