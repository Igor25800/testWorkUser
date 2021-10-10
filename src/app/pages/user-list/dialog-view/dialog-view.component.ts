import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {UserListComponent} from "../user-list.component";
import {ICriterion} from "../../../shared/interfaces/user.interface";

@Component({
  selector: 'app-dialog-view',
  templateUrl: './dialog-view.component.html',
  styleUrls: ['./dialog-view.component.scss']
})
export class DialogViewComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UserListComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Array<ICriterion>)  { }

  ngOnInit(): void {}

}
