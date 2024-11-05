import { Routes } from '@angular/router';
import {privateGuard} from "./_guards/private.guard";
import {publicGuard} from "./_guards/public.guard";

export const routes: Routes = [
  {
    title: 'Login',
    path: 'login',
    loadChildren: () => import('./authentication/authentication.module')
      .then((m) => m.AuthenticationModule),
    canActivate: [publicGuard]
  },
  {
    path: 'inner',
    loadChildren: () => import('./inner/inner.module')
      .then(m => m.InnerModule),
    canActivate: [privateGuard],
    canActivateChild: [privateGuard]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  // {
  //   path: '**',
  //   component: NotFoundComponent
  // }
];
