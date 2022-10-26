import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  template: `
    <p>
      login works!
    </p>
  `,
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor(private service: LoginService) { }

  ngOnInit(): void {
  }

}
