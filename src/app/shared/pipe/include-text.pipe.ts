import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'includeText'
})
export class IncludeTextPipe implements PipeTransform {

  transform(source: string, value: string | string[]): boolean | null {
    let status = null;
    // -----
    if (typeof value === 'string') {
      if (source.includes(value)) {
        status = true;
      }
    } else {
      value.forEach(x => {
        if (source.includes(x)) {
          status = true;
          return;
        }
      })
    }
    return status;
  }

}
