import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{



  signupUsers: any[] = [];
  signupObj: any = {
    username: '',
    email: '',
    password: ''
  };

  loginObj: any = {
    username: '',
    password: ''
  }

  constructor(private router: Router){}

  ngOnInit(): void {

    const loacalData = localStorage.getItem('signupUsers');
    if (loacalData != null) {
      this.signupUsers = JSON.parse(loacalData);
    }
  }


  title = 'Login';

  onSignUp() {
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signupUsers', JSON.stringify(this.signupUsers));
    this.signupObj = {
      username: '',
      email: '',
      password: ''
    };
  }

  onLogin() {
    const isUserExist = this.signupUsers.find(m => m.username == this.loginObj.username && m.password == this.loginObj.password)
    if (isUserExist != undefined) {
      this.router.navigate(['/users'])
    } else {
      alert("Wrong Credentials")
    }
  }

}




