import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'refactor'
})
export class RefactorPipe implements PipeTransform {

  transform(value: string): any {
    let name = value.split(' ')[0].split(' ').map(el => el[0].toUpperCase() + el.substring(1))
    const two = value.split(' ')[1]?.substring(0,1).toUpperCase()
    return `${name}  ${two? `${two}.` : ''} `
}

}
