import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListRoutingModule } from './user-list.routing-module';
import { UserListComponent } from "./user-list.component";
import {MaterialGeneralModuleModule} from "../../module/materialGeneralModule.module";
import { DialogViewComponent } from './dialog-view/dialog-view.component';






@NgModule({
  imports: [
    CommonModule,
    UserListRoutingModule,
    MaterialGeneralModuleModule,


  ],
  declarations: [UserListComponent, DialogViewComponent],
  exports: []


})
export class UserListModule { }
