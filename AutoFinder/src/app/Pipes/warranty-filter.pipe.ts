import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'warrantyFilter'
})
export class WarrantyFilterPipe implements PipeTransform {

  transform(vh: any[], warrantymin: number, warrantymax: number): any[] {
    if(!vh)
    {
      return []
    }

    if(warrantymin == -1 && warrantymax == -1){
      return vh
    }

    return vh.filter(v => {
      return v.vehicleWarranty >= warrantymin && v.vehicleWarranty <= warrantymax
    })
  }

}
