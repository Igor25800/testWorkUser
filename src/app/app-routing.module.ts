import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {AdminGuard} from "./shared/guard/admin.guard";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path : 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path : 'admin',
    canActivate: [AdminGuard],
    loadChildren: () => import('./admin/admin-module').then(m => m.AdminModule)
  },
  {
    path : 'detali-user/:id',
    loadChildren: () => import('./pages/detali-user/detali-user.module').then(m => m.DetaliUserModule)
  },
  {
    path : 'user-list',
    loadChildren: () => import('./pages/user-list/user-list.module').then(m => m.UserListModule)
  },
  {
    path: '**',
    redirectTo: '/home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
