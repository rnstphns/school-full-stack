import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  template: `
      <div class="header-bar">
        <div class="welcome-message"> 
          <span>Good Luck on the Final!!!</span>
          <div class="navbar">
          <nav>
                <a [routerLink]="['/', 'home']">Home</a>
            </nav>
          </div>
        </div>
        
        <div class="login-bars">
          <input type="text" placeholder="email">
          <input type="text" placeholder="password">
          <button (click)="login()">Login</button>
        </div>
      </div>
  `,
 styleUrls: ['../styles.css']
})
export class LoginComponent implements OnDestroy {

  constructor(private service: LoginService) { }
  

  login(){
    console.log(`TODO: finish login logic`)
  }

  ngOnDestroy(): void {
    
  }

}
