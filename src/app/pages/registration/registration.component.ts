import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../common/services/auth.service';
import { User } from '../../common/models/User';
import { UserService } from '../../common/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent implements OnInit{

  signUpForm = new FormGroup({
    name: new FormGroup({
      vnev: new FormControl(''),
      knev: new FormControl('')
    }),
    email: new FormControl(''),
    password: new FormControl(''),
    checkPassword: new FormControl('')
  })

  constructor(private location: Location, private authService: AuthService, private userService: UserService, private router: Router) { }
  
  ngOnInit(): void {
      
  }

  registration() {
    console.log(this.signUpForm.value);

    let email = this.signUpForm.get('email')?.value;
    let password = this.signUpForm.get('password')?.value;

    if (email && password) {
      this.authService.registration(email, password).then(cred => {
        console.log(cred);
        const user: User = {
          id: cred.user?.uid as string,
          email: email as string,
          username: this.signUpForm.get('email')?.value?.split('@')[0] as string,
          name: {
            vnev: this.signUpForm.get('name.vnev')?.value as string,
            knev: this.signUpForm.get('name.knev')?.value as string
          }
        };
        this.userService.create(user).then(_ => {
          console.log('Felhasználó sikeresen hozzáadva az adatbázishoz!');
          this.router.navigateByUrl('/login');
        }).catch(error => {
          console.error(error);
        })
      }).catch(error => {
        console.error(error);
      });
    }

  }

  backPreviousPage() {
    this.location.back();
  }
}
