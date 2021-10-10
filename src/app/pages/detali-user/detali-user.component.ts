import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "../../shared/services/user/user.service";
import {IUser} from "../../shared/interfaces/user.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";


@Component({
  selector: 'app-detali-user',
  templateUrl: './detali-user.component.html',
  styleUrls: ['./detali-user.component.scss']
})
export class DetaliUserComponent implements OnInit, OnDestroy {

  arrayUser: Array<IUser> = []
  id!: number | null
  unsubscribe$ = new Subject()

  constructor(
    private userServices: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    this.route.paramMap.subscribe(res => {
      this.id = Number(res.get('id'))
    })
    this.userServices.getUser().pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(res => {
      this.arrayUser = res.filter(el => this.id === el.id);
    })
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
