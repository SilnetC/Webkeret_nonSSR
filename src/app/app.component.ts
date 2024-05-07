import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { AuthService } from './common/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  page: string = '';

  routes: Array<string> = [];

  loggedUser?: firebase.default.User | null;

  constructor(private router: Router, private authService: AuthService) { 
  }

  ngOnInit() {
    this.routes = this.router.config.map(conf => conf.path) as string[];

    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((evts: any) => {
      const currentPage = (evts.urlAfterRedirects as string).split('/')[1] as string;
      if (this.routes.includes(currentPage)) {
        this.page = currentPage;
      }
    });

    this.authService.isUserLoggedIn().subscribe(user => {
      console.log(user);
      this.loggedUser = user;
      localStorage.setItem('user', JSON.stringify(this.loggedUser));
    }, error => {
      console.error(error);
      localStorage.setItem('user', JSON.stringify('null'));
    })
  }

  changePage(selectedMenu: string) {
    this.router.navigateByUrl(selectedMenu);
  }

  toggleSidenav(sidenav: MatSidenav) {
    sidenav.toggle();
  }

  onClose(event: any, sidenav: MatSidenav) {
    if (event === true) {
      sidenav.close();
    }
  }

  logout(_?: boolean) {
    this.authService.logout().then(() => {
      console.log('Sikeres kijelentkezés.');
    }).catch(error => {
      console.error(error);
    });
  }
}
