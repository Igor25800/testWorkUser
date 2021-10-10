import { Pipe, PipeTransform } from '@angular/core';
import {IUser} from "../interfaces/user.interface";

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {

  transform(value: Array<IUser> ,search: string): Array<IUser> {
    if(!value) return  [];
    if(!search) return value
    return value.filter(el => el.name.toLowerCase().includes(search.toLowerCase()));
  }

}
