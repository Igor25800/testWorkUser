import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../shared/services/user/user.service";
import {User} from "../../shared/models/user.model";
import {ICriterion, IUser} from "../../shared/interfaces/user.interface";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {MatDialog} from "@angular/material/dialog";
import {DialogViewComponent} from "../../pages/user-list/dialog-view/dialog-view.component";
import {DeleteModalComponent} from "./delete-modal/delete-modal.component";

@Component({
  selector: 'app-admin-create',
  templateUrl: './admin-create.component.html',
  styleUrls: ['./admin-create.component.scss']
})


export class AdminCreateComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['id', 'name', 'password', 'view', 'edit', 'delete'];
  isEdit = false;
  user!: IUser;
  arrayUsers: Array<IUser> = []
  formUser!: FormGroup;
  unsubscribe$ = new Subject();

  constructor(
    private fb: FormBuilder,
    private userServices: UserService,
    public dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.getForm()
    this.getUser()
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

  getUser(): void {
    this.userServices.getUser().pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(res => {
      this.arrayUsers = res;
    })
  }

  getForm(): void {
    this.formUser = this.fb.group({
      name: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      items: this.fb.array([this.createItem()])
    });
  }

  openDialogDelete(items: IUser): void {
    const dialogRef = this.dialog.open(DeleteModalComponent, {
      width: '20%',
      data: items
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getUser()
    });
  }

  editUser(user: IUser): void {
    (this.formUser.get('items') as FormArray).clear();
    this.formUser.patchValue(user)
    user.items?.forEach((users) => {
      (this.formUser.get('items') as FormArray).push(this.fb.group({...users}));
    });
    this.isEdit = true
    this.user = user
  }

  get formArray(): FormArray {
    return this.formUser.get('items') as FormArray;
  }

  createItem(): FormGroup {
    return this.fb.group({
      year: new FormControl('', Validators.required),
      university: new FormControl('', Validators.required),
      specialty: new FormControl('', Validators.required),
    });
  }

  add(): void {
    (this.formUser.get('items') as FormArray).push(this.createItem());
  }

  createUser() {
    const {name, password, items} = this.formUser.value
    const user = new User(2, 'user', name, password, items)
    if (this.arrayUsers.length > 0) {
      user.id = this.arrayUsers.slice(-1)[0].id + 1;
    }
    this.userServices.addUser(user).pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(res => {
      this.getUser()
      this.resetForm()
    })
  }

  get isToggleBtnName(): string {
    return this.isEdit ? 'Save User' : 'Create User'
  }

  get isToggleBtnColor(): string {
    return this.isEdit ? 'accent' : 'primary'
  }

  resetForm(): void {
    (this.formUser.get('items') as FormArray).clear();
    (this.formUser.get('items') as FormArray).push(this.createItem());
    this.formUser.reset()
  }

  saveUser(): void {
    const {name, password, items} = this.formUser.value;
    const user = new User(this.user.id, 'user', name, password, items)
    this.userServices.updateUser(user).pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(res => {
      this.getUser()
      this.resetForm()
    });

    this.isEdit = false;
  }

  toggle(): void {
    if (this.isEdit) {
      this.saveUser()
    } else {
      this.createUser()
    }
  }

  deleteItems(index: number): void {
    if (this.formArrays?.length > 1)
      (this.formUser.get('items') as FormArray).removeAt(index);
  }

  get formArrays(): FormArray {
    return this.formUser.get('items') as FormArray;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
