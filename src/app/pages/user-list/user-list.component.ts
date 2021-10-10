import {Component, OnInit} from '@angular/core';
import {UserService} from "../../shared/services/user/user.service";
import {ICriterion, IUser} from "../../shared/interfaces/user.interface";
import {MatDialog} from "@angular/material/dialog";
import {DialogViewComponent} from "./dialog-view/dialog-view.component";
import {NgxUiLoaderService} from "ngx-ui-loader";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  arrayUser: Array<IUser> = [];
  search!: string;


  constructor(
    private userServices: UserService,
    public dialog: MatDialog,
    private ngxService: NgxUiLoaderService
  ) {
  }

  ngOnInit(): void {
    this.ngxService.start()
    this.getUser()
  }

  getUser(): void {
    this.userServices.getUser().pipe().subscribe(res => {
      if (res) {
        this.arrayUser = res;
        this.ngxService.stop()
      }
    })
  }

  openDialog(items: Array<ICriterion>): void {
    const dialogRef = this.dialog.open(DialogViewComponent, {
      width: '50%',
      data: items
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }


}
