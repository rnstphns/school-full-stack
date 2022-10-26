import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  template: `
      <div class="header-bar">
        <div class="welcome-message"> 
          <span>Good Luck on the Final!!!</span>
        </div>
        <div class="login-bars">
          <input type="text" placeholder="email">
          <input type="text" placeholder="password">
          <button>Login</button>
        </div>
      </div>
  `,
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor(private service: LoginService) { }

  ngOnInit(): void {
  }

}
