import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../../interfaces/user.interface";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isAdminLogin: boolean = false

  private url: string = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }


  getUser(): Observable<Array<IUser>> {
    return this.http.get<Array<IUser>>(this.url);
  }

  addUser(user: IUser): Observable<Array<IUser>> {
    return this.http.post<Array<IUser>>(this.url, user)
  }

  updateUser(user: IUser): Observable<Array<IUser>> {
    return this.http.put<Array<IUser>>(`${this.url}/${user.id}`, user);
  }

  deleteUser(user: IUser): Observable<Array<IUser>> {
    return this.http.delete<Array<IUser>>(`${this.url}/${user.id}`);
  }

}
