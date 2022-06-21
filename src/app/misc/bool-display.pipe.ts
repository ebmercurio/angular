import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boolDisplay'
})
export class BoolDisplayPipe implements PipeTransform {

  transform(value: boolean, lang: string = "en"): string {
    if(lang == "sp")
    return value ? "Si" : "No";
    else
    return value ? "Yes" : "No";
  }
}
