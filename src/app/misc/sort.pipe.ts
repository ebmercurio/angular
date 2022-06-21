import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(arr: any[], col: string, asc: boolean = true): any[] {
    
    const sortFn = (a: any, b: any): number => {
      let x = typeof a[col] == "number" ? a[col] : (a[col]).toString().toLowerCase();
      let y = typeof b[col] == "number" ? b[col] : (b[col]).toString().toLowerCase();
      if(x === y) {
        return 0;
      }
      if(asc) {
        return(x < y) ? -1 : 1;
      } else {
        return (x > y) ? -1 : 1;
      }
    }
    let tempArr = arr.sort(sortFn);
    console.debug(tempArr);
    return tempArr;
  }


}
