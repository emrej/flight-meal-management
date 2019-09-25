import {Pipe, PipeTransform} from '@angular/core';
import {AirportDetail} from "../entities/airport-detail";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: AirportDetail[], searchText: string): any[] {
    if (!items || !searchText) return [];
    searchText = searchText.toLowerCase();

    return items.filter(it => {
      return it.code.toLowerCase().includes(searchText)
        || it.name.toLowerCase().includes(searchText)
        || it.description.toLowerCase().includes(searchText);
    });
  }
}
