import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'appFilter'
})

export class  FilterPipes implements PipeTransform {
  transform(items, value: string, filde: string): any {
    if (items.length === 0 || !value) {
      return items;
    }
    return items.filter((i) => {
      if (!isNaN(i[filde])) {
        i[filde] += '';
      }
      return i[filde].toLowerCase().indexOf(value.toLowerCase()) !== -1
    });

  }
}
