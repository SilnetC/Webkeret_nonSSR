import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../common/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit, OnDestroy{
  email = new FormControl('');
  password = new FormControl('');

  loading: boolean = false;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
      
  }

  async login() {
    this.loading = true;
    /* if (this.email.value === 'example@gmail.com' && this.password.value === 'admin') {
      this.router.navigateByUrl('/landing');
    } else {
      console.error('Incorrect email or password!');
    } */

    if (this.email.value && this.password.value) {
      this.authService.login(this.email.value, this.password.value).then(cred => {
        console.log(cred);
        this.router.navigateByUrl('/landing');
      }).catch(error => {
        console.error(error);
        this.loading = false;
      }); 
    }

  }

  ngOnDestroy(): void {
      
  }

}
