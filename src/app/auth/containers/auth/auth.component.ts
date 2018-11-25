import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  errorMessage: string;
  constructor(private authService: AuthService ,
              private router: Router
  ) { }

  login(loginForm: NgForm ){

    if(loginForm && loginForm.valid){
      const username: string = loginForm.form.value.username;
      const pwd: string = loginForm.form.value.password;
      this.authService.logIn(username, pwd );

      if (this.authService.redirectUrl) {
        this.router.navigateByUrl(this.authService.redirectUrl);
      } else {
        this.router.navigate(['/']);
      }
    } else {
      this.errorMessage = 'Please enter a user name and password.';
    }
  }


  ngOnInit() {
  }

}
