import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from "./login.component";
import {MaterialGeneralModuleModule} from "../../module/materialGeneralModule.module";




@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialGeneralModuleModule

  ],
  declarations: [LoginComponent],


})
export class LoginModule { }
