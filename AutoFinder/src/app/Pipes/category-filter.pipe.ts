import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {

  transform(vh: any[], category: string): any[] {
    if(!vh)
    {
      return []
    }

    if(!category)
    {
      return vh
    }

    return vh.filter(v => {
      return v.vehicleCategory === category
    })
  }

}
