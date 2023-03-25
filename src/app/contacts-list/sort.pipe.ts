import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from '../models/contact.model';


@Pipe({
  name: 'sort',
  pure: true
})
export class SortPipe implements PipeTransform{

  transform(value: Contact[], sortBy: keyof Contact, sortOrder: number) {
    if(sortOrder === 0){
      return [...value];
    }
    if(sortOrder === 1){
      return [...value].sort((a,b) =>  a[sortBy] === b[sortBy] ? 0 : ( a[sortBy] > b[sortBy] ? 1 : -1));
    }
    if(sortOrder === 2){
      return [...value].sort((a,b) =>  a[sortBy] === b[sortBy] ? 0 : ( a[sortBy] > b[sortBy] ? -1 : 1));;
    }
    return [...value];
  }

}
