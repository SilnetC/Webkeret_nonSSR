import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './common/services/auth.guard';

const routes: Routes = [
  {
    path: 'landing',
    loadChildren: () => import('./pages/landing/landing.module').then(m => m.LandingModule)
  },
  {
    path: 'compare',
    loadChildren: () => import('./pages/compare/compare.module').then(m => m.CompareModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/list/list.module').then(m => m.ListModule),
    canActivate: [authGuard]
  },
  {
    path: 'build',
    loadChildren: () => import('./pages/build/build.module').then(m => m.BuildModule),
    canActivate: [authGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./pages/registration/registration.module').then(m => m.RegistrationModule)
  },
  {
    path: '',
    redirectTo: '/landing',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/landing'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
