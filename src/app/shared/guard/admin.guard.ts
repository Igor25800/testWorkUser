import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {UserService} from "../services/user/user.service";


@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private userServices: UserService,
    private router: Router
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return this.isActivate();
  }

  isActivate(): boolean {
    if (this.userServices.isAdminLogin) {
      return true
    } else {
      this.router.navigate(['login'])
      return false
    }
  }

}
