import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetaliUserRoutingModule } from './detali.user.routing-module';
import { DetaliUserComponent } from "./detali-user.component";
import {MaterialGeneralModuleModule} from "../../module/materialGeneralModule.module";




@NgModule({
  imports: [
    CommonModule,
    DetaliUserRoutingModule,
    MaterialGeneralModuleModule

  ],
  declarations: [DetaliUserComponent],


})
export class DetaliUserModule { }
