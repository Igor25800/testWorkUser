import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {IUser} from "../../../shared/interfaces/user.interface";
import {AdminCreateComponent} from "../admin-create.component";
import {UserService} from "../../../shared/services/user/user.service";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent implements OnInit, OnDestroy {

  unsubscribe$ = new Subject();

  constructor(public dialogRef: MatDialogRef<AdminCreateComponent>,
              @Inject(MAT_DIALOG_DATA) public data: IUser,
              private userServices: UserService
  ) {
  }

  ngOnInit(): void {
  }


  delete(): void {
    this.userServices.deleteUser(this.data).pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(res => {
      this.dialogRef.close();
    })
  }

  close(): void {
    this.dialogRef.close();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
