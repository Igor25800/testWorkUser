import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetaliUserComponent } from "./detali-user.component";


const routes: Routes = [
  {
    path: '',
    component: DetaliUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class DetaliUserRoutingModule {
}
