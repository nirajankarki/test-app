import {Pipe, PipeTransform} from '@angular/core';
import {Project} from '../project';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Project[], searchBy: string, searchText: string): any {
    if (value == null) {
      return value;
    }
    const resultArray = [];
    for (const project of value) {
      if (String(project[searchBy]).toLowerCase().indexOf(searchText.toLowerCase()) >= 0) {
        resultArray.push(project);
      }
    }
    return resultArray;
  }

}
