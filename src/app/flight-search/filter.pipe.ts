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
      return it.code.toLowerCase().startsWith(searchText)
        || it.name.toLowerCase().startsWith(searchText)
        || it.description.toLowerCase().startsWith(searchText);
    });
  }
}
