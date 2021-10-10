import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing-module';
import {AdminComponent} from "./admin.component";
import {MaterialGeneralModuleModule} from "../module/materialGeneralModule.module";
import {AdminCreateComponent} from "./admin-create/admin-create.component";
import {DeleteModalComponent} from "./admin-create/delete-modal/delete-modal.component";






@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialGeneralModuleModule,
  ],
  declarations: [AdminComponent,AdminCreateComponent, DeleteModalComponent],

})
export class AdminModule { }
