import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatTableModule} from '@angular/material/table';
import {SearchPipe} from "../shared/pipes/search.pipe";
import {MatDialogModule} from '@angular/material/dialog';
import {RefactorPipe} from "../shared/pipes/refactor.pipe";
import {ToastrModule} from "ngx-toastr";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {NgxUiLoaderModule} from "ngx-ui-loader";
import {loade} from "../shared/config/loader.config";


@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatTableModule,
    FormsModule,
    MatDialogModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      progressBar: true
    }),
    MatProgressSpinnerModule,
    NgxUiLoaderModule.forRoot(loade)


  ],
  declarations: [SearchPipe, RefactorPipe],
  exports: [MatInputModule, MatButtonModule, ReactiveFormsModule, MatTableModule, FormsModule, SearchPipe, MatDialogModule, RefactorPipe, MatProgressSpinnerModule, NgxUiLoaderModule]


})
export class MaterialGeneralModuleModule {
}
