import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})


export class LoginPageComponent {
  showRegister: boolean = false;
  usernameTaken: boolean = false;
  userName: string = '';
  password: string = '';
  user: User = new User();
  errorMessage: string;
  data: User;
  userNotExist: boolean = false;
  loggedUserName: string;


  constructor(private router: Router, private userService: UserService,) {
  }

  onRegisterSubmit() {
    if (this.user.userName != null && this.user.password != null) {
      this.registerUser();
    }
  }

  registerUser() {
    this.userService.createUser(this.user).subscribe((response: any) => {
      if (response.success == true) {
        this.showRegister = false;
      }
      else {
        this.usernameTaken = true;
        this.errorMessage = response.message;
      }
    });
  }

  onLoginSubmit() {
    if (this.user.userName != null && this.user.password != null) {
      this.loginUser();
    }
  }

  loginUser() {
    this.userService.loginUser(this.user).subscribe((user: any) => {
      if (user == null) {
        this.userNotExist = true;

      }
      else if (this.user.userName == user.userName && this.user.password == user.password) {
        this.loggedUserName = this.user.userName;
        this.router.navigate(["televisions"]);
      }

    });
  }

  exitButton() {
    this.usernameTaken = false;
    this.userNotExist = false;
  }
}
