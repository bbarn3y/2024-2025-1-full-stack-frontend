import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    title: 'Login',
    path: 'login',
    loadChildren: () => import('./authentication/authentication.module')
      .then((m) => m.AuthenticationModule)
  }
];
