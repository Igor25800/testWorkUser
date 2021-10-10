import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminComponent} from "./admin.component";
import {AdminCreateComponent} from "./admin-create/admin-create.component";


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'create-users',
        component: AdminCreateComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'create-users'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class AdminRoutingModule {
}
