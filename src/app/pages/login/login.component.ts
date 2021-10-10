import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../shared/services/user/user.service";
import {IUser} from "../../shared/interfaces/user.interface";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  arrayUsers: Array<IUser> = [];

  formIn: FormGroup = this.fb.group({
    name: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userServices: UserService,
    private toastr: ToastrService,
  ) {
  }

  ngOnInit(): void {
    this.getUSer();
  }

  getUSer(): void {
    this.userServices.getUser().pipe().subscribe(res => {
      this.arrayUsers = res;
    })
  }

  login() {
    const {name, password} = this.formIn.value
    const user = this.arrayUsers.find(el => (el.name === name && el.password === password && el.role === 'user'));

    if (name === 'admin' && password === 'admin') {
      this.router.navigate(['admin'])
      this.userServices.isAdminLogin = true
      this.toastr.success('Пароль Правильний Адмін', 'Логин');
    } else if (user) {
      this.toastr.success('Пароль Правильний User', 'Логин');
      this.router.navigate([`detali-user/${user.id}`])
    } else {
      this.toastr.error('Немає', 'Логин');
      //this.toastr.warning('Немає', 'Логин');
    }


  }
}
